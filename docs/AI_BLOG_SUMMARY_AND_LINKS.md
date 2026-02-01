# AI Blog Summary and Links

## Summary (in progress)

This summary will be finalized after all AI-related posts are processed. For now, it will be refined incrementally as each post is added.

## Detailed Points (by post)

### Shipping at Inference-Speed (2025-12-28)

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

## Links (external, unique)

- https://x.com/thsottiaux/status/2004789121492156583 — Tweet referenced as evidence of heavy token usage. (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete/status/1997380251081490717 — Tweet about needing to write code to feel architecture, which the author disputes. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/steipete/ — “Building like a factory” reference to the author’s GitHub. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/steipete/clawdis/tree/main/apps/ios — Example that he doesn’t use Xcode project files. (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete/status/1997412175615246603 — Tweet about starting a conversation with the model instead of plan mode. (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete/status/2001228002953158928 — Tweet referenced as a commonly misunderstood plan‑mode statement. (Mentioned in: Shipping at Inference-Speed)
- https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/ — Blog post used to argue plan mode isn’t magic. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/steipete/oracle — Repo for the “oracle” CLI tool he built for GPT‑5 Pro. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/steipete/agent-scripts/blob/main/AGENTS.MD — Global instructions file that documents the oracle workflow. (Mentioned in: Shipping at Inference-Speed)
- https://vibetunnel.sh/ — VibeTunnel project site referenced in a model capability example. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/amantus-ai/vibetunnel/compare/6a1693b482fa4ef0ac021700a9ec05489a3a108f...a81b29ee3de6a2c85fd9fa41423d968dcc000515 — Comparison link showing the Zig conversion of VibeTunnel’s forwarding system. (Mentioned in: Shipping at Inference-Speed)
- https://clawdis.ai/ — Clawdis project site (AI assistant with broad device access). (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete/status/2005213014778409280/photo/1 — Tweet with a photo showing “all my computers.” (Mentioned in: Shipping at Inference-Speed)
- https://imsg.to/ — Service for iMessage automation used by Clawdis. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/steipete/gogcli — CLI for email access used by Clawdis. (Mentioned in: Shipping at Inference-Speed)
- https://www.openhue.io/cli/openhue-cli — Home automation CLI referenced as part of Clawdis’s integrations. (Mentioned in: Shipping at Inference-Speed)
- https://camsnap.ai/ — Camera integration referenced for Clawdis. (Mentioned in: Shipping at Inference-Speed)
- https://sonoscli.sh/ — Music control CLI referenced for Clawdis. (Mentioned in: Shipping at Inference-Speed)
- https://eightctl.sh/ — Bed temperature control CLI referenced for Clawdis. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/steipete/sag — Repo for Clawdis’s voice/assistant component. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/steipete/bird — CLI for tweeting used by Clawdis. (Mentioned in: Shipping at Inference-Speed)
- https://clawd.bot — Clawdis bot presence. (Mentioned in: Shipping at Inference-Speed)
- https://www.peekaboo.boo/ — Peekaboo site referenced for screen vision/control. (Mentioned in: Shipping at Inference-Speed)
- https://soul.md/ — Link used to describe Opus’s “special” quality. (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete/status/2005083410482733427/photo/1 — Tweet showing multiple projects running in parallel. (Mentioned in: Shipping at Inference-Speed)
- https://ordercli.sh/ — Example CLI tool for checking food delivery, used to illustrate “boring” software. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/steipete/agent-scripts/blob/main/scripts/docs-list.ts — Script referenced for forcing the model to read docs. (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete/status/1974108054984798729 — Tweet showing an internal thinking leak from codex. (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete/status/2005243588414931368 — Tweet about codex’s wording/voice. (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete/status/2005320848543298009 — Tweet about the YouTube‑summary extension idea. (Mentioned in: Shipping at Inference-Speed)
- https://github.com/steipete/summarize/releases/latest — Release link for the summarize CLI. (Mentioned in: Shipping at Inference-Speed)
- https://codexbar.app/ — Project link used in the closing “too much fun” note. (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete/status/2005393881395835045 — Tweet linked as another “building things” reference. (Mentioned in: Shipping at Inference-Speed)
- https://x.com/steipete — Twitter profile link in the closing call to follow. (Mentioned in: Shipping at Inference-Speed)
