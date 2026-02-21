# Week 4 — Building Your LEARNINGS.md

## Focus

Last week the cohort ran experiments to find out what context actually
changes AI output. This week they capture what they learned — in a file
an AI agent can read at the start of every session.

`LEARNINGS.md` is a personal knowledge base that lives in a participant's
local repo. It's not documentation for humans — it's context for agents.
Every prompt pattern that worked, every mistake AI keeps making, every
domain constraint that matters — it goes here. This is [outcome engineering](https://o16g.com/)
in practice: you can't give agents useful context if you haven't encoded
your own knowledge somewhere they can reach it. This file is that encoding.
It compounds over time. It makes every future session smarter than the last.

The reason we're starting with a local file you paste manually into sessions
— rather than checking something into the repo — is to avoid disrupting team
workflows without approval. Your `LEARNINGS.md` stays in `.gitignore` and
stays yours. That said, if participants have approval to check context into a
shared repo, the agent-native equivalents are worth knowing about:

| Tool                      | File                                    |
| ------------------------- | --------------------------------------- |
| GitHub Copilot            | `.github/copilot-instructions.md`       |
| Cursor                    | `.cursor/rules/*.mdc` or `.cursorrules` |
| Claude Code               | `CLAUDE.md`                             |
| Any agent (open standard) | `AGENTS.md`                             |

These files are read automatically by their respective agents on every
session — no manual pasting required. But they affect everyone working in
that repo, which is why team buy-in matters before checking them in.
Start local. Graduate to shared when the team is ready.

Hereafter, I'm going to refer to all the above files as the `LEARNINGS.md` files.

## Contents

- [Learning Objectives](#learning-objectives)
- [Participant Time Commitment](#participant-time-commitment)
- [Supporting Materials](#supporting-materials)
- [Program Lead: Weekly To-Do List](#program-lead-weekly-to-do-list)
- [Week 3 Success Metrics](#week-3-success-metrics)
- [Monday Slack Post](#monday-slack-post)
- [Slack Reminders](#slack-reminders)
- [DM Scripts](#dm-scripts)
- [Welcome Video Script](#welcome-video-script-10-min-max)

## Learning Objectives

By the end of Week 4 participants will:

- Understand what `LEARNINGS.md` is, why it exists, and how agents use it
- Have created their own file with at least 3 entries drawn from Week 3
  experiments and ongoing work
- Have tested it in at least one real AI session and observed the difference

## Participant Time Commitment

| Activity                         | Time           |
| -------------------------------- | -------------- |
| Instruction video                | 10 min         |
| Create and populate LEARNINGS.md | ~30–45 min     |
| Test in an AI session            | ~15 min        |
| Partner sync                     | 15–30 min      |
| Share one entry in Slack         | 5 min          |
| **Total**                        | **~75–90 min** |

## Supporting Materials

- [ ] [LEARNINGS.md Template](../templates/learnings.md)
- [ ] Instruction video — _link TBD_

### Optional Reading

**Outcome Engineering — o16g**

- **Principle to focus on:** _"Context before agents — never dispatch
  an agent without context; map the territory before building"_
- **Why this week:** `LEARNINGS.md` is how participants make that
  principle persistent — instead of re-mapping the territory every
  session, they encode it once and let agents read it
- **Access:** [o16g.com](https://o16g.com)

## Program Lead: Weekly To-Do List

- [ ] Pull Week 3 success metrics (see below)
- [ ] Compile Week 3 context experiment findings — note which types of
      context made the biggest difference across the cohort; share in
      `#ai-pilot-cohort`
- [ ] Post Monday Slack message with instruction video link
- [ ] Send Tuesday and Thursday Slack reminders
- [ ] DM anyone not visible in `#ai-pilot-cohort` by Thursday EOD
- [ ] Friday: Note which LEARNINGS.md entries the cohort shared —
      look for patterns to call out in the Week 5 video intro

### Week 3 Cohort Landscape — compile prompt for Week 5 video intro

- **Context experiment results** — what types of context mattered most
  across the cohort (files, constraints, examples, error messages, etc.)
- **Time comparison patterns** — did rich context save time overall,
  or was it task-dependent?
- **Surprise findings** — what context _didn't_ help that participants
  expected would
- **Key quotes** — one where rich context clearly changed the output,
  one where it didn't

## Week 3 Success Metrics

Track for leadership reporting:

- Context engineering exercises completed and shared
- Experiments where rich context produced a meaningfully better output
- Partner check-in activity
- Participation in `#ai-pilot-cohort` (posts, replies, reactions)

## Monday Slack Post

```
Week 4: Build your LEARNINGS.md.

Last week you ran experiments on what context actually changes AI output.
This week you capture what you found — in a file agents can read.

📺 Watch the instruction video → [link]

This week:
  ✅ Create your LEARNINGS.md file using the template
  ✅ Add at least 3 entries — start with your Week 3 findings
  ✅ Test it: start an AI session with "read my LEARNINGS.md first"
  ✅ Share 1 entry in #ai-pilot-cohort by Friday
  🏷️ Keep using the Pilot AI Training Program label on PRs

📋 Template → [link]

Questions? Drop them here. 👇
```

## Slack Reminders

#### Tuesday

```
Have you started your LEARNINGS.md yet? Quick check:

  📺 Watched the video?
  ✍🏼 Created the file?
  📝 Added your first entry from Week 3?

Use the above emojis to show me what you've done!

Stuck on what to write? Start with your biggest finding from last
week's context experiment. That's your first entry.
```

#### Thursday

```
Reminder: share 1 entry from your LEARNINGS.md by tomorrow. 👇
```

## DM Scripts

### Not visible in channel

```
Hey [Name]! Have you started your LEARNINGS.md yet?

If you're stuck:
-  "Don't know what to write" → pull from your Week 3 exercise, that's
  your first entry
-  "Feels awkward" → start with just 1 entry, add more as you go
-  "Not sure the format matters" → use the template, it makes it easier

Share 1 entry in #ai-pilot-cohort by Friday. Need help? Let me know.
```

## Welcome Video Script (10 min max)

> _The video script uses "you" to address participants directly — that's
> intentional. Write and record it as if you're speaking to them, not
> about them._

### 0:00–1:30 — Welcome + Week 3 Recap

- Share the top 3 context findings from cohort experiments
- Call out the common theme: _[e.g., "Showing existing code patterns
  mattered more than describing them"]_
- Transition: _"Now let's make sure you don't lose what you just learned"_

### 1:30–4:00 — Introducing LEARNINGS.md

- Screen share an example file
- This is a private knowledge base — it lives in your local repo,
  add it to `.gitignore`
- It's not documentation for humans; it's context for agents
- Reference [o16g](https://o16g.com): the principle is "context before
  agents" — this file is how you make that persistent across every
  future session instead of rebuilding it from scratch each time
- Add to it whenever you discover:
  - Prompt patterns that work or consistently fail
  - Context tricks specific to your codebase or domain
  - Common mistakes AI makes in your area of the code
  - Tool-specific tips worth remembering

### 4:00–6:00 — How to Use It

- Demo: starting a Claude or Copilot Chat session
- First message: _"Please read this file and use it for our session:
  [paste LEARNINGS.md contents]"_
- Show how responses shift when the agent has your context
- This compounds — every entry makes future sessions a little more useful

### 6:00–8:00 — Tasks This Week

- Create your `LEARNINGS.md` using the template
- Add at least 3 entries — pull directly from your Week 3 exercise
- Test it in at least one real AI session
- Share one interesting entry in `#ai-pilot-cohort` by Friday
- Check in with your accountability partner

### 8:00–10:00 — Why This Matters

- _"You're teaching AI to work your way — not generic best practices"_
- _"This file grows with you. Start it now and it's yours for the rest
  of the program — and beyond"_
- Week 5 preview: Month 2 begins — reading unfamiliar code with AI
- Questions? `#ai-pilot-cohort`

### Video best practices

- Use a real (sanitized) example of a LEARNINGS.md entry when demoing —
  generic placeholders are less convincing than something real.
- Keep the demo tight; the file itself is simple, the value is in the habit.
- Add captions for async viewing.
