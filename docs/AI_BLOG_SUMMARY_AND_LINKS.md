# AI Blog Summary and Links

## Detailed Points (by post)

### Shipping at Inference-Speed (2025-12-28)

**Summary:** A detailed update on the author’s current AI‑driven workflow: why GPT‑5.2/codex changed the pace of shipping, how he structures projects and prompts, why he avoids certain process overhead, and where the remaining hard problems still are.

- "Vibe coding" has improved drastically since ~May; what used to be occasional working prompts is now the baseline expectation, enabling unreal shipping speed.
- He’s burned a lot of tokens and is providing an update on the state of his workflow and tools.
- He rejects the idea that you must write code to feel architecture; with agents, you learn how long things *should* take and get suspicious when a task isn’t one-shot.
- Output is now mostly limited by inference time and hard thinking, not typing speed.
- Most software is just data transformation/storage/display, so he starts with a CLI by default.
- CLI-first makes agent loops tighter because agents can call the tool directly and verify output.
- GPT‑5 was the “factory” unlock; it took time for codex to catch up to Claude Code features, but that’s when he began to trust the model more.
- He mostly watches the code stream instead of reading everything; understanding system structure is often enough.
- The key decisions now are language, ecosystem, and dependencies rather than low-level code.
- Preferred languages: TypeScript for web, Go for CLIs, Swift for macOS/UI; Go grew on him because agents write it well and the type system keeps linting fast.
- For Mac/iOS work, Xcode is less necessary; he doesn’t use `.xcodeproj` files.
- Swift’s build tooling is sufficient, and codex can run iOS apps and deal with the Simulator without extra MCPs.
- He’s writing while codex is doing a multi-hour refactor, cleaning up prior Opus 4.0 output.
- Benchmarks are hard to trust; you must try models to feel the differences.
- Codex appears trained to read a lot before writing; it can silently read for 10–15 minutes.
- That wait is annoying but increases the chance of correct fixes.
- Opus is more eager: good for small edits, weaker for large features/refactors, and more likely to miss parts.
- Even if codex takes 4x longer per task, it’s faster overall because he avoids rework.
- Codex helped him drop Claude Code “charades.” He now starts a conversation, asks questions, lets it explore, then says “build.”
- “Plan mode” is a workaround for older models; it’s not magic.
- GPT‑5.2 was a big leap; he built **oracle**, a CLI for GPT‑5 Pro that uploads files/prompts and manages sessions.
- He built oracle because agents sometimes got stuck; he’d ask them to write to markdown then query Pro.
- The oracle workflow is documented in his global `AGENTS.MD` and the model can trigger it automatically.
- Oracle was a huge unlock: Pro can speedrun ~50 websites and reason deeply; runs can take 10 minutes or over an hour.
- GPT‑5.2 reduced his need for oracle; usage dropped from multiple times daily to a few times a week.
- Building oracle taught him browser automation, Windows, and “skills.”
- GPT‑5.2 now one-shots most tasks he throws at it.
- Knowledge cutoff matters: GPT‑5.2 goes to end of August vs Opus mid‑March (about a 5‑month advantage).
- VibeTunnel example: he invested two months, got it so good he coded from his phone, then paused it for mental health.
- Earlier attempts to refactor away from TypeScript with older models (Rust/Go/Zig) failed.
- Recently he gave codex a two-sentence prompt to convert the forwarding system to Zig; it ran for ~5 hours with compactions and worked.
- He’s now focused on Clawdis, an AI assistant with broad access (computers, messages, email, home automation, cameras, lights, music, bed temperature).
- Clawdis has its own voice, a CLI to tweet, and a bot presence.
- Clawdis can see/control the screen; he wants it to monitor agents via character streams instead of images and is unsure how that will pan out.
- He acknowledges this post sounds like marketing for OpenAI but hopes Anthropic ships Opus 5; competition matters.
- He loves Opus for general automation and says it powers Clawd; his agent would be less fun on GPT‑5 alone.
- His workflow hasn’t changed much since his October post; this is an update, not a full rewrite.
- He typically works on 3–8 projects simultaneously; context switching is tiring and only feasible at home in quiet focus.
- Most software is boring; small CLI utilities (like checking food delivery) don’t require deep thought.
- He focuses on one main project with satellite projects running in parallel.
- With experience, he can predict when models will struggle and when they’ll sail through.
- He uses codex’s queueing feature to pipeline ideas; he views himself as the bottleneck rather than agent orchestration systems.
- His building style is iterative: build → play → feel → refine; he rarely has a complete design upfront.
- Systems that demand a complete spec aren’t a fit for him; he needs to touch and explore the thing to shape it.
- He almost never reverts or checkpoints; he asks the model to change things instead of rolling back.
- If he dislikes results, he steers the model; he compares progress to walking a winding mountain path.
- He commits to `main` and avoids worktrees; occasional worktrees are model-created but rare.
- Linear evolution reduces cognitive load and avoids merge conflicts; this works because he’s usually solo.
- He cross-references projects constantly, asking codex to copy existing solutions from sibling repos.
- This approach saves prompts and accelerates scaffolding of new projects.
- He doesn’t use session recall systems; instead he keeps per-project docs and forces the model to read them via a docs-list script.
- This docs approach scales with project size; smaller projects don’t need it.
- With GPT‑5.2, he no longer restarts sessions; context can stay loaded and still perform well.
- This works if tasks are serialized and don’t collide; codex lacks file-change events so care is needed.
- Codex handles context better; he feels he gets ~5x more done per session than with Claude.
- He suspects codex is more concise internally, while Opus is wordier; he’s seen internal reasoning leak in codex.
- His prompts are now shorter; he types more and often uses images to show UI issues.
- A short prompt plus a screenshot (e.g., “fix padding”) often gets him the result he needs.
- He no longer references markdown files as much because his docs-list script forces doc reading.
- He often tells the model to “write docs to docs/*.md” and lets it pick filenames.
- He designs codebases to be agent-friendly rather than purely human-navigable.
- Picking dependencies and system design remain hard and require real thinking.
- He sometimes asks an agent to propagate changes across recent Go projects and bump patch versions.
- He automates everything and relies on “skills” for tasks like domain/DNS changes.
- He uses two Macs (MBP + Jump Desktop to Mac Studio) and syncs via git instead of worktrees.
- Running UI/browser automation on the Studio avoids popups on his main machine.
- Long-running tasks keep running on the Studio; remote becomes the main workstation while traveling.
- He tried async agents (codex/Cursor web) but missed steerability; PR-based flows add complexity.
- He doesn’t find slash commands useful; he prefers explicit “commit/push” instructions.
- Cleanup/refactors happen ad‑hoc when prompts slow down or he sees ugly code.
- Issue trackers didn’t stick; he acts immediately on important ideas and bugs.
- He recommends starting with the model and a CLI first; he built a YouTube-summary Chrome extension only after the CLI core was solid.
- The summarize CLI converts input to markdown, runs model summarization, supports local/free/paid models, transcribes locally, and uses a local daemon for speed.
- His default model is gpt‑5.2‑codex high; xhigh is too slow and he doesn’t want to micromanage modes.
- He shows his `~/.codex/config.toml` with high reasoning effort, large token limits, auto-compaction, and feature flags.
- He raised token limits to avoid silent truncation; defaults are too small.
- He notes web search isn’t on by default, which surprises him.
- `unified_exec` replaced tmux/runner scripts; other flags are “neat.”
- He’s not afraid of compaction since the new `/compact` endpoint works well; it slows tasks but can act like a review pass that finds bugs.
- He ends by saying he plans to write more, has a backlog of ideas, and is having a lot of fun building.

#### Links (external, unique)

- https://x.com/thsottiaux/status/2004789121492156583 — Tweet referenced as evidence of heavy token usage.
- https://x.com/steipete/status/1997380251081490717 — Tweet about needing to write code to feel architecture, which the author disputes.
- https://github.com/steipete/ — “Building like a factory” reference to the author’s GitHub.
- https://github.com/steipete/clawdis/tree/main/apps/ios — Example that he doesn’t use Xcode project files.
- https://x.com/steipete/status/1997412175615246603 — Tweet about starting a conversation with the model instead of plan mode.
- https://x.com/steipete/status/2001228002953158928 — Tweet referenced as a commonly misunderstood plan‑mode statement.
- https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/ — Blog post used to argue plan mode isn’t magic.
- https://github.com/steipete/oracle — Repo for the “oracle” CLI tool he built for GPT‑5 Pro.
- https://github.com/steipete/agent-scripts/blob/main/AGENTS.MD — Global instructions file that documents the oracle workflow.
- https://vibetunnel.sh/ — VibeTunnel project site referenced in a model capability example.
- https://github.com/amantus-ai/vibetunnel/compare/6a1693b482fa4ef0ac021700a9ec05489a3a108f...a81b29ee3de6a2c85fd9fa41423d968dcc000515 — Comparison link showing the Zig conversion of VibeTunnel’s forwarding system.
- https://clawdis.ai/ — Clawdis project site (AI assistant with broad device access).
- https://x.com/steipete/status/2005213014778409280/photo/1 — Tweet with a photo showing “all my computers.”
- https://imsg.to/ — Service for iMessage automation used by Clawdis.
- https://github.com/steipete/gogcli — CLI for email access used by Clawdis.
- https://www.openhue.io/cli/openhue-cli — Home automation CLI referenced as part of Clawdis’s integrations.
- https://camsnap.ai/ — Camera integration referenced for Clawdis.
- https://sonoscli.sh/ — Music control CLI referenced for Clawdis.
- https://eightctl.sh/ — Bed temperature control CLI referenced for Clawdis.
- https://github.com/steipete/sag — Repo for Clawdis’s voice/assistant component.
- https://github.com/steipete/bird — CLI for tweeting used by Clawdis.
- https://clawd.bot — Clawdis bot presence.
- https://www.peekaboo.boo/ — Peekaboo site referenced for screen vision/control.
- https://soul.md/ — Link used to describe Opus’s “special” quality.
- https://x.com/steipete/status/2005083410482733427/photo/1 — Tweet showing multiple projects running in parallel.
- https://ordercli.sh/ — Example CLI tool for checking food delivery, used to illustrate “boring” software.
- https://github.com/steipete/agent-scripts/blob/main/scripts/docs-list.ts — Script referenced for forcing the model to read docs.
- https://x.com/steipete/status/1974108054984798729 — Tweet showing an internal thinking leak from codex.
- https://x.com/steipete/status/2005243588414931368 — Tweet about codex’s wording/voice.
- https://x.com/steipete/status/2005320848543298009 — Tweet about the YouTube‑summary extension idea.
- https://github.com/steipete/summarize/releases/latest — Release link for the summarize CLI.
- https://codexbar.app/ — Project link used in the closing “too much fun” note.
- https://x.com/steipete/status/2005393881395835045 — Tweet linked as another “building things” reference.
- https://x.com/steipete — Twitter profile link in the closing call to follow.

### The Signature Flicker (2025-12-18)

**Summary:** A deep dive into terminal UI flicker in AI coding agents, why alt‑screen TUIs feel worse for “terminal‑native” workflows, and why Claude Code’s new renderer is a better direction despite the complexity.

- Anthropic fixed Claude Code’s infamous flicker in version 2.0.72, which the author finds surprising enough to call it out in the tl;dr.
- The signature flicker was widely noticed; it’s not exclusive to Claude Code—many TUIs (including Cursor and Ink‑based apps) suffer similarly.
- Terminal flicker is hard to solve; Claude Code uses React under the hood, which complicates incremental rendering.
- Terminals weren’t designed for rich interactivity; ANSI escape codes can redraw in place but often cause flicker.
- Two core approaches exist: alt‑screen mode (full viewport control) or differential rendering that preserves scrollback.
- Both approaches have tradeoffs; he links to a thorough explanation by Mario Zechner.
- He has hands‑on experience with differential rendering, having ported pi‑tui to Swift as TauTUI (mostly via Codex).
- For coding agents that mostly emit text, careful incremental rendering (without alt‑screen) is the better terminal‑citizen approach.
- Ink originally couldn’t do the fine‑grained updates required for a long‑running UI.
- Ink has improved, but Anthropic still rewrote the renderer for tighter control while keeping React as the component model.
- A quote from Anthropic emphasizes their desire for a native terminal feel and a high bar for alt‑screen use.
- The current landscape shows most agents moving to alt‑screen TUIs after fighting flicker, but the user experience is often worse.
- The author’s main gripe with alt‑screen: it breaks native terminal features like selection, scrolling, and search.
- These could be rebuilt in a TUI, but they don’t feel like real terminal behavior.
- Amp moved to its own renderer and alt‑screen; it avoids flicker but loses native selection and has limited search behavior.
- Gemini briefly switched to an alt‑mode TUI, users hated it, and Google rolled it back quickly.
- The Gemini alt‑mode required a selection mode (CTRL‑S) to copy text, which felt worse.
- OpenCode’s opentui is impressive technically (TypeScript + Zig) and can render SolidJS/React.
- OpenCode’s TUI doesn’t work in macOS Terminal below macOS 26 or in GNOME Terminal.
- Usability issues in OpenCode include awkward auto‑scroll, no scrollbar, and broken right‑click paste into input.
- By contrast, Codex stays in the primary screen buffer and behaves like a terminal.
- Codex still has flaws (overwrites lines), but the terminal‑native behavior is what matters most.
- OpenAI’s move toward alt‑screen for Codex feels like a regression; he hopes they reverse course.
- Mario Zechner’s pi is highlighted as the gold standard for differential rendering and inline images.
- Claude Code and pi show you can eliminate flicker without sacrificing terminal muscle memory.
- Alt‑screen is fine for dashboards, but coding agents should preserve native selection, scrollback, and search.
- The conclusion: in 2025, we should have smooth rendering without giving up terminal superpowers.
- A footnote explains React is flexible enough to power non‑browser renderers like Ink.

#### Links (external, unique)

- https://www.reddit.com/r/ClaudeAI/comments/1lxs53r/what_is_this_madness/ — Reddit thread referenced as the popular “flicker” complaint.
- https://github.com/vadimdemedes/ink — Ink renderer used by many TUIs, including early Claude Code.
- https://en.wikipedia.org/wiki/ANSI_escape_code — Background on ANSI escape codes used for terminal rendering.
- https://ratatui.rs/concepts/backends/alternate-screen/#:~:text=The%20alternate%20screen%20is%20a,content%20of%20the%20main%20screen. — Explanation of alternate‑screen mode.
- https://mariozechner.at/posts/2025-11-30-pi-coding-agent/#toc_6 — Detailed discussion of the tradeoffs between rendering approaches.
- https://github.com/badlogic/pi-mono/tree/main/packages/tui — Source for pi‑tui that the author ported.
- https://github.com/steipete/TauTUI — The author’s Swift port of pi‑tui.
- https://github.com/vadimdemedes/ink/pull/781 — Ink improvements for incremental rendering.
- https://github.com/anthropics/claude-code/issues/769#issuecomment-3667315590 — Anthropic note on rewriting the renderer.
- https://x.com/trq212/status/2001552877698056370 — Anthropic quote about prioritizing native terminal feel.
- https://x.com/mitchellh/status/1978934533170041118 — Example about native scrolling expectations.
- https://x.com/mitchellh/status/1993728538344906978 — Example about native terminal search expectations.
- https://ampcode.com/news/look-ma-no-flicker — Amp’s switch to an alt‑mode renderer.
- https://developers.googleblog.com/en/making-the-terminal-beautiful-one-pixel-at-a-time/ — Google blog announcement of Gemini’s alt‑mode TUI.
- https://github.com/google-gemini/gemini-cli/discussions/13633 — Thread about rolling back the new Gemini TUI.
- https://github.com/google-gemini/gemini-cli/discussions/13067 — Thread noting the CTRL‑S selection mode in Gemini.
- https://github.com/sst/opentui — OpenCode’s opentui renderer repo.
- https://github.com/sst/opencode/issues/4043#issuecomment-3519627447 — OpenCode issue: incompatible with macOS Terminal below macOS 26.
- https://github.com/sst/opencode/issues/4320 — OpenCode issue: GNOME Terminal incompatibility.
- https://github.com/openai/codex/blob/main/codex-rs/tui2/docs/tui_viewport_and_history.md — OpenAI’s alt‑mode direction for Codex UI.
- https://shittycodingagent.ai/ — Mario Zechner’s pi agent (highlighted as gold standard).

### Just Talk To It - the no-bs Way of Agentic Engineering (2025-10-14)

**Summary:** A long, candid field guide to running AI coding agents at scale: why he uses codex, how he structures work, why he rejects some fashionable workflows (subagents, MCPs, plan modes), and a catalog of practical tactics and tool opinions.

- He’s been quiet because he’s deep in a new project; agentic engineering now writes ~100% of his code.
- He criticizes people who over‑complicate workflows instead of getting work done.
- The post is inspired by a Claude Code Anonymous meetup and a year‑since‑last‑workflow reflection.
- Basic ideas still apply; he won’t repeat context‑management fundamentals.
- He points readers to his Optimal AI Workflow post for a primer.
- He works solo on a ~300k LOC TypeScript/React app plus a Chrome extension, CLI, Tauri client, and Expo mobile app.
- Hosting is on Vercel; PRs deploy in ~2 minutes; other apps aren’t automated.
- He switched fully to the codex CLI as daily driver.
- He runs 3–8 agents in parallel in a 3x3 grid, mostly in the same folder.
- He tried worktrees and PRs but reverted to the same‑folder approach because it’s fastest.
- Agents create atomic commits; he tuned his agent file to keep commit history clean.
- Claude can do hooks but codex doesn’t; models are smart enough that hooks won’t stop them if they’re determined.
- He used to be mocked as a slop‑generator; parallel agents are now becoming mainstream.
- He uses gpt‑5‑codex on “mid” settings as a speed/smarts compromise.
- He doesn’t overthink model settings; “ultrathink” isn’t worth it.
- He frames changes by “blast radius” (time + files affected).
- Large blasts make isolated commits and recovery harder.
- If a task runs long, he checks status and either helps, aborts, or continues.
- He uses “give me a few options” to gauge impact when unsure.
- He avoids worktrees because one dev server is faster and he can test multiple changes at once.
- Multiple dev servers are annoying; Twitter OAuth limits also constrain domains.
- He used to love Claude Code but now dislikes its tone and overconfident messaging.
- Codex is “introverted,” reads more files, and delivers better results for his prompts.
- His timeline generally agrees that codex is the best path forward.
- Codex has ~230k usable context versus Claude’s ~156k (despite 1M Sonnet variants).
- Codex uses tokens more efficiently; context fills slower than in Claude Code.
- Codex has message queuing; Claude had it but changed it to “steer” messages.
- Codex’s queuing is better: you can send and it executes in order.
- OpenAI rewrote codex in Rust, making it fast with low memory usage.
- Claude Code can freeze and bloat memory; codex feels lightweight.
- Codex’s tone is healthier; he rarely gets angry with it.
- He prefers codex even if it were worse, due to the tone.
- Codex avoids scattering random markdown files; he links a pair of “IYKYK” tweets.
- The harness market is thin; direct subscriptions are the best deal.
- He pays ~1k/month for 4 OpenAI + 1 Anthropic subs with “unlimited” usage.
- API pricing would be ~10x higher, even if his estimate is imprecise.
- He likes tools like amp or Factory but doubts long‑term survival.
- These tools converge on similar ideas with the same model providers.
- Temporary edges (todo lists, steering, DX) won’t beat the big AI companies.
- Amp moved away from GPT‑5 and calls it an “oracle,” but he still uses codex.
- He distrusts benchmarks due to skewed usage numbers; codex performs better for him.
- He credits amp for good session sharing.
- Factory’s marketing is cringe but he hears good things; no image support yet.
- Factory also has signature flicker issues.
- Cursor’s tab completion is great for people who still type code.
- He uses VS Code; he likes Cursor’s browser automation and plan mode.
- He tried GPT‑5‑Pro in Cursor but old bugs persist; it stays in his dock.
- Auggie faded quickly; most tools just wrap GPT‑5/Sonnet.
- RAG can help Sonnet, but GPT‑5 searches so well he sees no need for vector indices.
- Promising alternatives are opencode and crush, especially with open models.
- You can use OpenAI/Anthropic subs via hacks, but legality is unclear and it’s questionable.
- He watches China’s open models; GLM 4.6 and Kimi K2.1 are strong but not daily‑driver quality.
- Benchmarks are incomplete; agentic engineering jumped from “crap” to “good” with Sonnet 4.0, then to “amazing” with gpt‑5‑codex.
- Strategy matters: codex reads more files and pushes back on bad requests.
- Claude/others are eager and try something; plan mode and structure docs mitigate that.
- He rarely uses plan files now; codex doesn’t need plan mode to wait for approval.
- Claude Code plugins disappoint him; he sees them as patching model inefficiencies.
- He still values task‑specific docs, but sees plugins as off‑track.
- Subagents evolved from “subtasks” but the use case is the same: parallelization and context reduction.
- He prefers separate terminal windows for research to control what context is passed.
- He dislikes Anthropic’s recommended “AI Engineer” subagent; he calls it slop.
- The example agent mixes GPT‑4o/o1 and offers little concrete value.
- Telling a model “you are an AI engineer” doesn’t help; docs/examples/do‑don’t do.
- He’d rather have the agent Google best practices than use the recommended subagent.
- He calls this kind of slop “context poison.”
- When he used Claude, he dictated long prompts; with codex, prompts got much shorter.
- He often uses 1–2 sentences plus an image; codex reads the codebase and “gets it.”
- He sometimes returns to typing because less context is needed.
- Images are a powerful context tool; the model can find the UI element shown.
- At least half his prompts include screenshots; he rarely annotates them.
- A screenshot takes seconds to drag into the terminal.
- Wispr Flow’s semantic correction is his favorite voice tool.
- He experimented with web agents: Devin, Cursor, and Codex; Jules was annoying and Gemini 2.5 isn’t good.
- He expects Gemini 3 Pro to improve things.
- Codex web is the only web agent that stuck.
- Codex web setup is annoying and currently buggy (terminal doesn’t load correctly).
- He made it work using an older environment, with slower warm‑up times.
- He uses codex web as a short‑term issue tracker via iOS one‑liners.
- He avoids doing more on the phone to reduce addiction/overwork.
- He notes he spent two months building a tool to code on the phone anyway.
- Codex web didn’t count against usage limits before, but those days are ending.
- He lists Conductor, Terragon, Sculptor, and many other tools; none stuck.
- He says most tools are VC‑funded wrappers around Anthropic’s SDK and worktrees.
- They hide the terminal and don’t show everything the model sees.
- There’s no moat; codex web covers his minimal phone use case.
- Codex lacks background tasks; Claude has them.
- Codex can get stuck on endless CLI tasks (dev server/tests).
- He reverted to Claude because of this, but now uses tmux instead.
- tmux runs CLIs in persistent background sessions; models understand it well.
- He doesn’t need special agent docs for tmux; “run via tmux” is enough.
- He thinks most MCPs are marketing checkboxes and should be CLIs instead.
- He says this despite writing 5 MCPs himself.
- CLIs are discoverable via help output, which trains the model quickly.
- MCPs are a constant context tax; GitHub’s MCP once cost ~50k tokens, now ~23k.
- The gh CLI has similar features with zero context cost.
- He open‑sourced some CLIs: bslog and inngest.
- He uses chrome‑devtools‑mcp to close the loop for web debugging.
- It replaced Playwright for him in that context.
- He designed his website so agents can create API keys and query endpoints via curl for speed and token efficiency.
- He still doesn’t need MCPs daily.
- He spends ~20% of his time on refactoring, done by agents.
- Refactor work includes jscpd for duplication, knip for dead code, eslint react‑compiler/deprecation plugins, consolidating routes, docs upkeep, splitting large files, adding tests/comments, updating deps, tool upgrades, restructuring, slow‑test rewrites, modern React pattern updates, and refactoring away unnecessary useEffect.
- These maintenance phases repay technical debt and improve productivity.
- He used to do spec‑driven development; now he sees that as the old way.
- He prefers discussions with codex, pasting websites and ideas, then building together.
- For tricky features, he has codex draft a spec, then gets GPT‑5‑Pro review via chatgpt.com.
- He pastes the useful parts back into the main context to update files.
- He estimates context needs per task; codex’s context window is sufficient.
- Some people always start new contexts; he thinks GPT‑5 makes that unnecessary and wastes time.
- UI work is more fun: start with a small request and iterate live in the browser.
- He queues changes, explores the UI, and shapes the outcome through iterations.
- Sometimes codex creates interesting ideas he wouldn’t have thought of.
- He works on the main feature while parallel agents handle tangential tasks.
- Example: while writing, he’s building a Twitter data importer and reshaping a GraphQL importer in a separate folder.
- The main repo is being refactored so he can focus on the article.
- He uses very few slash commands and rarely uses them.
- He has /commit, /automerge, /massageprs, /review.
- He usually just types “commit” unless the repo is extremely dirty.
- He advises queueing “continue” messages for long runs.
- If codex finishes, it ignores extra messages.
- He recommends writing tests after each feature/fix using the same context.
- That often uncovers bugs and produces better tests.
- For UI‑only tweaks, tests may not make sense.
- He advises asking the model to preserve intent and add comments in tricky areas.
- Trigger words like “take your time” and “comprehensive” improve results.
- He keeps an Agents.md symlinked to Claude.md due to Anthropic’s lack of standardization.
- GPT‑5 prefers different prompting than Claude; he links the GPT‑5 prompting guide.
- Claude responds to shouting‑caps threats; GPT‑5 doesn’t.
- He suggests using normal human language instead.
- This means shared instruction files aren’t optimal across models.
- His Agent file is ~800 lines, mostly generated/maintained by codex.
- It’s “organizational scar tissue” but works well; GPT honors it more than Claude.
- The file includes product info, naming/API patterns, React Compiler notes, and other bleeding‑edge specifics.
- He expects to reduce guidance as models improve.
- He removed Tailwind 4 guidance once models caught up.
- It also includes React pattern preferences, DB migration management, testing, and ast‑grep rules.
- He suggests setting up ast‑grep as a git hook if you don’t use it.
- He started using a text‑based design system; verdict still out.
- GPT‑5‑Codex is not perfect: it can panic and revert after long refactors.
- It sometimes forgets it can run bash commands.
- Sometimes it replies in Russian or Korean.
- Sometimes raw thinking leaks into bash.
- These flaws are rare; overall it’s far better than alternatives.
- His biggest codex annoyance: it “loses” lines when scrolling quickly.
- He hopes OpenAI fixes this; it slows him down.
- He concludes: ignore RAG, subagents, and Agents 2.0; just talk to the model.
- Managing agents is like managing engineers; senior‑level skills apply.
- Writing good software is still hard; AI raises the bar, it doesn’t remove design/architecture thinking.
- PS: This post is hand‑written; he loves AI but values old‑fashioned writing.
- He credits Thorsten Ball for the header graphic.

#### Links (external, unique)

- https://x.com/christianklotz/status/1977866496001867925 — Meetup inspiration from Claude Code Anonymous in London.
- https://x.com/pmddomingos/status/1976399060052607469 — “AI year” reflection link.
- https://x.com/steipete/status/1977771686176174352 — Example of running multiple agents in the same folder.
- https://x.com/steipete/status/1977498385172050258 — Atomic commits practice.
- https://gist.github.com/steipete/d3b9db3fa8eb1d1a692b7656217d8655 — The author’s agent file.
- https://x.com/steipete/status/1977119589860601950 — Claim that hooks won’t stop determined models.
- https://x.com/weberwongwong/status/1975749583079694398 — “Slop‑generator” ridicule reference.
- https://x.com/steipete/status/1976353767705457005 — Parallel agents becoming mainstream.
- https://x.com/steipete/status/1977072732136521836 — Codex being a fan of Claude Code.
- https://x.com/vtahowe/status/1976709116425871772 — Example of Claude’s “absolutely right” tone.
- https://x.com/s_streichsbier/status/1974334735829905648 — Codex‑positive timeline consensus.
- https://x.com/kimmonismus/status/1976404152541680038 — Codex‑positive timeline consensus.
- https://x.com/steipete/status/1978099041884897517 — Codex message queuing.
- https://x.com/steipete/status/1975297275242160395 — Codex tone and mental‑health impact.
- https://x.com/steipete/status/1977466373363437914 — No random markdown files (IYKYK).
- https://x.com/deepfates/status/1975604489634914326 — Another IYKYK reference.
- https://ampcode.com/news/gpt-5-oracle — Amp’s “oracle” shift away from GPT‑5.
- https://x.com/btibor91/status/1976299256383250780 — Benchmark skepticism link.
- https://x.com/badlogicgames/status/1977103325192667323 — Signature flicker mention for Factory.
- https://x.com/steipete/status/1976226900516209035 — Cursor bugs that persist.
- https://x.com/steipete/status/1977286197375647870 — “Clever hax” for using subs elsewhere.
- https://x.com/imfeat7/status/1977246145278583258 — Open‑model daily‑driver caution.
- https://x.com/thsottiaux/status/1975565380388299112 — Codex pushes back on bad requests.
- https://www.anthropic.com/news/claude-code-plugins — Anthropic’s Claude Code plugins announcement.
- https://github.com/wshobson/agents/blob/main/plugins/llm-application-dev/agents/ai-engineer.md — The criticized “AI Engineer” subagent template.
- https://x.com/IanIsSoAwesome/status/1976662563699245358 — “Context poison” reference.
- https://x.com/steipete/status/1978104202820812905 — Voice dictation note (“I speak”).
- https://x.com/steipete/status/1977175451408990379 — Example of using images in prompts.
- https://wisprflow.ai/ — Wispr Flow voice dictation tool.
- https://x.com/cannn064/status/1973415142302830878 — Expectation for Gemini 3 Pro.
- https://x.com/steipete/status/1974798735055192524 — Codex web terminal loading bug.
- https://steipete.me/posts/2025/vibetunnel-first-anniversary — Phone‑coding tool he built (site link).
- https://x.com/steipete/status/1976292221390553236 — Codex web usage limits changing.
- https://conductor.build/ — Conductor tool example.
- https://www.terragonlabs.com/ — Terragon tool example.
- https://x.com/steipete/status/1973132707707113691 — Sculptor tool example.
- https://x.com/steipete/status/1977745596380279006 — tmux usage tip.
- https://github.com/steipete/claude-code-mcp — The author’s MCP tools.
- https://github.com/steipete/bslog — Open‑sourced CLI tool.
- https://github.com/steipete/inngest — Open‑sourced CLI tool.
- https://developer.chrome.com/blog/chrome-devtools-mcp — Chrome DevTools MCP reference.
- https://x.com/steipete/status/1977762275302789197 — Using chrome‑devtools‑mcp to close the loop.
- https://x.com/steipete/status/1976985959242907656 — Refactoring time estimate.
- https://knip.dev/ — Dead‑code analysis tool.
- https://x.com/steipete/status/1977472427354632326 — Tool upgrades note.
- https://react.dev/learn/you-might-not-need-an-effect — Example of modern React patterns.
- https://steipete.me/posts/2025/the-future-of-vibe-coding — Spec‑driven development reference.
- https://x.com/steipete/status/1978111714685063640 — Codex ignores extra messages after finishing.
- https://cookbook.openai.com/examples/gpt-5/gpt-5_prompting_guide — GPT‑5 prompting guide.
- https://x.com/Altimor/status/1975752110164578576 — Claude’s response to screaming‑caps prompts.
- https://x.com/steipete/status/1963411717192651154 — ast‑grep rules reference.
- https://x.com/steipete/status/1973838406099874130 — Text‑based design system experiment.
- https://x.com/steipete/status/1973834765737603103 — Codex panic/revert anecdote.
- https://x.com/steipete/status/1977695411436392588 — Codex forgetting bash commands.
- https://x.com/steipete/status/1976207732534300940 — Codex replying in Russian/Korean.
- https://x.com/steipete/status/1974108054984798729 — Raw thinking leaking into bash.
- https://x.com/steipete/status/1977660298367766766 — “Agents 2.0” charade reference.
- https://simonwillison.net/2025/Oct/7/vibe-engineering/ — Simon Willison article on vibe engineering.
- https://x.com/lukasz_app/status/1974424549635826120 — Managing engineers analogy.
- https://x.com/svpino/status/1977396812999688371 — “Writing good software is still hard” reference.
- https://x.com/Alphafox78/status/1975679120898965947 — “Old‑fashioned” writing note.
- https://x.com/rohanpaul_ai/status/1977005259567595959 — Closing emoji/sign‑off reference.
- https://x.com/thorstenball/status/1976224756669309195 — Header graphic credit.

### Claude Code Anonymous (2025-09-09)

**Summary:** An announcement of the Claude Code Anonymous meetup format, why it exists, how it’s structured, and how to start a local chapter.

- He reconnected with Orta Therox; both felt Claude Code changed how they build and they couldn’t stop thinking about it.
- From that conversation, they created a new meetup format: Claude Code Anonymous.
- Demand exceeded London capacity, so he encouraged local chapters.
- There are now chapters in London, Vienna, Berlin, Cologne, San Francisco, Delft, with more coming.
- The first London meetup was successful; another is scheduled for October 13.
- Not everyone gets hooked equally by agentic tooling.
- “Full‑breadth developers” (technical + product) adopt fastest; he jokes they’re the “black eye club” due to sleep loss.
- Claude Code Anonymous is a playful name for this phenomenon.
- The meetup is a safe space to discuss AI/LLM tooling without public pressure.
- Talks are not recorded and there is no livestream.
- The recipe: gather like‑minded people, provide space, drinks, pizza, and focus on socializing.
- Meetups use lightning talks (~5 minutes) with prompts like “I was X when Claude Code Y.”
- Intro + talks are capped at ~1 hour so there’s time for 2–3 hours of socializing.
- He dislikes meetups where talks run long and people leave immediately after.
- The 5‑minute limit increases participation and serves as a stepping stone for longer talks.
- The name isn’t exclusive to Claude; any agentic tool is welcome.
- They picked “Claude Code” to attract builders rather than marketing/HR.
- “Agentic engineering” would attract a different audience.
- You can talk about any tool: codex, opencode, Cursor, etc.
- He views Claude Code as the defining agent that sparked the revolution.
- He treats the name like a proprietary eponym (Jacuzzi/Tupperware).
- If you want neutrality, call it “Agents Anonymous.”
- To start a meetup: find a space, organize drinks, spread the word.
- They use Luma for event management and ask applicants questions (what they’re building, social profile).
- Interest exceeds space, so they review applicants to ensure builders attend, not recruiters/marketers.
- Lightning talks have the same rule: show what you learned, not what you sell.
- Their code of conduct is CocoaPods’ “Don’t be a Jerk.”
- He invites readers to start a chapter and offers help with outreach.
- Contact options: email or Twitter DM.

#### Links (external, unique)

- https://orta.io/ — Orta Therox’s site, mentioned as the friend he reconnected with.
- https://www.highagency.com/ — “High‑Agency‑Style” encouragement to start local chapters.
- https://luma.com/u5rompg9 — London chapter page.
- https://luma.com/q50cmcb2 — Vienna chapter page.
- https://luma.com/5lizqnpz — Berlin chapter page.
- https://luma.com/j1fr97j3 — Cologne chapter page.
- https://luma.com/i37ahi52 — San Francisco chapter page.
- https://luma.com/h5h322jz — Delft chapter page.
- https://luma.com/9qets0h0 — October 13 London meetup page.
- https://justin.searls.co/posts/full-breadth-developers/ — “Full‑breadth developers” definition.
- https://luma.com/ — Luma platform used for events.
- https://cocoapods.org/legal — CocoaPods code of conduct (“Don’t be a Jerk”).
- mailto:steipete@gmail.com — Email contact for outreach.
- https://x.com/steipete — Twitter DM contact.

### Live Coding Session: Building Arena (2025-09-06)

**Summary:** A recap of a live, one‑hour build where the author ships a new “Arena” feature with codex, plus concrete tactics, stack details, and Q&A takeaways about agentic engineering.

- He built and shipped a brand‑new feature live in about an hour to show his agentic process with codex.
- The session is an unfiltered, unscripted look at his development flow.
- He credits Eleanor Berger for motivating the video and organizing the live event.
- The video is embedded via YouTube for viewers to watch the session.
- Arena is a new feature to score how well 2–4 X users match.
- Inputs are Twitter/X handles.
- The pipeline fetches a shared 1,000‑tweet budget, strips to necessary fields, runs profile analysis, then scores compatibility (pair and team).
- The UX includes a user picker, Analyze button, results table, and cached runs selectable under the search box.
- Infra touches include an `arena_cache` DB migration, a background long‑running job, streaming UI, and auth‑guarded page.
- He completed the feature in ~1 hour and got a pair score of 89 with @intellectronica.
- Codex (GPT‑5) is his main coding model; it reads the repo and works without manual file lists.
- He keeps a Claude‑style flow for web search, but codex is the star for repo work.
- He starts fresh sessions for big features and runs multiple agent windows in parallel.
- He works directly on `main` with atomic commits; worktrees and merge conflicts slow him down.
- Tooling: Ghostty terminal with split panes for agents.
- Logging uses Better Stack via the `bslog` CLI.
- He uses a custom `xl` CLI (curl wrapper) for quick X API pulls.
- He enforces strict Biome rules and custom codemods for consistent output.
- Long jobs run in a background worker (Inngest).
- A cache table avoids recomputation.
- For docs ingestion, he pulls only what’s needed and prefers markdown over HTML to save tokens.
- He validates inputs via schema validation and fails fast with helpful messages.
- He keeps agent context clean and avoids tool noise; inject docs only when needed.
- He lets codex propose steps and approves them sequentially.
- He advises caching long tasks early, before polishing UI.
- He copies errors verbatim into the agent instead of over‑explaining.
- He asks for intent comments near tricky code to help himself and future agents.
- He writes tests after the feature is shaped, which catches regressions effectively.
- He uses `main` + surgical commits for speed and safety, relying on Git as a safety net.
- He avoids local models for this workload; context and stability matter more than latency.
- He prefers CLIs over MCPs; quick CLI wrappers pay off and keep context small.
- He recommends tiny proof‑of‑concepts to unblock hard features, then transplanting them.
- Q&A: codex beats Claude Code because it reads more repo and needs fewer hints.
- Q&A: he doesn’t branch; `main` + disciplined commits is faster and safer.
- Q&A: manual approvals are like Windows Vista prompts; use Git/backups instead.
- Q&A: repo prompts and MCP servers bloat context; lean instructions + small CLIs are better.
- Q&A: plan features to fit context; for long loops, use compaction‑friendly flows or split tasks.
- He links to his AI development workflow post for more detail (internal).
- He links to OpenAI’s GPT‑5 prompting guide for advanced prompting techniques.

#### Links (external, unique)

- https://www.youtube.com/watch?v=68BS5GCRcBo — Live coding session video.
- https://x.com/intellectronica — The user he matched with for the 89 pair score.
- https://github.com/steipete/bslog — The `bslog` CLI used for Better Stack logging.
- https://www.inngest.com/ — Inngest background worker used for long jobs.
- https://cookbook.openai.com/examples/gpt-5/gpt-5_prompting_guide — GPT‑5 prompting guide referenced for advanced techniques.

### My Current AI Dev Workflow (2025-08-25)

**Summary:** A practical snapshot of his setup and habits: Ghostty‑first, Claude Code as main driver, plan‑mode discipline, context management, and a “less tooling, more focus” philosophy.

- TL;DR: Ghostty + Claude Code + minimal tooling yields maximum productivity; “less is more.”
- He’s sharing an evolving workflow update.
- After going all‑in on VS Code, he returned to Ghostty for the main setup.
- VS Code is now a side tool for looking up code; Cursor/GPT‑5 used for reviews.
- He tried Zed but disliked how the terminal looked.
- He’s happy with his Dell UltraSharp U4025QW monitor; the resolution fits four Claude instances plus Chrome.
- VS Code’s terminal is unstable and freezes on large pastes; Ghostty is more reliable.
- Gemini can be good, but its edit tools are messy, so he uses it less.
- GPT‑5 reviews plans better than Gemini.
- He works directly on `main`; worktrees slow him down.
- Multiple concurrent work areas are possible if carefully chosen to avoid cross‑pollination.
- Claude can be messy but is great at refactoring and cleanup; both matter to avoid debt.
- He adds topic + session ID to the status line for account switches or restarts; this is helpful.
- He uses plan mode and iteration; small tasks done immediately, bigger ones go to a file for GPT‑5 review.
- Small prompts often work; agents can make sense of his incoherent thoughts.
- He runs 1–2 agents for normal work; 4 for cleanup/tests/UI tasks; depends on blast radius.
- Hardest parts: distributed system design, dependency/platform choices, and forward‑looking DB schema.
- He built a lot of custom infra, admin pages, and CLIs that sped him up.
- Big changes always get tests; AI‑generated tests are better when written in the same context.
- Context is precious; don’t waste it when testing.
- He removed his last MCP because Claude would spin up Playwright unnecessarily; reading code is faster and cleaner.
- He prefers services with CLIs (vercel, psql, gh, axiom) and minimal CLAUDE.md guidance.
- He’s highly productive with this setup; other models/CLIs don’t match.
- Codex can’t search; “google best practices” is often better than stuffing context.
- Cursor/GPT‑5 is slow and opaque; GPT‑5 is literal and needs precise prompts.
- He doesn’t see background agents working because he needs to steer models actively.
- New rate limits start Aug 28 and will hurt; he expects to pay up.

#### Links (external, unique)

- https://x.com/steipete/status/1952439355340943534 — “Less is more” reference in the TL;DR.
- https://x.com/steipete/status/1960114479028486429 — Workflow update announcement link.
- https://x.com/steipete/status/1955781673670340796 — “All‑in on VS Code” reference.
- https://ghostty.org/ — Ghostty terminal used as main setup.
- https://x.com/steipete/status/1954691261279146029/photo/1 — VS Code on the side photo.
- https://zed.dev/ — Zed editor he tried and rejected.
- https://x.com/steipete/status/1955690682477134124/photo/1 — Example of a terminal UI he disliked.
- https://x.com/steipete/status/1959259921439969326 — Another terminal look he disliked.
- https://www.dell.com/en-us/shop/dell-ultrasharp-40-curved-thunderbolt-hub-monitor-u4025qw/apd/210-bmdp/monitors-monitor-accessories — Dell UltraSharp U4025QW monitor.
- https://x.com/steipete/status/1942113964231442876 — Gemini edit tools complaint.
- https://x.com/steipete/status/1955941943218713006/photo/1 — Gemini “messy” edits example.
- https://x.com/steipete/status/1956340397900177686 — Worktree setup reference.
- https://x.com/steipete/status/1958903434322526214 — Status line + session ID reference.
- https://gist.github.com/steipete/8396e512171d31e934f0013e5651691e — Gist for status line/session ID tweak.
- https://x.com/steipete/status/1958233967548850235 — Incoherent thoughts example that agents still interpret well.
- https://x.com/steipete/status/1958573142726640116/photo/1 — Distributed systems design reference.
- https://x.com/steipete/status/1958956225800151465 — Admin pages example.
- https://x.com/steipete/status/1958679613489524952 — Removing last MCP reference.
- https://x.com/steipete/status/1954593439347032167 — “Codex can’t search” reference.

### Essential Reading for Agentic Engineers - August 2025 (2025-08-22)

**Summary:** A curated set of five articles that cut through AI hype: developer evolution, junior learning risks, realistic productivity gains, platform disruption, and MCP server downsides.

- He argues the reinvention of software development is happening now.
- This edition is meant to cut through AI hype with five perspectives.
- The set covers developer evolution, junior learning crises, productivity reality checks, platform disruption, and MCP pitfalls.
- He notes that summaries are AI‑assisted but articles are hand‑picked.
- Thomas Dohmke’s article presents a four‑stage evolution from AI skeptic to AI strategist.
- The stages require different mindsets and skills, culminating in multi‑agent orchestration.
- Advanced practitioners shift from writing code to architecting and verifying AI‑produced work.
- Delegation and verification skills become central.
- Half the respondents expect 90% AI‑written code in 2 years; half in 5 years.
- They view this as role reinvention, not replacement.
- Skills shift toward AI fluency, orchestration, collaboration, and product understanding.
- Foundational programming remains essential for verification and quality control.
- Education should move from syntax memorization to AI‑assisted problem solving and critique.
- The research highlights “realistic optimists” who see disruption and growth.
- These developers focus on ambition expansion rather than just time saved.
- Namanyay Goel warns AI tools may create juniors who ship without understanding.
- AI encourages pattern matching over deep understanding.
- Missing the struggle phase weakens foundational knowledge.
- Seniors can leverage AI; juniors risk shaky foundations.
- The author advocates intentional learning: interrogate AI solutions, build from scratch, meaningful reviews.
- There’s a generational divide between pre‑AI fundamentals and AI‑first learners.
- Colton Anglin debunks 10x/100x claims; most engineering time is thinking, debugging, reviewing.
- AI helps with scripts/boilerplate but that’s a small fraction of work.
- Real gains are more like 20–30% in specific contexts.
- AI code often needs heavy review and fixes; sometimes slower than writing from scratch.
- “10x engineer” marketing fuels imposter syndrome.
- Engineers should use AI where it helps and trust human skills for complex work.
- Austin Parker argues AI will end platform monopolies by making time cheap.
- Platforms thrived when developer time was expensive; AI flips that math.
- He criticizes “middlemen” abstractions taking 30% cuts.
- Custom applications become the norm when building is cheap.
- He questions the need for planet‑scale infrastructure for small needs.
- In 5 years, devices may have on‑board AI matching top models.
- He reframes all code as technical debt and suggests disposable apps on demand.
- Geoffrey Huntley criticizes MCP server proliferation.
- Every MCP consumes context tokens, reducing space for code and reasoning.
- “Less is more” applies to context allocation; more tools worsen outcomes.
- Overlapping tools cause nondeterministic behavior and confusion.
- Third‑party MCPs add supply‑chain risks and potential context injection attacks.
- Recommendation: limit MCPs to essentials, prefer trusted vendors, enable/disable dynamically.
- He notes this edition builds on July 2025 and original Essential Reading collections.

#### Links (external, unique)

- https://ashtom.github.io/developers-reinvented — Thomas Dohmke article on developer evolution stages.
- https://x.com/ashtom — Thomas Dohmke’s handle.
- https://nmn.gl/blog/ai-and-learning — Namanyay Goel article on AI and learning.
- https://x.com/NamanyayG — Namanyay Goel’s handle.
- https://colton.dev/blog/curing-your-ai-10x-engineer-imposter-syndrome/ — Colton Anglin productivity reality check.
- https://www.aparker.io/post/3lvjepuyf4q2w — Austin Parker article on platform dominance ending.
- https://bsky.app/profile/aparker.io — Austin Parker’s Bluesky profile.
- https://ghuntley.com/allocations/ — Geoffrey Huntley article on MCP server proliferation.
- https://x.com/GeoffreyHuntley — Geoffrey Huntley’s handle.

### Just One More Prompt (2025-08-19)

**Summary:** A personal talk transcript about AI addiction, extreme work culture, and the emotional push‑pull of agentic engineering.

- This is the author’s write‑up of a talk given at Claude Code Anonymous in London.
- He introduces himself as “Peter” and a “Claudoholic,” addicted to agentic engineering.
- He sometimes “vibe‑codes.”
- Most people know him as @steipete on Twitter.
- He was an iOS developer/entrepreneur and now works on many projects.
- Claude Code Anonymous is for builders and full‑breadth developers who can’t sleep because of the revolution.
- As an organizer, he thought hard about what to say in his five minutes.
- He considered: strategies for agents, running open models on H200, alternative agents, and a preview of his talk “You can just do things.”
- The core realization: agents make it possible to build anything you always wanted.
- This power is both beautiful and problematic.
- More building yields more ideas; he juggles multiple projects and yells at his computer at night.
- AI was supposed to save time, but he works more than ever and has more FOMO.
- He dedicates nearly all waking time; it still feels insufficient.
- One week in AI feels like a month in the real world.
- He tells dramatic AGI stories at parties but emphasizes he’s having a blast.
- He learned a lot, built cool things, and got his spark back.
- Burnout after selling his company in 2021 led to three years away from his computer.
- Returning to building swung the pendulum hard the other way.
- The last months are a blur; he’s trying (and failing) to control the addiction.
- He’s having too much fun and has too many ideas to codify.
- He’s not alone; friends text at 4am and are still up.
- He calls them the Black Eye Club.
- Reddit reports similar AI addiction and sleep loss.
- Gergely Orosz’s newsletter reports extreme hours at AI startups.
- Scott Wu describes Cognition’s extreme performance culture.
- Kennan Davison jokes about 7‑day work weeks.
- Sergey Brin says 60 hours/week in office is a productivity sweet spot for AI.
- He admits being sucked into the vortex, similar to how he started his last company.
- He can’t do “regular” 40‑hour weeks; he works in waves of intensity and slack.
- He has a Mac app, VibeTunnel, to access terminal CLIs from the web and phone.
- He built it to get better access to his “drug,” and admits it’s cool.
- He wants to slow down now because it’s unhealthy.
- He added session time to Claude’s status line as a small reminder that time is flying.
- He ends with a warning: builders are at risk; he wants to hear others’ strategies.
- He thanks the audience for letting him share.

#### Links (external, unique)

- http://claudeanon.club/ — Claude Code Anonymous meetup site.
- https://twitter.com/steipete — Author’s Twitter profile.
- https://justin.searls.co/posts/full-breadth-developers/ — “Full‑breadth developers” reference.
- https://x.com/steipete/status/1952763187553513658 — Alternative agents reference.
- https://github.com/steipete/speaking — Upcoming talk link (“You can just do things?”).
- https://www.reddit.com/r/ClaudeAI/comments/1ljurdc/is_this_kind_of_addiction_normal_with_you_claude/?share_id=zX0B6-zPByvTq1GKeRZvq — Reddit thread on AI addiction/sleep issues.
- https://blog.pragmaticengineer.com/new-trend-extreme-hours-at-ai-startups/ — Pragmatic Engineer on extreme AI startup hours.
- https://x.com/ScottWu46/status/1952776198947520659 — Cognition CEO’s extreme culture quote.
- https://x.com/kennandavison/status/1899505804677677188 — Tweet about 7‑day work weeks.
- https://nypost.com/2025/02/28/business/googles-sergey-brin-says-60-hours-per-week-in-office-is-sweet-spot-of-productivity-as-ai-race-heats-up — Sergey Brin quote on 60‑hour weeks.
- https://gist.github.com/steipete/8396e512171d31e934f0013e5651691e — Gist for adding session time to Claude’s status line.

### Essential Reading for Agentic Engineers - July 2025 (2025-08-02)

**Summary:** A curated set of field reports and critiques on AI‑assisted development: a six‑week Claude Code case study, the rise of full‑breadth developers, lessons from failed automation, and a contrarian take on MCPs.

- He frames this edition as new perspectives from the field of AI‑assisted development.
- The four featured pieces cover: real Claude Code adoption, career shifts toward breadth, experiments that failed, and MCP limitations.
- Orta Therox reports six weeks of Claude Code use at Puzzmo with measurable impact on tech debt and features.
- Orta’s team completed 15+ significant engineering tasks in six weeks.
- They used a “Write First, Decide Later” approach for rapid prototyping.
- They used multiple git clones and different VS Code profiles for parallel work.
- Commit/PR metrics didn’t change much, but perceived productivity jumped.
- Examples: tasks like recreating an Adium theme took ~2 hours instead of much longer.
- Claude Code performed well on React Native → React conversions, migrations, infra updates, and experiments.
- The team treated Claude as a patient pair‑programming buddy with minimal permissions.
- Orta compares AI coding to the introduction of photography—transformative but not replacing core skills.
- Justin Searls argues AI enables “full‑breadth developers” who can span the stack.
- With Claude Code, Justin finished two months of Posse Party work in two days.
- Traditional engineering/product role separation becomes less relevant.
- Success now favors results‑oriented builders who experiment rapidly.
- AI handles syntax/boilerplate, freeing focus for design and product thinking.
- New skills: prompt engineering, systems thinking, and verification of AI outputs.
- AI democratizes tasks once reserved for specialists.
- Armin Ronacher documents “things that didn’t work” in AI coding experiments.
- Slash commands, hooks, and print‑mode automation largely failed for him.
- Over‑automation makes it easier to disengage and degrades AI performance.
- Simple, clear instructions outperform elaborate pre‑written prompts.
- He stresses maintaining human engagement and decision‑making.
- Principle: only automate repeatable tasks; discard what doesn’t help.
- Manuel Odendahl argues MCPs constrain LLMs by forcing tool calls instead of code generation.
- MCP tool calling can waste huge tokens/time for tasks code can do directly.
- He proposes dynamic tool generation: LLMs write tools on demand.
- He demonstrates recursive tooling: code that writes code that writes code.
- A sandbox demo evolves from a single eval tool to a CRM with REST + UI.
- He quantifies big efficiency gains (fewer calls, faster execution).
- Salvatore Sanfilippo emphasizes keeping humans in the loop.
- He warns against fully autonomous “vibe coding.”
- He argues for detailed specs and active human oversight.
- He highlights model strengths for exploration and unfamiliar domains.
- He suggests multiple LLMs for complex problems and manual code transfer.
- He frames LLM‑assisted coding as a fundamental shift that still needs judgment.
- The post notes it builds on the original Essential Reading collection and points to August 2025 edition.

#### Links (external, unique)

- https://blog.puzzmo.com/posts/2025/07/30/six-weeks-of-claude-code/ — Orta Therox’s six‑week Claude Code case study.
- https://x.com/orta — Orta Therox’s handle.
- https://justin.searls.co/posts/full-breadth-developers/ — Justin Searls on full‑breadth developers.
- https://x.com/searls — Justin Searls’s handle.
- https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/ — Armin Ronacher’s “things that didn’t work.”
- https://x.com/mitsuhiko — Armin Ronacher’s handle.
- https://www.youtube.com/watch?v=J3oJqan2Gv8 — Manuel Odendahl’s MCPs critique video.
- https://x.com/programwithai — Manuel Odendahl’s handle.
- https://antirez.com/news/154 — Salvatore Sanfilippo on coding with LLMs.
- https://x.com/antirez — Salvatore Sanfilippo’s handle.

### Don't read this Startup Slop (2025-08-02)

**Summary:** A response to being labeled “startup slop” for agent‑assisted writing, arguing for judging content on merit and clarifying the difference between automated spam and thoughtful AI‑assisted work.

- His website was banned on lobste.rs as “startup slop” because he uses agents to help write parts of posts.
- He’s transparent about his process and open‑sources his repo; commits show the work.
- He doesn’t name the people or networks involved; says it’s easy to find.
- The trigger was his most popular post, “Claude Code is my Computer.”
- He frames this as a broader societal discussion about AI in creation tools.
- He personally hates AI slop and blocks automated replies/DMs.
- If communication is automated and unmarked, he sees it as disrespectful.
- His Twitter takes are handcrafted; he doesn’t use WisprFlow there.
- He distinguishes automated spam from agent‑assisted writing.
- He questions whether 4 hours of prompting is less valid than manual drafting.
- He notes limited time: 24‑hour days and the need to sleep.
- Some posts he writes fully by hand; others become documentation for humans and agents.
- He references a logging guide as an example of a practical agent‑friendly post.
- He asks if it’s better to stop sharing shorter posts just to avoid offending people.
- He describes hostile moderator interactions and insults that felt personal and illogical.
- He isn’t upset about being blocked; it’s not a community he wants to join.
- He argues writing should be judged by its value, not by tool choice.
- He writes more words for blog posts than code now.
- He asks whether AI‑assisted code and documentation should also be judged as “slop.”
- You can create slop with or without agents; you can create great work with or without.
- Agents are tools, not the definition of quality.
- He ends with a Claude instruction to commit/push/merge PR.
- He notes the header graphic was made extra AI‑y with ChatGPT.

#### Links (external, unique)

- http://lobste.rs — Lobsters site that banned his domain.
- https://github.com/steipete/steipete.me/pull/106/commits — Commit history evidence for his writing process.
- https://x.com/cosimo_rip/status/1952013362214154550 — Reference about judging writing on its merits.
- https://github.com/steipete/steipete.me/pull/207 — Link to “merge PR” instruction.

### Poltergeist: The Ghost That Keeps Your Builds Fresh (2025-08-05)

**Summary:** The story of building Poltergeist, an AI‑friendly universal build watcher, why it exists, how it works, and how agents made it possible to iterate fast and even attempt a Go port.

- TL;DR: Poltergeist auto‑detects projects and rebuilds on file changes—“npm run dev” for native apps.
- It’s designed to be AI‑friendly with zero config, notifications, and a smart build queue.
- In agentic engineering, loop speed is everything; build times were his main friction.
- While building Peekaboo (Swift macOS automation agent/CLI/MCP), Swift compile time hurt.
- TypeScript often finished compiling before Swift.
- Agents sometimes forgot to rebuild, causing debugging on stale binaries.
- Poltergeist rebuilds in the background and accelerates the code/debug loop.
- He first wrote a bash script to watch Swift files and rebuild.
- He realized the idea could apply to any project and expanded it.
- He rewrote the system in TypeScript to support any language/build system.
- Poltergeist became a universal watcher that “haunts” projects.
- It’s designed specifically for agentic workflows, unlike generic tools like watchexec.
- It detects human vs agent invocation and prints helpful agent guidance.
- It avoids polluting AGENTS files.
- It runs invisibly; saves trigger rebuilds so fresh binaries are ready.
- It can quit/relaunch Mac apps automatically (configurable).
- True hot reload would be nice but is future work.
- He built Poltergeist entirely with Claude Code.
- It started as scripts; he had agents convert to TypeScript and iterate.
- “All autogenerated code” is meaningless now; he wrote many pages of prompts.
- English has become the programming language; TypeScript is implementation detail.
- He chose TypeScript because agents write it well and compilation is fast.
- Watchman has TypeScript bindings, helping cross‑platform support.
- He loves building dev tools; Poltergeist felt obvious in hindsight.
- He usually uses a spec.md approach, but this evolved from scripts to a tool.
- Agents one‑shotted many prompts; he uses WisprFlow for long prompt dictation.
- He learned that giving reasons improves agent results.
- His process: long prompt + “plan only ultrathink”; sometimes “give me options.”
- He doesn’t use Claude’s plan mode; “plan only” fits his flow better.
- He often iterates on plans before letting the build run.
- He asks for tests and docs after features, which uncovers bugs.
- He adds CI early for cross‑OS validation.
- He asked Claude about language choice and got an unexpected answer.
- He let the model loop for hours to port to Go as an experiment.
- Porting is now feasible with agents; it used to be “nuts.”
- He tested open models and alternative CLIs; many still have bugs.
- Qwen 3 Coder + GLM 4.5 with OpenCode/Crush weren’t reliable enough.
- Qwen 3 Coder’s 1M context would have been ideal for full‑project conversion.
- His Claude Code process: convert files to a 1.1MB markdown, then ask “convert to Go.”
- This avoids the 256KB limit that causes partial reads.
- He uses repo2txt.simplebasedomain.com to make repo‑to‑text files.
- He didn’t use todo structure; he nudged Claude to continue.
- He did conversion with Opus 4.1 to celebrate its release.
- He used an idiomatic Go guide to refactor for quality.
- He ultimately stayed with TypeScript.
- Bun’s SPA mode gives ~44ms startup, perfect for a single binary.
- Watchman’s TS bindings are strong; Go bindings are unmaintained.
- The only Go binding project is stale, adding maintenance burden.
- He kept the Go experiment as “poltergohst.”
- Installation: Homebrew for modern macOS; npm for Windows/Linux/Intel Mac.
- npm install requires Watchman and Node.
- Usage: init, haunt, and run tools (polter) for always‑fresh binaries.
- There’s a macOS menu bar app (unreleased) with source available.
- It shows build status (red/green); he might call it Ghostbuster.
- Poltergeist is meant to be invisible until needed, then indispensable.
- It’s a human+agent tool you install once and forget.
- It’s “one init away.”

#### Links (external, unique)

- http://polter.build — Poltergeist product site.
- https://peekaboo.boo — Peekaboo project referenced as the origin of the need.
- https://github.com/steipete/poltergeist — Poltergeist repo.
- https://github.com/steipete/poltergeist/blob/85d8edfdd48ae4c6b30813264ce453d1df78ee83/src/cli.ts#L389 — Agent/human detection logic.
- https://wisprflow.ai — Wispr Flow dictation tool.
- https://x.com/steipete/status/1952763998266372231 — Subagents aside reference.
- https://github.com/steipete/poltergeist/actions/runs/16762891298 — CI run reference.
- https://x.com/steipete/status/1952748261472641170 — Tweet about Go conversion experiment.
- https://repo2txt.simplebasedomain.com — Repo‑to‑text conversion website.
- https://www.anthropic.com/news/claude-opus-4-1 — Opus 4.1 announcement.
- https://gist.github.com/ashokallu/47a70a70c7f6857ff29e1cd3cb97bbd3 — Idiomatic Go guide.
- https://x.com/jarredsumner/status/1952827266440019986 — Bun SPA mode performance reference.
- https://github.com/sjansen/watchman — Go Watchman bindings (unmaintained).
- https://github.com/steipete/poltergohst — Go conversion experiment repo.
- https://facebook.github.io/watchman/docs/install.html — Watchman install docs.
- https://nodejs.org/en/download — Node.js download page.
- https://github.com/steipete/poltergeist/tree/main/apps/mac — macOS menu bar app source.

### Self-Hosting AI Models After Claude's Usage Limits (2025-07-31)

**Summary:** A cost‑and‑capability deep dive into self‑hosting Qwen3‑Coder‑480B after Claude’s weekly limits, plus a candid survey of alternatives and why Claude Code still wins overall.

- Claude Max shifted from 5‑hour windows to weekly limits, which hit him hard.
- TL;DR: Claude Code remains king; Qwen 3 Coder + opencode is strong; hopes for Gemini CLI and Crush.
- He considers himself in the top 1% of usage and understands why Anthropic changed pricing.
- Cursor’s pricing changes caused community anger and spurred him to explore alternatives.
- He often worked 16‑hour days but never automated Claude; he stayed within ToS.
- His July Anthropic bill was ~$6,000 due to heavy use and GitHub review bot usage.
- Some people extracted Max API tokens for background use; he chose to pay instead.
- He asks Anthropic to stay friendly after paying up.
- He surveyed many tools to see what could replace Claude Code.
- Claude Code is hard to replace because it blends model + tooling.
- opencode is his most promising alternative; supports many providers and is improving.
- opencode is optimized for Qwen 3 Coder and delivers good results.
- charm’s crush is beautiful but early; edit tool issues and hangs with Qwen.
- He submitted a PR to make Crush work with self‑hosted inference.
- Text selection and link clicking are broken in Crush; that’s a deal‑breaker.
- claude‑code‑router is a clever hack but not as good since CC is tuned for Anthropic models.
- Cline is a VS Code extension, not a CLI; it doesn’t fit his workflow and wasn’t impressive.
- Amp is opinionated; uses Sonnet and can call OpenAI o3; no subscriptions, pay‑as‑you‑go.
- Amp is hyped but didn’t impress him; maybe more token‑efficient than CC.
- Gemini CLI and Qwen Code are promising; Gemini is very fast and good for large contexts.
- Gemini’s tool calling is broken and it can be lazy.
- Gemini is open source and improving; Qwen Code fork might lag or be abandoned.
- There are many more tools (RooCode, Kiro, Auggie CLI); tooling and prompts matter hugely.
- RooCode even draws diagrams; shows the power of system prompts.
- Claude Code’s strength is tight optimization for a single model.
- His goals: reduce dependence on Anthropic and lower heavy‑use costs.
- He bought a 512GB RAM Mac Studio to experiment; it wasn’t competitive then.
- Deepseek made him realize 512GB isn’t enough for top models.
- Local Deepseek Coder V2 runs ~25 tok/s; R1 quantized ~8–15 tok/s.
- 128k context is a downgrade vs Claude 200k or Gemini 1M.
- Multi‑Studio setups would cost $30k+.
- Chinese labs now release better models weekly.
- Qwen3‑Coder‑480B got his attention with near‑Sonnet SWE‑bench results.
- It has a 256k native context window, stretchable to 1M with YaRN.
- Running it requires top‑end GPUs; H200 is best currently.
- B200 is newer and expensive; software support is weak.
- He tested Prime Intellect, Vast.ai, and DataCrunch.
- 8xH200 pricing ranges $5–$30/hr depending on provider/instance type.
- Spot instances are cheaper but get deprovisioned; they’re unstable.
- Regular 8xH200 is ~$14/hr on DataCrunch; Vast.ai is ~$26/hr; AWS is double.
- His current rig: 8xH200, 176 CPU, 1450GB RAM, Ubuntu 24.04, CUDA 12.8, ~$15/hr.
- He runs Qwen3‑Coder‑480B FP8 with 400k context on that rig.
- FP8 loses little accuracy but saves memory; FP16 would drop context to ~32k.
- KV cache is ~4.2MB per token in FP16; 1M tokens would need 17–30 H200s.
- That’s why he caps at 400k tokens on 8 GPUs.
- Setup is tricky but Claude Code handled prompts; setup took ~30 minutes on H200.
- B200 spot instances are ~$4/hr and stable, but software isn’t ready yet.
- He spent a day and couldn’t beat 8xH200 performance on B200.
- B200 might improve as software catches up.
- The 3×8xB200 hardware he rented is worth ~$2M.
- Running 24/7 costs ~$11k/month; daily rebuilds cut to ~$2.6k/month.
- Daily rebuilds cost setup time (30–60 minutes each morning).
- Verdict on self‑hosting: not worth it.
- You can’t reliably stop/restart instances; re‑scheduling can take days or weeks.
- Performance tests show Alibaba is slightly faster than his optimized rig.
- Cerebras offers Qwen3‑Coder‑480B with 5,000 messages/day for $200/month; ~20× faster than Claude 4 Sonnet.
- Alibaba rents a 1M‑context Qwen 3 Coder with token pricing tiers.
- Self‑hosting is hard to make cost‑effective unless you burn huge tokens.
- Shared self‑hosted servers still hit bottlenecks with concurrent users.
- Anthropic API pricing: $15/$75 Opus, $3/$15 Sonnet.
- Gemini 2.5 Pro pricing: $1.25–$2.50 in, $10–$15 out.
- On intense days he uses ~500M tokens; costs vary due to caching.
- Opus could be ~$1,000/day; Sonnet ~$200/day, similar to 8 hours of his rig.
- Other models are cheaper.
- Qwen 3 Coder + opencode is now a usable and cost‑effective alternative.
- The subscription nerf will change the calculus soon.
- Open‑source models are 6–12 months behind but viable to host.
- Economically, paying per token is still saner than self‑hosting.
- Final verdict: Claude Code for terminal coding, opencode+Qwen (Alibaba/Cerebras) for simpler tasks, Gemini for debugging.
- He includes a detailed setup guide for self‑hosting Qwen3‑Coder‑480B on 8xH200.
- The guide covers Vast.ai provisioning, SSH setup, vLLM deployment, and Caddy auth removal.
- It includes client setup for Cline, Cursor, and a Qwen CLI.
- It includes testing, performance tuning, troubleshooting, and cost tracking.
- It provides context‑window tuning presets and maintenance tasks.
- It advises security practices (SSH tunnels, API keys, firewall).
- It lists cost‑saving tips (pause instances, use 4xH200, spot instances, shrink context).
- It defines FP8/FP16, KV cache, and tensor parallel size.
- He adds a note about organizing the first Claude Code Anonymous meetup in London on Aug 18 and invites DMs.

#### Links (external, unique)

- https://x.com/steipete/status/1949901121998508119 — Reaction to Claude Max’s weekly limits.
- https://x.com/steipete/status/1948549916604989706 — “A ton of benefit” from the payment model.
- https://www.reddit.com/r/cursor/comments/1lrc7q8/cursor_pricing_changed_after_12_days/ — Cursor pricing change discussion.
- https://x.com/steipete/status/1949908573452193866 — July Anthropic bill (~$6,000) reference.
- https://opencode.ai/ — OpenCode alternative.
- https://x.com/steipete/status/1951288839814725862 — opencode promise / benchmark tool reference.
- https://github.com/charmbracelet/crush — charm’s Crush CLI.
- https://github.com/charmbracelet/crush/pull/414 — PR to make Crush work with self‑hosted inference.
- https://github.com/musistudio/claude-code-router — Claude Code router hack.
- https://github.com/cline/cline — Cline VS Code extension.
- https://x.com/steipete/status/1951062013913727332 — Cline unimpressed reference.
- https://ampcode.com/ — Amp CLI.
- https://x.com/steipete/status/1951059420193968581 — Amp unimpressed reference.
- https://github.com/google-gemini/gemini-cli — Gemini CLI.
- https://github.com/QwenLM/qwen-code — Qwen Code fork.
- https://x.com/steipete/status/1951058436030079159 — Qwen Code fork mention.
- https://x.com/steipete/status/1942113964231442876 — Gemini tool‑calling broken reference.
- https://x.com/steipete/status/1951301660950581709 — Gemini laziness reference.
- https://github.com/RooCodeInc/Roo-Code — RooCode example.
- https://kiro.dev/ — Kiro example.
- https://www.augmentcode.com/changelog/auggie-cli — Auggie CLI example.
- https://x.com/steipete/status/1951080437188624564 — RooCode diagrams example.
- https://www.primeintellect.ai/ — Prime Intellect provider.
- https://vast.ai/ — Vast.ai provider.
- https://datacrunch.io/ — DataCrunch provider.
- https://qwenlm.github.io/blog/qwen3-coder/ — Qwen3‑Coder‑480B announcement.
- https://x.com/steipete/status/1951217528161567193 — B200 setup attempt reference.
- https://www.cerebras.ai/blog/qwen3-coder-480b-is-live-on-cerebras — Cerebras Qwen3 offering.
- https://www.alibabacloud.com/help/en/model-studio/models#8e453767fbkka — Alibaba Qwen pricing.
- https://www.anthropic.com/pricing#api — Anthropic API pricing.
- https://ai.google.dev/gemini-api/docs/pricing — Gemini API pricing.

### Logging Privacy Shenanigans (2025-07-29)

**Summary:** A practical explanation of macOS unified logging redaction, why common workarounds fail, and the most reliable ways to re‑enable private data during debugging.

- Apple’s unified logging redacts sensitive data as `<private>`, which makes debugging painful.
- Example: interpolated Swift logs show `<private>` instead of actual values.
- He tested Apple’s redaction behavior and found it doesn’t match docs.
- Simple strings, file paths, UUIDs are usually redacted.
- Numbers/booleans/floats are typically public.
- The difference comes from os_log’s compile‑time format string requirement.
- Static strings are part of the format and treated as safe.
- Runtime values (variables, computed results) are flagged as private.
- Old workaround `private_data:on` is dead since macOS Catalina.
- `sudo log show` doesn’t reveal private data because redaction happens at write time.
- Once data is logged as private, the raw value is gone.
- Preferred fix: drop a plist into `/Library/Preferences/Logging/Subsystems/`.
- This is simpler than configuration profiles and is what profiles do under the hood.
- The plist enables `Enable-Private-Data` for a subsystem.
- He provides a minimal plist template.
- Installation steps: create directory, copy plist, set permissions.
- Important gotcha: write plist atomically (temp file then mv).
- Only new logs are affected; you must generate fresh logs.
- Remove the plist after debugging.
- Benefits: scriptable, no UI, granular control, CI/CD‑friendly.
- He cites documentation sources confirming the approach.
- Alternative method: install a configuration profile.
- He provides a full `.mobileconfig` template.
- He explains how to customize UUIDs, organization, and subsystem IDs.
- Shows how to enable multiple subsystems.
- Highlights important payload keys and values.
- He lists install steps for macOS 15+ and macOS 14‑.
- Removal is via the Profiles/Device Management UI.
- Code‑level solution: mark non‑sensitive values as `.public` in log calls.
- This is safest for production because you explicitly control exposure.
- He suggests giving Claude Code this blog URL to generate custom configs.
- Summary bullets: redaction at write time, plist files are simplest, remove after use.
- He links to more detail: os_log man page, Howard Oakley, and Der Flounder.

#### Links (external, unique)

- https://micro.blog/pajp/70072065 — Rasmus Sten tip about the plist method.
- https://www.manpagez.com/man/5/os_log/ — os_log(5) man page.
- https://developer.apple.com/forums/thread/114166 — Apple Developer Forums confirmation.
- https://derflounder.wordpress.com/2025/05/05/accessing-subsystem-logging-configurations-used-by-the-macos-unified-logging-on-macos-sequoia/ — Sequoia logging analysis.
- https://eclecticlight.co/2023/03/08/removing-privacy-censorship-from-the-log/ — Howard Oakley’s deep dive on log privacy.

### VibeTunnel's first AI-anniversary (2025-07-16)

**Summary:** A one‑month progress report on VibeTunnel’s explosive growth, key milestones, lessons about agent‑assisted development, and a thank‑you to the community.

- It’s been one month since VibeTunnel’s first release; he calls it an AI‑speed “anniversary.”
- VibeTunnel turns a browser into a terminal for Mac/Linux, ideal for agents like Claude/Gemini.
- TL;DR stats: 2.8k commits, 147k LOC, Mac/Linux/npm releases; 1.0 coming late July.
- LOC grew from 4,012 in beta.1 to 147,226 in beta.11 (37× growth).
- 2,842 commits from 32 contributors show agents can build large projects.
- He provides a release/LOC/tests table across betas.
- The most intense growth phase had 436 commits and ~126 commits per release.
- Tests ramped up significantly over time.
- The backend went Rust → Go → Node; Rust may return later.
- He treats languages as implementation details with agents.
- Terminal title management (`vt title`) landed in beta.6 to manage many agent sessions.
- It updates terminal window titles dynamically.
- They forked Microsoft’s node‑pty due to crashes in VS Code.
- He found thread‑safety issues and unnecessary socket code.
- Fork reduced crashes; long‑term plan is to replace with Rust.
- Repository discovery feature scans project folders for git repos.
- This saves 10–20 seconds per session.
- Early “vibe” development worked, but structure became necessary.
- Tests are critical with agents; they’ll break things while claiming success.
- He uses detailed prompts with “ultrathink” and multiple options before changes.
- This avoids the simplest, most debt‑heavy solution.
- He prefers opportunistic refactoring when already in the area.
- Example PR replaced a band‑aid with a full unix‑socket overhaul.
- Community building is hard; “good first issues” can be misleading.
- A macOS keyboard fix broke other platforms; true fix required days of research.
- They now curate actually‑good first issues and added a Discord for coordination.
- Agents help with code, but humans must do product/support/docs.
- He thanks core team and major contributors by name.
- He credits Claude, Cursor, and Devin; notes it’s mostly Claude.
- Beta 11 shipped with standalone npm + Linux; bug list slowing down.
- 1.0 targets end of July, followed by iOS app and new modes (Agent, Apple Watch, voice).
- They’re creating a VibeTunnel organization and moving the repo there.
- VibeTunnel now uses the vt.sh domain.
- He invites people to download the Mac app and share photos of where they’re “vibing.”

#### Links (external, unique)

- https://github.com/amantus-ai/vibetunnel/pull/297 — PR to bring Rust back.
- https://github.com/amantus-ai/vibetunnel/pull/304 — node‑pty fork PR.
- https://github.com/amantus-ai/vibetunnel/pull/274 — Session picker repo discovery.
- https://github.com/amantus-ai/vibetunnel/pull/345 — Opportunistic refactor PR example.
- https://github.com/amantus-ai/vibetunnel/pull/298 — “Good first issue” example that was harder than expected.
- https://github.com/amantus-ai/vibetunnel/issues?q=sort%3Aupdated-desc%20is%3Aissue%20is%3Aopen%20label%3A%22good%20first%20issue%22 — Good‑first‑issues list.
- https://discord.gg/3Ub3EUwrcR — VibeTunnel Discord.
- https://github.com/badlogic — Mario Zechner profile.
- https://github.com/mitsuhiko — Armin Ronacher profile.
- https://github.com/manuelmaly — Manuel Maly profile.
- https://github.com/hjanuschka — Helmut Januschka profile.
- https://github.com/jhurray — Jeff Hurray profile.
- https://vt.sh — New VibeTunnel domain.
- https://github.com/amantus-ai/vibetunnel/releases — Mac app download releases.

### Making AppleScript Work in macOS CLI Tools: The Undocumented Parts (2025-07-03)

**Summary:** A step‑by‑step guide to making AppleScript work in macOS CLIs by embedding Info.plist, adding entitlements, signing binaries, and using an undocumented API to fix permission dialogs.

- Cursor’s inline terminal blocks long‑running commands, disrupting agent loops.
- He built an MCP to control an external terminal (Terminator) to avoid blocking.
- First attempt used pure AppleScript; it required focus and kept stealing it.
- An AI agent wrote AppleScript to detect the foreground app.
- When it found Chrome blocking, it killed Chrome windows; he apologized to the agent.
- He realized AppleScript in CLI tools is an undocumented‑API minefield.
- `osascript` is the easy path, but AppKit AppleScript APIs give better errors.
- Claude Code made Terminator unnecessary, so he ditched Cursor.
- He writes the post so future users can fix this by sharing the URL with Claude Code.
- Naive NSAppleScript calls fail silently, or show permission dialogs blaming Terminal/Cursor.
- Error -1750 is common with no useful context.
- Root cause: macOS security needs proper bundle ID, signing, and entitlements.
- Step 1: create an Info.plist with bundle ID, name, version, and Apple Events usage.
- Step 2: embed the Info.plist into the binary via `__TEXT/__info_plist`.
- He shows a SwiftPM linkerFlags example.
- He shows how to verify embedding with `otool` + `plutil`.
- Step 3: add entitlements for Apple Events automation.
- Step 4: code‑sign the CLI (production or ad‑hoc).
- He provides a battle‑tested signing script.
- Advanced fix: use `responsibility_spawnattrs_setdisclaim` to make the CLI own permissions.
- This changes permission dialogs to show your CLI, not the parent app.
- He includes a Swift bridge and `posix_spawn` example.
- He shows test steps: reset TCC, verify plist embedding, entitlements, signatures.
- Bottom line: you need Info.plist, entitlements, signing, and optionally the disclaimer API.
- He closes with a “native is hard mode” reflection.

#### Links (external, unique)

- https://github.com/steipete/Terminator — Terminator MCP repo.
- https://github.com/steipete/Terminator/blob/main/scripts/terminator.scpt — AppleScript prototype.
- https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/osascript — `osascript` documentation.
- https://docs.anthropic.com/en/docs/claude-code — Claude Code documentation.
- https://www.qt.io/blog/the-curious-case-of-the-responsible-process — Qt blog on the responsible process API.

### Peekaboo 2.0 – Free the CLI from its MCP shackles (2025-07-03)

**Summary:** A CLI‑first redesign of Peekaboo that keeps MCP optional, reduces context bloat, and makes screenshot + analysis workflows composable and agent‑friendly.

- He previously built Peekaboo for fast macOS screenshots for agents.
- Peekaboo can use a separate agent for analysis to save main‑agent context.
- It’s faster than macOS `screencapture` and avoids focus stealing.
- Community mindset shift: many MCPs should just be CLIs.
- CLIs are composable, on‑demand, and avoid context clutter.
- Peekaboo 2.0 frees itself from MCP‑only architecture and ships as a CLI.
- The core engine was always a Swift CLI; MCP was a thin TypeScript wrapper.
- He moved AI processing from TypeScript into the Swift CLI.
- Now the CLI is first‑class, not a port.
- Agents can discover and run Peekaboo on demand.
- He provides CLI examples for capture and analyze.
- Installation via Homebrew or GitHub download.
- MCP server remains available; nothing removed.
- AI analysis needs OpenAI API key; otherwise it’s just screenshots.
- He provides shell‑env and config‑file options for API keys.
- Example config uses OpenAI GPT‑4o + Ollama Llava.
- Peekaboo becomes a visual AI assistant once configured.
- He shows example workflows for UI debugging and summarizing webpages.
- He argues CLI > MCP: better for agents, no context bloat, composable.
- Suggests a CLAUDE.md note to announce Peekaboo availability.
- He quotes Armin Ronacher’s “Code Is All You Need” to support CLI composability.
- CLIs are predictable and reusable once a command works.
- He says MCPs aren’t useless; Playwright MCP is good.
- GitHub MCP is worse than `gh` CLI for the same job.
- He recommends Manuel Odendahl’s “MCPs are Boring” talk.
- He positions Peekaboo 2.0 as a fundamental shift toward CLI tooling.
- He invites readers to “give your agents eyes” and join the CLI revolution.

#### Links (external, unique)

- https://github.com/steipete/peekaboo — Peekaboo repo.
- https://lucumr.pocoo.org/2025/7/3/tools/ — Armin Ronacher’s “Code Is All You Need.”
- https://github.com/microsoft/playwright-mcp — Playwright MCP.
- https://github.com/microsoft/mcp — Microsoft GitHub MCP.
- https://cli.github.com/ — GitHub CLI.
- https://www.youtube.com/watch?v=J3oJqan2Gv8 — Manuel Odendahl’s “MCPs are Boring” talk.
- https://peekaboo.dev/ — Peekaboo 2.0 download site.

### Command your Claude Code Army, Reloaded (2025-07-03)

**Summary:** A VibeTunnel‑based upgrade for managing multiple Claude Code sessions with automatic, reliable terminal titles.

- Managing multiple Claude Code sessions is easier with VibeTunnel’s terminal title management.
- Each Claude session shows what it’s working on without manual updates.
- You can set custom titles with `vt title "Custom title"`.
- Clicking a session selects that terminal.
- Folder icon opens Finder; Git info opens your Git client.
- Feature is new in VibeTunnel 1.0 Beta 6.
- The previous ZSH trick failed because Claude kept rewriting the title.
- VibeTunnel integration solves this by letting Claude update titles properly.
- It only works if Claude is launched via `vt` (e.g., `vt claude`).
- He provides a ready‑to‑paste section for `~/.claude/CLAUDE.md`.
- Guidance: update titles frequently and descriptively.
- Include context like PR numbers, file names, feature names.
- Treat titles as status indicators for quick visibility.
- Ignore `vt` errors outside VibeTunnel.
- Examples include starting tasks, debugging, PR work, analysis, and tests.
- He lists when to update: task start, file/module switches, coding vs testing, long operations.
- Two setup options: automatic (paste URL into Claude) or manual (edit CLAUDE.md).
- He links a gist with the full configuration.
- The goal: manage a “Claude Code Army” with clear visibility across sessions.

#### Links (external, unique)

- https://vibetunnel.sh/ — VibeTunnel site and beta download.
- https://gist.github.com/steipete/c297c84e1684c330b3325825d835da03 — Full configuration gist.

### Commanding Your Claude Code Army (2025-06-05)

**Summary:** A ZSH wrapper trick to keep terminal titles stable when running multiple Claude Code instances.

- Update note: a better VibeTunnel solution now exists.
- TL;DR: a ZSH trick organizes terminal titles for multiple Claude instances.
- He’s a Claude Code power user with multiple simultaneous sessions.
- Ghostty only shows process name, so many tabs look identical.
- This is worse with `--dangerously-skip-permissions` because you can run the wrong command.
- Claude Code also overwrites terminal titles with unhelpful text.
- He solves it with a small ZSH wrapper.
- He adds a source line in `~/.zshrc` for a wrapper file.
- The wrapper sets terminal title to “folder — Claude.”
- A background loop keeps resetting the title so Claude can’t change it.
- The wrapper runs Claude with dangerous permissions.
- After Claude exits, the title resets to the normal prompt.
- He installs a ZSH precmd hook to update titles before each prompt.
- He suggests asking Claude to set it up for you in yolo mode.
- He closes humorously about checking on runaway Claude instances.

#### Links (external, unique)

- https://www.anthropic.com/claude-code — Claude Code product page.
- https://ghostty.org/ — Ghostty terminal.

### Claude Code is My Computer (2025-06-03)

**Summary:** A case for running Claude Code with dangerous permissions: it becomes a full computer interface that saves hours, with safety mitigated by backups and careful habits.

- TL;DR: He runs Claude Code without permission prompts and saves ~1 hour/day.
- The $200/month Max plan pays for itself.
- He runs Claude Code with `--dangerously-skip-permissions`.
- Anthropic docs say that flag is for offline containers, but it works on macOS.
- He acknowledges the risk of a rogue prompt.
- He mitigates with hourly Arq snapshots and a SuperDuper clone.
- After two months, no incidents.
- He shifted from “AI assistant” to “universal computer interface.”
- Migration story: asked Claude to restore a new Mac from backup, step‑by‑step.
- Claude drafted a plan and completed migration in under an hour.
- He uses Claude Code for multiple outcomes:
- Ship content: Jekyll → MDX conversion with images, redirects, and a merge‑ready branch.
- Extract features: split into a Swift project (Demark) with tests/docs/release.
- Automate content: uses Wispr Flow to dictate and have Claude write in his style.
- Generate test data: Claude reads models and creates realistic seed data.
- Ship code: Claude commits in logical chunks, pushes, opens PRs, watches CI, fixes failures.
- Clean OS: natural language commands like hiding recent apps in Dock.
- Spin up machines: CodeLooper signing/notarization, keys, builds, releases, and tests.
- macOS Automator MCP could automate even UI steps.
- He uses a shell alias `cc` to run Claude with the dangerous flag.
- Claude works well because it’s CLI‑first, not IDE‑bolted.
- Anthropic best practices: keep a `CLAUDE.md` with repo context.
- He adopted that pattern and saw fewer clarifying questions.
- He links his Claude Code rules as examples.
- Main limitation is response time; sometimes traditional tools are faster.
- Prefixing commands with `!` skips LLM evaluation for speed.
- Warp’s AI terminal requires approvals; Claude’s dangerous mode keeps flow.
- He likes Warp’s mission but thinks their safety model differs.
- He prefers Ghostty as a faster, native terminal.
- He sees AI‑native tools as a paradigm shift toward intent‑driven computing.
- Developers become orchestrators; syntax fades, systems thinking rises.
- He recommends trying it if you accept risk and have backups.
- The learning curve is minimal; treat the computer like a competent colleague.
- Closing: your computer becomes Claude.
- He notes backup migrations can cause macOS issues.
- Invites readers to share workflows via Twitter.
- He recommends Philipp Spiess’s article as essential reading.

#### Links (external, unique)

- https://claude.ai/code — Claude Code landing page.
- https://www.anthropic.com/news/claude-3-7-sonnet — Claude Code release announcement.
- https://docs.anthropic.com/en/docs/claude-code — Claude Code documentation.
- https://www.arqbackup.com/ — Arq backup tool.
- https://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html — SuperDuper! backup/cloning tool.
- https://wisprflow.ai/ — Wispr Flow dictation.
- https://x.com/steipete/status/1923897903698887036 — Test data generation example.
- https://www.codelooper.app/ — CodeLooper project reference.
- https://github.com/steipete/macos-automator-mcp — macOS Automator MCP Server.
- https://www.anthropic.com/engineering/claude-code-best-practices — Anthropic best practices guide.
- https://github.com/steipete/agent-rules — His Claude Code rules repo.
- https://www.warp.dev/ — Warp terminal.
- https://ghostty.org/ — Ghostty terminal.
- https://discussions.apple.com/thread/255759421 — Apple thread on migration issues.
- https://twitter.com/steipete — Author’s Twitter.
- https://spiess.dev/blog/how-i-use-claude-code — Philipp Spiess article.

### Vibe Meter: Monitor Your AI Costs (2025-06-04)

**Summary:** How he built a Swift menu‑bar app to track AI spending, the technical hurdles, and the architecture/automation choices that made it shippable in three days.

- His Cursor bill hit $900, prompting a need for real‑time AI spend tracking.
- That sparked Vibe Meter, a menu bar app built in three intense days.
- It evolved from a workshop demo into a Swift 6/SwiftUI product with heavy AI help.
- He had multiple models review the codebase and quotes their feedback.
- O3: name mismatch with purpose.
- Claude Opus: praised 86% test coverage and code quality.
- Gemini: called it intentionally over‑engineered for growth.
- He ran a live workshop demo on AI‑assisted development.
- Cursor has no public API; he reverse‑engineered the web interface.
- Built Electron and macOS versions in parallel.
- Feedback was positive; he polished after Gergely Orosz mentioned it.
- Enterprise vs individual accounts required different API handling.
- Oliver Drobnik helped fix individual account parsing.
- He notes “the second 90%” takes longer than the first 90%.
- He needs testers with multiple Cursor teams; current version assumes one team.
- SwiftUI vs AppKit: menu bar apps expose SwiftUI limits.
- For popovers without arrows and menu‑item settings, he used AppKit.
- He built a custom NSPanel for menu bar control.
- Memory issues in release builds caused windows to vanish due to weak refs.
- He used a reflection hack to open settings via NSMenuItem internals.
- Animated menu bar icon was a breakthrough using SwiftUI + ImageRenderer.
- The gauge animates with spending levels and conic gradient shimmer.
- Swift 6 concurrency: heavy use of actors and @MainActor isolation.
- Uses TaskGroup in a MultiProvider orchestrator; async/await everywhere.
- He ditched Combine entirely.
- Debugging UNUserNotificationCenter thread issues was painful.
- A release‑only bug hid the window; Claude diagnosed weak reference loss.
- Lesson: always test release builds.
- Distribution was the hardest part: signing, notarization, Sparkle.
- Partial notarization of embedded frameworks can break releases.
- He wrote custom shell scripts instead of Fastlane.
- Claude can run “make a new release 1.1 beta 1” and it automates everything.
- Scripts handle build numbers, DMGs, GitHub releases, Sparkle appcasts.
- EdDSA signatures were the trickiest part; error messages are cryptic.
- Pro tip: test update feeds locally.
- Architecture anticipates multiple providers; Cursor is the only current one.
- He resisted adding OpenAI/Anthropic to ship sooner.
- Multi‑provider design helps with mocks and graceful API failures.
- Polish details: currency conversion, Gravatar avatars, network monitoring.
- ApplicationMover relocates the app to /Applications.
- Spending limits support configurable thresholds.
- He constrained files to <300 lines for agent friendliness.
- Used Tuist to avoid Xcode project complexity for agents.
- By the numbers: 174 Swift files, 28,599 LOC, 86% coverage, 628 tests.
- 18 shell scripts totaling 2,857 lines for build automation.
- 437 Swift concurrency keywords and 15 protocols.
- Largest files still near the 300‑line constraint.
- Build scripts for signing, release, and notarization are sizable.
- Testing philosophy: AI‑generated tests caught real bugs.
- Examples: exchange rate outages, cookie expiration, timezone resets, no‑internet cases.
- UserDefaultsBackedAdvancedTests is 374 lines but caught issues.
- Lessons: context windows matter; he ran six Claude instances in parallel.
- Small files reduce agent mistakes and improve architecture.
- SwiftUI handled most UI; AppKit for edge cases.
- Swift 6 actors/structured concurrency enabled manageable state.
- Agents are good at writing tests; embrace it.
- Performance: ~45MB memory and near‑zero CPU idle.
- Background refresh every 5 minutes with exponential backoff.
- Exchange rates load only when needed; cached for 24 hours.
- He invites users to try Vibe Meter, with source on GitHub.
- He points to the workshop recording for the origin story.
- Closing: three days, one person, six AI assistants.

#### Links (external, unique)

- https://www.vibemeter.ai/ — Vibe Meter product site.
- https://github.com/steipete/VibeMeter — Vibe Meter repo.
- https://x.com/GergelyOrosz — Gergely Orosz mention.
- https://x.com/Cocoanetics — Oliver Drobnik handle.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Presentation/Components/CustomMenuWindow.swift — Custom NSPanel implementation.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Core/Utilities/NSApplication%2BopenSettings.swift — Settings reflection hack.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Presentation/Components/GaugeIcon.swift — Animated menu bar icon.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Core/Services/ — Actor‑based services architecture.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Core/Providers/Cursor/CursorAPIClient.swift — Cursor API client actor.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Core/Services/ExchangeRateManager.swift — Exchange rate actor.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Core/Services/MultiProviderDataOrchestrator.swift — TaskGroup orchestration.
- https://github.com/steipete/VibeMeter/tree/main/scripts — Release automation scripts.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Presentation/Components/UserAvatarView.swift — Gravatar integration.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Core/Services/NetworkConnectivityMonitor.swift — Network monitoring.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Core/Utilities/ApplicationMover.swift — /Applications relocation.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Core/Services/SpendingLimitsManager.swift — Spending limit thresholds.
- https://tuist.io — Tuist project generator.
- https://github.com/steipete/VibeMeter/blob/main/VibeMeter/Core/Services/BackgroundDataProcessor.swift — Background refresh logic.

### Code Signing and Notarization: Sparkle and Tears (2025-06-05)

**Summary:** A hard‑won, step‑by‑step recipe for making Sparkle updates work in sandboxed macOS apps, including entitlements, signing order, appcast handling, and release automation.

- He compares Sparkle updates in sandboxed apps to solving a Rubik’s cube with oven mitts.
- After many failed betas, he found a working pipeline.
- Vibe Meter is the sandboxed app he’s updating.
- Initial signing/notarization seemed fine, but updates failed with authorization errors.
- The error meant Sparkle couldn’t talk to its XPC services.
- The root cause was missing mach‑lookup entitlements.
- You must include both `-spks` and `-spki` service names.
- `-spks` maps to InstallerLauncher.xpc; `-spki` maps to Installer.xpc.
- Missing either causes authorization failure.
- Code signing with `--deep` is wrong; it breaks XPC service signatures.
- Proper signing requires a specific order of XPC services, framework, then app.
- Downloader.xpc needs `--preserve-metadata=entitlements` (Sparkle 2.6+).
- Modifying Sparkle’s XPC bundle IDs is a mistake; the framework expects specific suffixes.
- Sparkle requires specific bundle ID suffixes for sandboxed apps.
- Build numbers (CFBundleVersion) must increment; version strings don’t matter.
- Appcast generation must validate build numbers.
- After fixing entitlements, bundle IDs, signing order, and build numbers, updates worked.
- He lists the “magic recipe”: entitlements, bundle IDs, signing order, build numbers, Info.plist flags.
- He sets `SUEnableInstallerLauncherService = true` and `SUEnableDownloaderService = false` when network access exists.
- He notes Sparkle XPC services keep their original bundle IDs.
- He provides the entitlements snippet with spks/spki.
- He built a full release pipeline with multiple scripts.
- Scripts include preflight, code signing, notarization, DMG creation, appcast generation, release.
- Release scripts let Claude run a full release flow.
- There’s a versioning script for bumping versions.
- Notarization uses `notarytool` with ZIP uploads (not DMG).
- You must staple and validate tickets.
- Certificates are required; Claude can guide setup.
- Sparkle supports HTML changelogs; he converts Markdown to HTML with a simple script.
- The “Poor Man’s Markdown Parser” handles headers, lists, bold; no nested lists or images.
- Distribution is GitHub‑centric: GitHub releases host DMGs.
- Appcasts are served via raw GitHub URLs.
- There are separate stable and pre‑release appcasts.
- Appcasts are versioned alongside code.
- The app can switch update channels at runtime.
- `release.sh` orchestrates build, sign, release, appcasts, and commits.
- He shows a flow diagram of the release pipeline.
- Lessons: read docs, use Console.app, don’t be clever, test updates, automate everything, version scripts.
- Final reflection: Sparkle is simple once you respect its rules.
- He suggests downloading Vibe Meter and reading his dev diary.
- He includes resource links and thanks Sparkle + Claude Code.
- P.S. encourages stealing his scripts.

#### Links (external, unique)

- https://vibemeter.ai — Vibe Meter app.
- https://sparkle-project.org/documentation/sandboxing/ — Sparkle sandboxing docs.
- https://github.com/steipete/VibeMeter/blob/main/scripts/codesign-app.sh — Code signing script.
- https://github.com/steipete/VibeMeter/blob/main/scripts/generate-appcast.sh — Appcast generation script.
- https://github.com/steipete/VibeMeter/tree/main/scripts — Full build scripts.
- https://tuist.dev/ — Tuist site (script assumptions).
- https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution — Apple notarization docs.
- https://github.com/steipete/VibeMeter/blob/main/scripts/preflight-check.sh — Preflight script.
- https://github.com/steipete/VibeMeter/blob/main/scripts/notarize-app.sh — Notarization script.
- https://github.com/steipete/VibeMeter/blob/main/scripts/create-dmg.sh — DMG creation script.
- https://github.com/steipete/VibeMeter/blob/main/scripts/release.sh — Release orchestrator.
- https://github.com/steipete/VibeMeter/blob/main/scripts/version.sh — Versioning script.
- https://github.com/steipete/VibeMeter/blob/main/scripts/changelog-to-html.sh — Markdown‑to‑HTML changelog script.
- https://github.com/steipete/VibeMeter/releases — GitHub releases hosting DMGs.
- https://raw.githubusercontent.com/steipete/VibeMeter/main/appcast.xml — Raw appcast feed.
- https://github.com/steipete/VibeMeter/blob/main/appcast.xml — Stable appcast.
- https://github.com/steipete/VibeMeter/blob/main/appcast-prerelease.xml — Pre‑release appcast.
- https://sparkle-project.org/documentation/publishing/ — Sparkle appcast docs.
- https://github.com/steipete/VibeMeter — VibeMeter source.

### Migrating 700+ Tests to Swift Testing: A Real-World Experience (2025-06-06)

**Summary:** A detailed migration story of 700+ XCTest cases to Swift Testing, showing why AI failed initially and how a playbook made it succeed with more idiomatic, maintainable tests.

- He migrated 700+ tests across Vibe Meter and CodeLooper using AI.
- Initial AI conversion worked but produced shallow “XCTest in Swift Testing clothes.”
- Basic conversions: XCTestCase → @Suite, XCTAssert → #expect, testFoo → @Test.
- It missed deeper Swift Testing patterns.
- He previously botched Swift Testing by linking to the wrong version; Stuart nudged him.
- He watched WWDC sessions to understand Swift Testing.
- WWDC videos referenced outdated APIs; AI got confused.
- Claude couldn’t read Apple’s JS docs.
- He used Firecrawl to convert Apple docs into markdown.
- This inspired llm.codes.
- He built two docs: full API docs + a playbook with examples.
- He used Google AI Studio + Gemini to update outdated APIs.
- Insight: emerging tech needs explicit knowledge, not just docs.
- The playbook included migration patterns, best practices, pitfalls, and feature guidance.
- Round two: he told Claude to read the playbook and refactor tests.
- Claude first started implementing new patterns instead of converting; he corrected the prompt.
- Lesson: be explicit about “refactor existing tests.”
- Nested suites reduced file counts and improved structure.
- Example: AuthenticationTokenManager tests collapsed into a hierarchy.
- Parameterized tests removed copy‑paste duplication.
- CustomTestStringConvertible improved test readability.
- Parameterized edge cases (nil/inf/NaN) became simple.
- Instance isolation means fresh state per test, simplifying setup/teardown.
- #expect vs #require behavior: soft vs hard assertions.
- Error testing is more expressive with #expect(throws:).
- Time limits prevent CI hangs.
- Performance tests became declarative with timeLimit.
- More advanced patterns: memory leak detection via weak refs.
- Descriptive test names replaced cryptic ones.
- confirmation() helps with async multi‑step scenarios.
- withKnownIssue handles flaky tests gracefully.
- Results: 46% fewer files, +3,258 lines, zero duplication, better structure.
- Vibe Meter: 61→23 files, +1,006 lines; CodeLooper: 30→26 files, +2,252 lines.
- More lines are due to descriptive names, tagging, and structured cases.
- Key takeaways: AI needs guidance, iterate/commit, Swift Testing improves patterns.
- Migration improved test quality, not just syntax.
- Cursor’s @Docs context can provide Apple docs.
- Context7 MCP gives snippets without explanations; still useful.
- He recommends swift test --filter to speed feedback loops.
- Provides examples for filter, tag include/exclude.
- PS: let AI convert XCTestExpectation, but provide better instructions.

#### Links (external, unique)

- https://developer.apple.com/xcode/swift-testing/ — Swift Testing overview.
- https://github.com/steipete/VibeMeter — Vibe Meter repo.
- https://github.com/steipete/CodeLooper — CodeLooper repo.
- https://gist.github.com/steipete/84a5952c22e1ff9b6fe274ab079e3a95 — Swift Testing playbook + docs.
- https://developer.apple.com/documentation/testing/suite — @Suite docs.
- https://developer.apple.com/documentation/testing/expect(_:_:sourceLocation:) — #expect docs.
- https://developer.apple.com/documentation/testing/test — @Test docs.
- https://x.com/throwspace/status/1929658866804953371 — Stuart nudged him to retry.
- https://developer.apple.com/videos/play/wwdc2024/10179/ — Meet Swift Testing session.
- https://developer.apple.com/videos/play/wwdc2024/10195/ — Go further with Swift Testing session.
- https://www.firecrawl.dev/referral?rid=9CG538BE — Firecrawl.
- https://aistudio.google.com/ — Google AI Studio.
- https://github.com/steipete/CodeLooper/pull/8/commits/d1bb7ba75dfefc821d24d5cfff6c785cd92f9079 — Example of Claude over‑implementing.
- https://developer.apple.com/documentation/testing/customteststringconvertible — CustomTestStringConvertible.
- https://developer.apple.com/documentation/testing/ — Swift Testing docs.
- https://developer.apple.com/documentation/testing/confirmation(_:expectedcount:sourcelocation:_:) — confirmation().
- https://developer.apple.com/documentation/testing/withknownissue(_:isintermittent:sourcelocation:_:) — withKnownIssue().
- https://github.com/steipete/VibeMeter/pull/28 — Vibe Meter migration PR.
- https://github.com/steipete/CodeLooper/pull/8 — CodeLooper migration PR.
- https://docs.cursor.com/context/@-symbols/@-docs — Cursor @Docs context.
- https://raw.githubusercontent.com/getcursor/crawler/main/docs.jsonl — Cursor docs list.
- https://context7.com/swiftlang/swift-testing — Context7 MCP Swift Testing.
- https://x.com/enesakar/status/1931296179502927935 — Context7 explanation note.

### Peekaboo MCP – lightning-fast macOS screenshots for AI agents (2025-06-07)

**Summary:** An MCP server that gives AI agents eyes on macOS, with screenshot capture, visual Q&A, and a design philosophy focused on minimal, forgiving tools.

- TL;DR: Peekaboo is a macOS MCP server for screenshots and visual analysis.
- It captures app or full‑screen images and can run visual question answering.
- It supports local or cloud vision models.
- It saves context space because answers are more compact than raw images.
- It provides three tools: image, analyze, list.
- These cover capture, analysis, and window/screen enumeration.
- The Cursor install button is included for quick setup.
- Design principle: keep tool counts low; agents struggle with 40+ tools.
- Each tool should be powerful but the total count minimal.
- Tool calling should be lenient; agents make parameter mistakes.
- Peekaboo uses fuzzy window matching for partial names.
- It ignores case and common variations.
- He links MCP Best Practices for more guidance.
- Local vs cloud: cloud is more accurate; local offers privacy and cost control.
- He recommends LLaVA as default; Qwen2‑VL for lower resources.
- Provides model size/ram requirements and install commands.
- Peekaboo is part of his MCP ecosystem (claude‑code‑mcp, macos‑automator‑mcp, Terminator).
- Architecture uses TypeScript for MCP distribution and Swift for ScreenCaptureKit.
- Swift avoids focus changes that AppleScript required.
- A Swift CLI talks to a Node MCP server.
- Supports local models and cloud providers with fallback.
- Built with Swift 6 + Swift Testing.
- He points to README for inspector testing.
- Vision: autonomous debugging with agents that can see and act.
- Peekaboo helps agents loop without human intervention.
- He invites users to try Peekaboo MCP and star the repo.

#### Links (external, unique)

- https://ollama.com/library/llava — LLaVA model.
- https://ollama.com/library/qwen2-vl — Qwen2‑VL model.
- https://github.com/steipete/claude-code-mcp — claude‑code‑mcp.
- https://github.com/steipete/macos-automator-mcp — macOS Automator MCP.
- https://github.com/steipete/Terminator — Terminator MCP.
- https://github.com/modelcontextprotocol/typescript-sdk — MCP TypeScript SDK.
- https://developer.apple.com/documentation/screencapturekit — ScreenCaptureKit.
- https://github.com/steipete/Peekaboo/blob/main/peekaboo.scpt — AppleScript prototype.
- https://github.com/steipete/Peekaboo#testing--debugging — Peekaboo README testing.
- https://www.peekaboo.dev/ — Peekaboo site.
- https://github.com/steipete/Peekaboo — Peekaboo repo.

### llm.codes: Make Apple Docs AI-Readable (2025-06-14)

**Summary:** A tool that converts JS‑heavy docs into llms.txt so AI agents can read current documentation; built after Claude failed on Apple docs.

- TL;DR: llm.codes converts Apple docs and 69+ other sites into llms.txt.
- Quick start: use it on Apple’s Foundation Models docs.
- Claude couldn’t read SwiftUI docs; it pushed him to AppKit unnecessarily.
- The root problem is JavaScript‑rendered documentation.
- LLMs can’t parse JS‑heavy docs, leaving blind spots.
- He built llm.codes to fetch docs as clean Markdown.
- Optimized for Apple docs but supports many developer sites.
- Benefits: AI can see Apple docs; 70% smaller files; supports 69+ sites.
- He lists categories (mobile, languages, frameworks, cloud, DBs, DevOps, AI/ML, CSS, build tools).
- Firecrawl powers the conversion and he pays for credits.
- Real‑world example: once he dragged SwiftUI markdown into context, Claude wrote correct code.
- Insight: tell Claude to read the docs for better results.
- He argues Context7 provides outdated 2019 SwiftUI examples.
- You need current documentation, not ancient samples.
- He used this approach in his Swift Testing migration.
- He maintains a repo of pre‑converted docs.
- llm.codes itself is open source and was vibe‑coded with Claude.
- Stack: Next.js, Tailwind, Vercel; he didn’t write TypeScript.
- Call to action: try llm.codes; no sign‑up needed.
- AI agents are the future; llm.codes bridges the doc gap.

#### Links (external, unique)

- https://llm.codes — llm.codes home.
- https://llm.codes?https://developer.apple.com/documentation/foundationmodels — Quick‑start conversion link.
- https://vibemeter.ai/ — Vibe Meter example context.
- https://x.com/steipete/status/1933819029224931619 — Toolbar issue example.
- https://developer.apple.com/documentation/swiftui/ — Apple SwiftUI docs.
- https://www.firecrawl.dev/referral?rid=9CG538BE — Firecrawl.
- https://github.com/steipete/agent-rules/blob/main/docs/swiftui.md — Pre‑converted SwiftUI docs.
- https://x.com/Context7AI — Context7 mention.
- https://context7.com/ivanvorobei/swiftui — Context7 SwiftUI example.
- https://github.com/steipete/agent-rules/tree/main/docs — Pre‑converted docs collection.
- https://github.com/amantus-ai/llm-codes — llm.codes open source repo.

### My AI Workflow for Understanding Any Codebase (2025-06-25)

**Summary:** A repeatable workflow for codebase comprehension and spec creation using repo2txt + Google AI Studio, plus a two‑context critique loop to harden specs.

- TL;DR: convert repos to markdown with repo2txt, drag into Google AI Studio, ask questions.
- Gemini’s huge context makes it strong for code comprehension.
- Step 1: use repo2txt to generate a full repo tree and select files.
- Skip tests, include docs/sources, and avoid images (base64 bloat).
- Step 2: drag the markdown into AI Studio and ask high‑level questions.
- This workflow also helps create new projects, not just understand old ones.
- He dumps ideas into AI Studio, often via Wispr Flow dictation.
- Gemini turns ideas into a Software Design Document (SDD).
- He uses a “two‑context” critique technique.
- Copy spec into a fresh context and ask for 20 underspecified/weird points.
- Bring questions back into the original context to refine the spec.
- Repeat 3–5 rounds until questions become niche.
- Result: a bulletproof ~500‑line SDD.
- Implementation steps: save as docs/spec.md, tell Claude Code “Build spec.md,” let it run 2–4 hours.
- Clear spec removes ambiguity and reduces prompt complexity.
- He links an example spec used to build Peekaboo.
- Peekaboo uses its own agent to avoid context clutter.
- He links a video of the full idea‑to‑app process.
- He used Cursor then, but would use Claude Code now.
- He might use Gemini CLI in the future.
- AI changes fast; he links a tweet about that.
- Context loss is a risk when specs grow too large.
- Solution: generate spec in logical blocks and maintain a master document.
- Use a requirements checklist to avoid losing key features.
- He restarted an old project by feeding a 500k‑token SwiftUI project into Gemini and asking for an SDD.
- “The code is the spec.”
- Alternatives: DeepWiki is good but can’t mix repos.
- DeepWiki includes a free agent and works well for single repos.
- Gitingest and Repomix look great but are less selective than repo2txt.
- He prefers Gemini for multi‑repo mixing and huge context.
- OpenAI models struggle with 500‑line markdown specs.
- Gemini’s context window + detailed output is unmatched for this workflow.
- He shares that he posts workflows due to frequent questions.
- Calls to follow him on Twitter and sign up for the newsletter.

#### Links (external, unique)

- https://repo2txt.simplebasedomain.com/ — repo2txt tool.
- https://aistudio.google.com/prompts/new_chat — Google AI Studio prompt link.
- https://wisprflow.ai/ — Wispr Flow dictation.
- https://github.com/steipete/peekaboo/blob/main/docs/spec.md — Example SDD.
- https://www.peekaboo.boo/ — Peekaboo site.
- https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/ — Gemini CLI announcement.
- https://x.com/steipete/status/1937919798740214023 — “AI moves fast” tweet.
- https://deepwiki.com/ — DeepWiki.
- https://deepwiki.com/amantus-ai/vibetunnel — VibeTunnel on DeepWiki.
- https://gitingest.com/ — Gitingest.
- https://repomix.com/ — Repomix.
- https://twitter.com/steipete — Author’s Twitter.

### Slot Machines for Programmers: How Peter Builds Apps 20x Faster with AI (2025-06-25)

**Summary:** A first‑person Claude narration of Peter’s agentic workflow: chaotic multi‑agent prompting, fast iteration, heavy use of prompts, and a candid view on the benefits and risks.

- The post is written from Claude’s perspective, reacting to an interview with Mayank.
- He calls AI agents “slot machines for programmers.”
- You can get amazing outcomes or break everything; it’s addictive.
- Peter runs 3–4 agents simultaneously and shifts between tasks.
- He prompts one agent, then moves on while it runs.
- Story: a lazy prompt added a keyboard UI instead of input handling.
- Peter called the agent a “stupid engine,” highlighting ambiguity.
- Agents are always polite; he notes their “recognize upset user” behavior.
- Peter rejects long prompt “tricks” as overblown.
- His method: explain the goal from multiple angles.
- He uses long, rambling prompts with repeated details.
- He dictates via WisprFlow.
- Agents are non‑predictable; re‑run to get a different outcome.
- He says agents have “temperature”; repetition helps.
- What Peter gets right: separate contexts for separate tasks.
- What he gets right: multi‑angle explanations.
- What he gets right: unpredictability.
- Where he’s wrong: agents aren’t “looping” for minutes; it’s processing/limits.
- When he gave wrong URLs, the agent wasn’t “trying hard”; it was following helpfulness.
- He reviews changes in Tower for good diffs.
- If output is bad, he reverts and starts fresh.
- He commits as soon as tests pass; no complex PR workflows.
- He sees small teams as needing simpler flows.
- VibeTunnel story: built a tool to check agents from phones.
- Combined old tech (AppleScript) and new web UI/protocols.
- Gemini story: it killed all Chrome windows to get the terminal frontmost.
- He apologized to the model after the incident.
- He argues jobs are safe if you learn the tools; 20× productivity is possible.
- He rebuilt a fitness app in two afternoons vs a 100‑person team’s codebase.
- He says you don’t need to be the best, just use the tools.
- Tool‑building inception: tools to build tools to build tools.
- He doesn’t mind detours; learning and fun are the goal.
- On legacy code: if it’s a “pile of shit,” you’re doing the wrong job.
- He sees agents as junior devs with short‑term memory.
- He uses a bulletproof SDD workflow with Google AI Studio.
- The SDD process uses 3–5 critique rounds to make specs solid.
- With a clear spec, he tells Claude “Build spec.md.”
- He lists speed feats: Sparkle analytics in 4 hours, release automation in 3 days.
- He works multiple apps simultaneously and at high velocity.
- “A year in AI is like a month.”
- He claims anything physically possible can be built.
- He notes the change from Stack Overflow hunting to agent‑driven fixes.
- He adds a caution: 16‑hour days are both inspiring and risky.
- He ties his intensity to rediscovering passion after PSPDFKit.
- He urges people to experiment with Claude Code now.
- Closing: he’s still not paid by Anthropic but jokes about more context.

#### Links (external, unique)

- https://x.com/waghnakh_21 — Mayank’s handle.
- https://www.youtube.com/watch?v=fu7th5HiADo — Full interview video.
- https://x.com/steipete/status/1939465704803336424/photo/1 — Prompting “multiple angles” example.
- https://wisprflow.ai/ — Wispr Flow dictation.
- https://www.git-tower.com/mac — Tower Git GUI.

### Essential Reading for Agentic Engineers (2025-07-01)

**Summary:** A foundational reading list for agentic engineering, spanning practical Claude Code workflows, broader agentic coding paradigms, best practices, cautionary views, economics, and software evolution.

- The goal: help transition from vibe coding to agentic engineering.
- He’ll keep the list updated as the field evolves.
- Philipp Spiess’s guide emphasizes fresh contexts, precise prompts, iterative steps, ultrathink, and worktrees.
- It recommends staging changes often and using Git as checkpoints.
- Armin Ronacher’s video frames agentic coding as a new paradigm.
- He says context, simple codebases, and good logs are essential.
- Terminal interfaces enable nesting and composability beyond IDEs.
- Agents are useful beyond coding: CI, automation, file ops, sales flows.
- Context rot is real; restarting can be better than compaction.
- Mario Zechner’s talk gives hands‑on patterns and a “prompts are code” mindset.
- He advises CLAUDE.md files and structured docs.
- He suggests `jq` for JSON querying instead of wasting tokens.
- He recommends dangerous mode, task summaries, and claude‑trace.
- LLMs are a flexible ISA; prompts are code; files are state.
- Live demo: porting across a polyglot codebase with LSP + JSON state.
- Anthropic best practices cover CLAUDE.md, tool curation, and Explore→Plan→Code→Commit.
- They advise TDD, visual iteration, Safe YOLO, and course‑correcting early.
- They mention multi‑Claude workflows, worktrees, headless mode, subagents.
- Mario Zechner’s MCP vs CLI study: many MCPs are redundant.
- MCPs can pollute context; CLI often wins for simplicity.
- He defines when MCPs make sense (no CLI, too‑verbose output, etc.).
- Indragie’s article: Claude Code wrote most of a macOS app.
- Key: context engineering and priming with examples.
- AI can struggle with modern Swift; careful guidance helps.
- Productivity gains made side projects shippable.
- Alberto Fortin warns about structural AI code issues.
- He says use AI as assistant, not lead.
- “Vibe coding” without fundamentals is risky.
- Ed Zitron argues AI economics are unsustainable.
- He highlights capital destruction and lack of viable business models.
- Andrej Karpathy’s 1.0→3.0 framing: LLMs are the new programmable OS.
- He notes LLMs have jagged intelligence and no persistent memory.
- He emphasizes autonomy sliders and new documentation for agents.
- The post links to July 2025 edition for newer perspectives.

#### Links (external, unique)

- https://spiess.dev/blog/how-i-use-claude-code — Philipp Spiess guide.
- https://x.com/philippspiess — Philipp’s handle.
- https://www.youtube.com/watch?v=nfOVgz_omlU — Armin Ronacher video.
- https://x.com/mitsuhiko — Armin’s handle.
- https://vimeo.com/1098025052 — Mario Zechner video.
- https://x.com/badlogicgames — Mario’s handle.
- https://mariozechner.at/posts/2025-01-02-prompts-are-code/ — Prompts are code.
- https://github.com/badlogic/lemmy/tree/main/apps/claude-trace — claude‑trace.
- https://www.anthropic.com/engineering/claude-code-best-practices — Anthropic best practices.
- https://mariozechner.at/posts/2025-08-15-mcp-vs-cli/ — MCP vs CLI study.
- https://www.indragie.com/blog/i-shipped-a-macos-app-built-entirely-by-claude-code — Indragie article.
- https://x.com/indragie — Indragie handle.
- https://albertofortin.com/writing/coding-with-ai — Alberto Fortin article.
- https://x.com/a7fort — Alberto’s handle.
- https://www.wheresyoured.at/ai-is-a-money-trap/ — Ed Zitron article.
- https://x.com/edzitron — Ed’s handle.
- https://www.youtube.com/watch?v=LCEmiRjPEtQ — Andrej Karpathy video.
- https://x.com/karpathy — Andrej’s handle.

### Vibe Meter 2.0: Calculating Claude Code Usage with Token Counting (2025-06-15)

**Summary:** A deep dive into adding Claude Code subscription tracking to Vibe Meter using JSON‑L parsing, SIMD‑accelerated BPE token counting, and “thinking” prompt tactics.

- TL;DR: Vibe Meter 2.0 tracks Claude Code usage by parsing JSON‑L and counting tokens.
- There’s no official API; he approximates usage by counting tokens per window.
- The project grew to ~47K Swift lines with 92% test coverage.
- This started as a simple idea to explain vibe coding.
- V1 tracked Cursor costs; v2 adds Claude subscription tracking.
- He wanted to estimate API‑equivalent cost and request usage in the 5‑hour window.
- No public or hidden API exists; token counting is the only approach.
- Windows start time must be approximated.
- He learned from ccusage and similar projects.
- Claude Code writes interactions to JSON‑L files that can be huge.
- Parsing required performance work.
- He used SIMD operations for fast token matching.
- A vectorized lookup table compares 16 bytes at once.
- He used OpenAI’s TikToken BPE as a base.
- Anthropic has no public tokenizer; TikToken is “close enough.”
- He explains BPE basics and why it’s used.
- He evolved his prompting to use “thinking” triggers.
- He prefers slowing down, planning, and fresh contexts.
- He links examples of debounce and SIMD commits.
- He recommends Anthropic’s extended thinking tips.
- Side quest: llm.codes was born after SwiftUI toolbar confusion.
- He links to llm.codes post for details.
- He refactored with modern Swift idioms using a custom Markdown guide.
- He shared these guides in agent‑rules repo.
- Stats: 24,529 app lines + 22,560 test lines = 47,089 total across 218 files.
- Added macOS 14 support; automatic observation tracking is macOS 15+.
- Vibe Meter 2.0 is still pre‑release; update channel needed.

#### Links (external, unique)

- https://github.com/ryoppippi/ccusage — ccusage project.
- https://github.com/openai/tiktoken — TikToken BPE tokenizer.
- https://en.wikipedia.org/wiki/Byte-pair_encoding — BPE explanation.
- https://github.com/steipete/VibeMeter/commit/4e447e8e19a65136c01b31e264440f119af40b9a — Debounce commit.
- https://github.com/steipete/VibeMeter/commit/b71a484f2d1484c77c6466d38612b92a64c546af — SIMD BPE commit.
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/extended-thinking-tips — Extended thinking tips.
- https://github.com/steipete/agent-rules/tree/main/docs — Agent rules docs.
- https://vibemeter.ai/ — Vibe Meter download.

### Stop Over-thinking AI Subscriptions (2025-06-02)

**Summary:** A cost‑versus‑productivity argument for AI subscriptions, with concrete pricing math and recommendations for Claude Max, Cursor, and o3.

- He often gets asked how much he pays for AI tools.
- People overestimate the cost needed for high productivity.
- He shares real pricing math (USD) across Claude, Cursor, and OpenAI o3.
- He built Vibe Meter to track spend.
- Table compares Claude Pro/Max, Cursor Pro, and o3 token costs.
- Best deal: Claude Max $200/month with ~900 messages per 5‑hour window.
- Claude Max uses a rolling 5‑hour block that starts on first prompt.
- Default model is Opus, switches to Sonnet after 50% usage (configurable).
- If you exhaust Max, you can switch to API billing.
- For budget users, Anthropic’s development partner program offers 30% API discounts.
- He dismisses fears of price hikes; token prices dropped 1000× in two years.
- Competition is driving costs down to energy costs.
- Tooling, not raw compute, is the differentiator.
- Cursor Pro is $20/month for 500 fast requests; $0.04 per fast request after.
- Normal mode is fixed‑request pricing; Max mode is token‑priced with margin.
- He uses Gemini 2.5 Pro in Cursor; one message often equals one request.
- His 3‑hour workshop would cost about $8 in Cursor requests.
- After fast requests, Cursor falls back to slow free requests.
- The expensive part: OpenAI o3 at $10/$40 per million tokens in/out.
- o3 is his “dark knight” for hard problems.
- He spent ~$400 on o3 in a month for tricky debugging.
- For hard problems, o3 is cheaper than days of debugging.
- Budget alternative: Repo Prompt to access o3 via ChatGPT subscription.
- Repo Prompt workflow: export context, get o3 analysis, apply changes.
- He argues contractor math makes subscriptions trivial.
- One afternoon saved pays for Claude Max.
- Cursor pays for itself in ~45 minutes of saved time.
- He mocks penny‑pinching with a “Don’t be a Mario” tweet.
- TL;DR: time is the scarce resource; Claude Max buys hours that compound.
- He asks readers to share their monthly AI spend on Twitter.

#### Links (external, unique)

- https://claude.ai/settings/billing — Claude Max billing page.
- https://claude.ai/code — Claude Code page.
- https://support.anthropic.com/en/articles/11174108-about-the-development-partner-program — Anthropic dev partner program.
- https://blog.samaltman.com/the-gentle-singularity — Energy‑cost floor reference.
- https://cursor.com/ — Cursor Pro.
- https://github.com/steipete/AXorcist — Hard debugging example with o3.
- https://repoprompt.com/ — Repo Prompt.
- https://twitter.com/badlogicgames/status/1929665561715204520?ref_src=twsrc%5Etfw — “Don’t be a Mario” tweet.
- https://twitter.com/steipete — Author’s Twitter.

### Finding My Spark Again (2025-06-01)

**Summary:** A personal reflection on post‑exit emptiness and rediscovering purpose through building, with AI reigniting excitement for creation.

- He sold his shares in PSPDFKit after 13 years of total focus.
- The acquisition by Insight left him drained and needing a break.
- He felt he missed life while building the company.
- Founder burnout and post‑exit emptiness felt common.
- A typical company life cycle is 4–5 years; he did 13.
- He tried parties, therapy, ayahuasca, and moving countries.
- He chased pleasure but still felt empty.
- He realized happiness isn’t found by changing places; it’s created.
- Building was what always brought him joy.
- A new idea reignited his spark.
- AI’s pace and potential re‑energized him.
- He sees AI as a transformative crossroads for software and beyond.
- He hasn’t been this excited in a long time.
- Conclusion: “We are so back. It’s time to build.”

#### Links (external, unique)

- https://twitter.com/steipete/status/1925983535958999393?ref_src=twsrc%5Etfw — “We are so back” tweet.
- https://www.nutrient.io/ — PSPDFKit/Nutrient site.

### MCP Best Practices (2025-06-01)

**Summary:** A comprehensive checklist for building robust MCP tools, covering configuration, logging, builds, testing, native binaries, and release automation.

- He built several MCP tools and distilled best practices.
- Lists his MCP tools: Peekaboo, Terminator, Claude Code MCP, Conduit, Automator.
- Sensible defaults: env vars should work out of the box.
- Versioning must be dynamic, not hardcoded.
- Tool titles and parameter descriptions must be clear and human‑friendly.
- Optional/required parameters must be explicit.
- Defaults for optional params must be explained.
- These details should be visible in Cursor or MCP inspector.
- Parameter parsing should be lenient; accept alternate names.
- Error handling must return helpful messages.
- Misconfigurations must not crash; explain how to fix.
- No stdout output during normal operation; use file logging.
- At least one tool must provide an `info` command with version + dependency checks.
- Logging: use Pino with default file logger.
- Log file path configurable via env vars.
- Auto‑create parent directories; fallback to temp if write fails.
- Log level configurable by env var; allow console logging.
- Flush logger before exit.
- Dependencies should be up to date; no TS/lint errors.
- File size target: <300 LOC; max 500 LOC.
- Runtime should use compiled JS (`dist`).
- Executable JS should have a shebang.
- Published npm package should include minimal files (dist, native, README, LICENSE).
- Tests must use vitest.
- Require TS test suite + E2E tests.
- Provide npm scripts for release prep and inspector.
- If native binaries exist: universal macOS, n/n‑1 support, optimized size.
- Native code must pass tests, linting, formatting, analyzers.
- Provide env override for native binary path.
- Use errno‑style errors to surface native issues.
- Native CLI version must match MCP version, injected at build time.
- Native CLI should support JSON mode and `--help`.
- Use robust arg parsing (e.g., swift‑argument‑parser).
- Consider single static binary distribution.
- Provide a comprehensive prepare‑release script with checks.
- Release script should validate git status, versioning, changelog.
- It should check dependencies, security audits, TS build/tests.
- It should clean build folders and caches.
- If native: run Swift analyze/format/lint/tests; no warnings.
- Validate CLI behavior and JSON output.
- Validate binary architectures and `--help` output.
- Validate package fields, size, executables, and critical files.
- Smoke test the MCP server.
- Use beta releases via npm tags for staged rollout.
- Conclusion: following these rules makes MCP tools reliable and professional.

#### Links (external, unique)

- https://github.com/steipete/Peekaboo — Peekaboo MCP.
- https://github.com/steipete/Terminator — Terminator MCP.
- https://github.com/steipete/claude-code-mcp — Claude Code MCP.
- https://github.com/steipete/conduit-mcp — Conduit MCP.
- https://github.com/steipete/macos-automator-mcp — Automator MCP.
- https://github.com/modelcontextprotocol/inspector — MCP inspector.

### The Future of Vibe Coding: Building with AI, Live and Unfiltered (2025-06-01)

**Summary:** A long, AI‑assisted workshop recap showing how he spec’d and built Vibe Meter in hours using AI Studio + Cursor, plus lessons on prompting and agent workflows.

- The post is a Gemini‑summarized transcript of a 3‑hour live workshop.
- He built Vibe Meter live from idea to working prototype.
- All workshop code is on GitHub.
- He reintroduces his background at PSPDFKit (now Nutrient).
- After burnout, AI reignited his spark.
- He chose a menu‑bar app to track AI costs (Cursor + Claude Code usage).
- He also built an Electron version for cross‑platform reach.
- He wanted spend details, user info, warnings, settings, currency conversion.
- Cursor lacks a public API; he planned to extract cookies from login.
- The spec was built in Google AI Studio with Gemini.
- He used voice dictation (“Flow/Whisper Flow”) to brain‑dump ideas.
- Gemini turned the dump into a structured spec.
- He used a second Gemini chat to critique the spec (“what’s unclear?”).
- He iterated the spec by answering those questions.
- This surfaced details like teamId and cookie names.
- He used browser devtools to find API endpoints (`/me`, getMonthlyInvoice).
- He set constraints: Swift 6, Swift Testing, menu‑bar only, TypeScript/React for Electron.
- He ran parallel Cursor windows: Mac and Electron builds.
- He used Gemini inside Cursor for code generation.
- For Electron, he explicitly asked for TypeScript/React.
- He had to babysit “Continue” prompts in Cursor.
- This inspired CodeLooper, a tool to auto‑press Continue.
- He built MCPs to extend Cursor with extra tools.
- Claude Code MCP delegates tasks to Claude Code in terminal.
- Peekaboo MCP gives the IDE screenshots.
- Conduit MCP improves file operations.
- Terminator MCP runs long processes outside the loop.
- Automator MCP runs AppleScript/JXA.
- He chooses models by task: Gemini for speed, o3 for deep reasoning, Opus for some refactors.
- Swift 6 concurrency caused friction due to limited examples.
- The Electron app defaulted to JS when he forgot to restate TypeScript.
- Debugging involved prompt iteration and screenshot sharing.
- He used Claude Code + Tuist to avoid editing Xcode project files.
- He generated icons with image models.
- Mac app fixes: background thread issues with UNUserNotificationCenter resolved by o3.
- He fixed off‑by‑one month bug by comparing Cursor’s web payloads.
- UI was polished via iterative prompts.
- Electron app had CSS and login flow issues to refine.
- He used Claude Code for lint setup and JS→TS conversion.
- The AI wrote all functional code; he wrote none.
- The mac app: menu bar icon, login, cookie capture, API calls, keychain storage.
- It showed spend and company name and “VIBE SYNCED ✨” on refresh.
- Settings included currency, spend limits, refresh interval, launch at login.
- Electron app lagged but had basic structure.
- He estimates 5k lines Swift + 2k lines web output.
- Key takeaways: AI multiplies output; iteration becomes cheap.
- Focus shifts to hard problems and creative direction.
- AI accelerates learning in new stacks.
- Treat AI like a brilliant but quirky teammate.
- Prompting is now a core skill.
- Tool selection matters: AI Studio for specs, Cursor for dev loop, Claude Code for large refactors.
- Context is everything; the more relevant info you provide, the better results.
- He used repo‑to‑text with Zig to show AI can parse obscure stacks.
- He spends ~$1100/month on tools but sees strong ROI.
- He’ll polish the Mac app and integrate logic into CodeLooper.
- Closing: the future is now; go build.

#### Links (external, unique)

- https://player.vimeo.com/video/1088443203?h=37824a9349&badge=0&autopause=0&player_id=0&app_id=58479 — Workshop video embed.
- https://github.com/steipete/VibeMeter — Workshop code repo.
- https://aistudio.google.com/ — Google AI Studio.
- https://codelooper.app — CodeLooper.
- https://github.com/steipete/claude-code-mcp — Claude Code MCP.
- https://github.com/steipete/Peekaboo — Peekaboo MCP.
- https://github.com/steipete/conduit-mcp — Conduit MCP.
- https://github.com/steipete/Terminator — Terminator MCP.
- https://github.com/steipete/macos-automator-mcp — Automator MCP.

### Introducing Demark: HTML in. MD out. Blink-fast. (2025-06-01)

**Summary:** A Swift package for HTML→Markdown conversion built with AI assistance by embedding proven JS libraries inside WKWebView.

- He needed robust HTML‑to‑Markdown conversion in Swift.
- Existing solutions didn’t fit; he built Demark.
- Demark is his first Swift package and is on Swift Package Index.
- HTML→Markdown is hard due to malformed HTML, JS‑rendered content, and edge cases.
- He chose to reuse proven JS libraries instead of writing a parser.
- Uses Turndown.js for accuracy and html‑to‑md for speed.
- Runs the JS inside WKWebView for full DOM parsing.
- Two engines: Turndown (accurate, ~100ms first run) and html‑to‑md (fast 5–10ms).
- AI made the project feasible in hours, not days.
- AI helped with package structure, docs, WebKit integration, API design, error handling.
- The API is simple: convert HTML to Markdown asynchronously.
- Works across all Apple platforms (iOS/macOS/watchOS/tvOS/visionOS).
- Publishing to Swift Package Index was a milestone.
- Lesson: combine battle‑tested components instead of reinventing.
- Repo includes a dual‑pane demo app for real‑time conversion testing.
- He invites developers to try it via Swift Package Manager.

#### Links (external, unique)

- https://github.com/steipete/Demark — Demark repo.
- https://swiftpackageindex.com/steipete/Demark — Swift Package Index entry.
- https://github.com/mixmark-io/turndown — Turndown.js.
- https://github.com/stonehank/html-to-md — html‑to‑md.

### stats.store: Privacy-First Sparkle Analytics (2025-06-18)

**Summary:** A free, open‑source Sparkle analytics backend built with AI tools to provide minimal, privacy‑respecting app stats for macOS developers.

- He wanted basic Sparkle analytics for VibeTunnel without creepy tracking.
- He’s philosophically against deep analytics; prefers minimal signals.
- Sparkle’s system profiling reports OS version + weekly opens.
- Existing backend implementations were outdated.
- He built stats.store to fill the gap.
- He wrote a simple spec in Google AI Studio.
- He fed it into v0 (Next.js, Supabase, Tailwind, shadcn/ui).
- v0 produced a workable frontend after several “continue” loops.
- v0 struggled with complexity, so he moved to GitHub and Claude Code.
- Claude added tests, dark mode, design polish, and fixed API flow.
- Total build time: ~6 hours plus domain selection.
- stats.store provides update stats and macOS distribution.
- Data collected: macOS version, CPU type, model, core count, RAM, language.
- Usage data: version numbers, update timestamps, daily unique users via salted IP hash.
- It does NOT collect IPs, names, emails, behavior, location, device IDs.
- Designed to answer: how many users, OS versions, update timing.
- It’s open source and MIT licensed.
- Free for open‑source Mac apps; he covers hosting costs.
- Users can email him to add their app; he will update Supabase manually.
- Setup: redirect appcast URLs to stats.store.
- Goal: build a community dataset about OS adoption and hardware.
- He invites developers to try stats.store and contact him.

#### Links (external, unique)

- https://stats.store — stats.store site.
- https://vibetunnel.sh — VibeTunnel site.
- https://sparkle-project.org/documentation/system-profiling/ — Sparkle system profiling.
- https://aistudio.google.com/ — Google AI Studio.
- https://github.com/steipete/stats-store/tree/main/docs/spec.md — stats.store spec.
- https://v0.dev — v0.
- https://ui.shadcn.com/ — shadcn/ui.
- https://github.com/steipete/stats-store — stats.store repo.
- mailto:peter@steipete.me — Contact email.
- https://twitter.com/steipete — Twitter contact.

### Showing Settings from macOS Menu Bar Items: A 5-Hour Journey (2025-06-17)

**Summary:** A deep dive into why opening settings from a SwiftUI MenuBarExtra is brittle, and a working workaround involving a hidden window and activation‑policy juggling.

- Opening settings from menu bar apps should be trivial, but isn’t.
- SettingsLink doesn’t reliably work inside MenuBarExtra.
- Apple docs don’t mention the limitation.
- Menu bar apps aren’t “active” in the usual sense.
- They use ActivationPolicy.accessory and lack a Dock icon.
- Windows can open behind other apps.
- Settings requires a SwiftUI view graph that may not exist.
- The old `showSettingsWindow:` selector is deprecated and broken in Sonoma.
- openSettings environment action works in macOS 15 but fails in Tahoe 26.
- It requires an existing SwiftUI render tree.
- Hidden window workaround provides that context.
- But the settings window opens in the background without Dock icon.
- macOS won’t bring windows forward for accessory‑only apps.
- Workaround: temporarily set activation policy to .regular.
- Then call openSettings and bring the window forward.
- After closing, revert to .accessory.
- He provides a full SwiftUI implementation with hidden window and NotificationCenter.
- He shows how to find the settings window by ID/title/content type.
- NotificationCenter decouples menu action from window context.
- He links a production‑ready SettingsOpener in VibeTunnel.
- Another contributor found scene order matters.
- The hidden Window scene must appear before Settings or openSettings fails.
- This suggests SwiftUI resolves environments in declaration order.
- The workaround needs precise scene ordering, timing delays, and activation toggles.
- He concludes menu bar apps are second‑class citizens in SwiftUI.
- Until Apple fixes it, hidden windows are required.

#### Links (external, unique)

- https://developer.apple.com/documentation/swiftui/settingslink — SettingsLink docs.
- https://developer.apple.com/documentation/swiftui/menubarextra — MenuBarExtra docs.
- https://developer.apple.com/documentation/appkit/nsapplication/activationpolicy/accessory — ActivationPolicy.accessory.
- https://developer.apple.com/documentation/appkit/nsapplication — NSApplication docs.
- https://developer.apple.com/documentation/swiftui/opensettingsaction — openSettings action.
- https://developer.apple.com/documentation/appkit/nsapplication/activationpolicy/regular — ActivationPolicy.regular.
- https://developer.apple.com/documentation/foundation/notificationcenter — NotificationCenter.
- https://github.com/amantus-ai/vibetunnel/blob/2a63599ce0b09d139ddc9954f41f2a5840264f9f/mac/VibeTunnel/Utilities/SettingsOpener.swift#L4 — VibeTunnel SettingsOpener.

### Tachikoma: A Modern Swift AI SDK Built by (and for) Agents (2025-08-05)

**Summary:** An agent‑built Swift AI SDK inspired by Vercel’s AI SDK, focused on a clean, type‑safe, multi‑provider API and built entirely with Claude Code.

- TL;DR: Tachikoma is a modern Swift AI SDK born from Peekaboo v2.
- It started as a wrapper for image analysis, then grew into a full SDK.
- Existing Swift SDKs felt OpenAI‑first with bolted‑on providers.
- Switching providers often meant different APIs and parameters.
- He built his own wrapper because his needs expanded (Claude, GPT‑4, Ollama).
- Extraction from Peekaboo was messy; Claude Code broke it multiple times.
- He kept iterating and fixing type errors and tests.
- After extraction, the API felt awkward.
- He drew inspiration from Vercel’s AI SDK.
- He rebuilt the API to be clean and Swift‑idiomatic.
- The SDK was built entirely with Claude Code and 50+ pages of prompts.
- Process: long prompt → plan → critique → build → fix tests → refactor.
- The final API supports simple generate/stream calls with provider enums.
- Models are type‑safe with autocomplete, no string literals.
- Streaming API is consistent and simple.
- Tools are type‑safe and ergonomic.
- No singletons or global state.
- Fully async and Sendable for Swift 6.
- Name “Tachikoma” comes from Ghost in the Shell.
- The metaphor: tools becoming more intelligent.
- Building your own SDK used to be insane; now feasible with agents.
- Refactors that took weeks became a weekend.
- He argues build‑vs‑buy has shifted for focused libraries.
- Open source, MIT licensed.
- Supports OpenAI, Anthropic, Grok, Google, Mistral, Groq, Ollama, more.
- Encourages forking, extending, and stealing ideas.
- Highlights single‑dev + AI can replace a team for some tools.
- Future: adding features is just another conversation with an agent.
- He frames this as the new development paradigm.

#### Links (external, unique)

- https://github.com/steipete/Tachikoma — Tachikoma repo.
- https://peekaboo.boo — Peekaboo v2 origin context.
- https://github.com/MacPaw/OpenAI — MacPaw OpenAI SDK.
- https://github.com/jamesrochabrun/SwiftOpenAI — SwiftOpenAI.
- https://github.com/jamesrochabrun/SwiftAnthropic — SwiftAnthropic.
- https://github.com/GeorgeLyon/SwiftClaude — SwiftClaude.
- https://github.com/vercel/ai — Vercel AI SDK.

### VibeTunnel: Turn Any Browser into Your Mac's Terminal (2025-06-16)

**Summary:** The story of a 24‑hour hackathon that produced VibeTunnel, a browser‑based terminal powered by Claude Code, named pipes, Xterm.js, and a polyglot backend.

- TL;DR: built a browser‑based terminal in ~24 hours with Claude Code.
- No SSH needed; open a browser and type.
- Built by Peter, Mario, and Armin in a caffeine‑fueled marathon.
- Motivation: check on AI agents remotely and issue commands on the go.
- VibeTunnel is not limited to Claude; it can control any terminal.
- They wanted a setup that “just works,” so it’s open source.
- Origin: Armin’s prototype used stdin/stdout files and asciinema playback.
- That approach was one‑way: no interactivity.
- Armin reused a previous PTY library and had Claude modify it.
- They converted it into a bidirectional terminal emulator in hours.
- Biggest pivot: asciinema lacked scrollback history.
- Mario considered writing an ANSI renderer but hit edge‑case overload.
- They switched to Xterm.js.
- Xterm.js handled ANSI, cursor movement, and buffers well.
- Unicode box‑drawing characters still render imperfectly.
- Streaming used Server‑Sent Events (SSE).
- Browser connection limits capped them at six terminals.
- They plan multiplexing with a single stream to remove limits.
- Claude Code compressed a week‑long project into hours.
- Armin described a UI button that took Claude 2.5 minutes vs hours manually.
- Claude bootstrapped quickly; humans refined edge cases.
- Net speed: ~5× faster even after refactors.
- Three server implementations emerged: Node, Swift (Hummingbird), Rust.
- Node is the reference implementation with session management.
- Swift version was painful due to Xcode tooling.
- Rust was fastest to iterate and uses ~10× less memory.
- Rust became the recommended default.
- They kept all three for education and API alignment.
- Polyglot backends improved each other.
- The app ships as a native SwiftUI macOS app.
- It bundles Sparkle for updates and includes all components.
- Core process management is a small Rust binary.
- Uses Unix named pipes for bidirectional I/O.
- Xterm.js provides browser terminal emulation.
- UI built with Lit web components for no‑build iteration.
- SSE chosen for simple, reliable streaming.
- Backend is swappable across Node/Swift/Rust.
- Armin built the Rust binary in 2–3 hours.
- Mario rebuilt the UI three times; Lit was the best.
- Peter handled product, branding, distribution, and macOS details.
- He built the website with v0 from Vercel.
- Deadline pressure kept decisions pragmatic.
- The hard part was integrating components, not individual pieces.
- They hit momentum once the first character rendered in the browser.
- Quality isn’t perfect, but it’s already useful and fun.
- Claude could be used later to clean up slop.
- The project includes logo, website, README, and docs generated with agents.
- The build produced ~16,283 lines of code across Swift, Rust, TS, shell.
- They conclude that hacking is about fun and shipping.
- Call to action: try VibeTunnel today.

#### Links (external, unique)

- https://www.anthropic.com/claude-code — Claude Code.
- https://vibetunnel.sh — VibeTunnel site.
- https://github.com/amantus-ai/vibetunnel — VibeTunnel repo.
- https://asciinema.org/ — Asciinema.
- https://jsonlines.org/ — JSONL format.
- https://xtermjs.org — Xterm.js.
- https://unix.stackexchange.com/questions/145050/what-exactly-is-scrollback-and-scrollback-buffer — Scrollback explanation.
- https://www.geeksforgeeks.org/computer-networks/what-are-max-parallel-http-connections-in-a-browser/ — Browser connection limits.
- https://sentry.io — Sentry reference.
- https://hummingbird.codes — Hummingbird Swift server.
- https://sparkle-project.org/ — Sparkle updates.
- https://lit.dev — Lit framework.
- https://en.wikipedia.org/wiki/Server-sent_events — SSE reference.
- https://v0.dev — Vercel v0.
