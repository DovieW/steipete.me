import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

function parseArgs(argv) {
	const out = {
		blogRoot: path.join(repoRoot, 'src', 'content', 'blog'),
		outFile: path.join(repoRoot, 'docs', 'ai-posts.txt'),
		verbose: false,
	};

	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		if (a === '--blog-root') {
			out.blogRoot = path.resolve(process.cwd(), argv[++i] ?? '');
			continue;
		}
		if (a === '--out') {
			out.outFile = path.resolve(process.cwd(), argv[++i] ?? '');
			continue;
		}
		if (a === '--verbose') {
			out.verbose = true;
			continue;
		}
		if (a === '--help' || a === '-h') {
			console.log(`Usage: node scripts/generate-ai-posts-txt.mjs [options]

Options:
  --blog-root <path>   Blog root folder (default: src/content/blog)
  --out <path>         Output .txt file (default: docs/ai-posts.txt)
  --verbose            Print matched post list
  -h, --help           Show help
`);
			process.exit(0);
		}
	}

	return out;
}

function stripQuotes(s) {
	const t = s.trim();
	if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
		return t.slice(1, -1);
	}
	return t;
}

function splitFrontmatter(raw) {
	// Frontmatter format:
	// ---
	// key: value
	// ---
	// body...
	if (!raw.startsWith('---')) {
		return { frontmatter: '', body: raw };
	}

	const lines = raw.split(/\r?\n/);
	if (lines[0].trim() !== '---') {
		return { frontmatter: '', body: raw };
	}

	let endIdx = -1;
	for (let i = 1; i < lines.length; i++) {
		if (lines[i].trim() === '---') {
			endIdx = i;
			break;
		}
	}

	if (endIdx === -1) {
		return { frontmatter: '', body: raw };
	}

	const frontmatter = lines.slice(1, endIdx).join('\n');
	const body = lines.slice(endIdx + 1).join('\n');
	return { frontmatter, body };
}

function parseField(frontmatter, key) {
	const re = new RegExp(`^${key}\\s*:\\s*(.+)$`, 'm');
	const m = frontmatter.match(re);
	return m ? stripQuotes(m[1]) : '';
}

function parseTags(frontmatter) {
	// Supports:
	// tags: ["ai", "foo"]
	// tags: ai, foo
	// tags:
	//   - AI
	//   - Claude
	const inline = frontmatter.match(/^tags\s*:\s*(.+)$/m);
	if (!inline) return [];

	const rest = inline[1].trim();
	if (rest.startsWith('[')) {
		const inside = rest.replace(/^\[\s*/, '').replace(/\s*\]$/, '');
		return inside
			.split(',')
			.map((t) => stripQuotes(t.trim()))
			.filter(Boolean);
	}

	if (rest.length > 0) {
		return rest
			.split(',')
			.map((t) => stripQuotes(t.trim()))
			.filter(Boolean);
	}

	// Multi-line list.
	const lines = frontmatter.split(/\r?\n/);
	const start = lines.findIndex((l) => l.trim() === 'tags:');
	if (start === -1) return [];

	const tags = [];
	for (let i = start + 1; i < lines.length; i++) {
		const line = lines[i];
		if (!/^\s+/.test(line)) break;
		const mm = line.match(/^\s*-\s*(.+)$/);
		if (mm) tags.push(stripQuotes(mm[1].trim()));
	}
	return tags;
}

function tagIsAiRelated(tag) {
	const t = tag.trim().toLowerCase();
	// Covers your site’s tag patterns like "AI", "Claude-Code", "AI Agents", etc.
	return (
		t === 'ai' ||
		t.includes('ai') ||
		t.includes('claude') ||
		t.includes('anthropic') ||
		t.includes('openai') ||
		t.includes('gpt') ||
		t.includes('llm') ||
		t.includes('mcp') ||
		t.includes('agent') ||
		t.includes('copilot') ||
		t.includes('gemini') ||
		t.includes('codex') ||
		t.includes('vibe')
	);
}

const strongTerms = [
	'\\bAI\\b',
	'A\\.I\\.',
	'artificial intelligence',
	'\\bLLM(s)?\\b',
	'large language model(s)?',
	'\\bGPT-?\\d*\\b',
	'ChatGPT',
	'OpenAI',
	'Anthropic',
	'\\bClaude\\b',
	'Claude Code',
	'\\bCodex\\b',
	'\\bCopilot\\b',
	'\\bGemini\\b',
	'\\bBard\\b',
	'\\bMistral\\b',
	'\\bLlama\\b',
	'Stable Diffusion',
	'Midjourney',
	'\\bprompt(s|ing)?\\b',
	'\\bagentic\\b',
	'Model Context Protocol',
	'\\bMCP\\b',
	'vibe[- ]coding',
];

const aiContentRe = new RegExp(`(${strongTerms.join('|')})`, 'i');

async function walk(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const out = [];
	for (const e of entries) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) {
			out.push(...(await walk(p)));
			continue;
		}
		if (e.isFile() && (p.endsWith('.md') || p.endsWith('.mdx'))) {
			out.push(p);
		}
	}
	return out;
}

function formatPostBlock(title, body) {
	const normalizedTitle = (title || '').toString().trim();
	const normalizedBody = (body || '').toString().trim();
	return `${normalizedTitle.toUpperCase()}\n\n${normalizedBody}`;
}

async function main() {
	const { blogRoot, outFile, verbose } = parseArgs(process.argv.slice(2));

	const files = await walk(blogRoot);
	const posts = [];

	for (const absPath of files) {
		const raw = await fs.readFile(absPath, 'utf8');
		const { frontmatter, body } = splitFrontmatter(raw);

		const title = parseField(frontmatter, 'title') || path.basename(absPath);
		const description = parseField(frontmatter, 'description');
		const pubDatetime = parseField(frontmatter, 'pubDatetime');
		const tags = parseTags(frontmatter);

		const tagsMatch = tags.some(tagIsAiRelated);
		const textMatch = aiContentRe.test(`${title}\n${description}\n${body}`);

		if (!tagsMatch && !textMatch) continue;

		posts.push({
			absPath,
			title,
			pubDatetime,
			body,
		});
	}

	posts.sort((a, b) => {
		const ad = Date.parse(a.pubDatetime || '') || 0;
		const bd = Date.parse(b.pubDatetime || '') || 0;
		return bd - ad;
	});

	if (verbose) {
		for (const p of posts) {
			const rel = path.relative(repoRoot, p.absPath);
			console.log(`${p.pubDatetime || 'NO_DATE'}\t${rel}\t${p.title}`);
		}
		console.log('');
	}

	const blocks = posts.map((p) => formatPostBlock(p.title, p.body));
	const output = blocks.join('\n\n');

	await fs.mkdir(path.dirname(outFile), { recursive: true });
	await fs.writeFile(outFile, output.endsWith('\n') ? output : `${output}\n`, 'utf8');

	console.log(`Wrote ${posts.length} posts to ${path.relative(repoRoot, outFile)}`);
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});
