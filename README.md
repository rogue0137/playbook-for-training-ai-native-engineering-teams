[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

# AI Engineering Pilot Program

Most engineers aren't going from "no AI" to "full autonomy" overnight. This 12-week async program is for engineers who want to work with AI and agents in a structured, intentional way — not just use Copilot/Cursor/Claude/w.e. more, but actually design and manage agent workflows that ship better outcomes.

By week 12, the goal isn't that you used AI more. It's that you remained the engineer who decided when, how, and whether to trust it.

It's grounded in the principles of [o16g (Outcome Engineering)](https://o16g.com/) — a framework for moving beyond software engineering as code production, toward something more capable, faster, and trustworthy than either vibe coding or hand coding.

The mental model we'll keep coming back to:

- **Humans** set the intent, define the constraints, and own the risk
- **Agents** explore the solution space, generate code, and surface options
- **The only real measure** is the rate of meaningful, positive change we're actually delivering

This isn't about AI hype. It's about being deliberate.

## Program Structure

This is designed to fit into a real engineering schedule — no mandatory meetings, no synchronous overhead.

- **Duration:** 12 weeks
- **Cohort:** ~10 engineers, across levels and locations _(scale up if you have the bandwidth to support it)_
- **Format:** Async-first

Each week includes:

- A short video (5–12 min) to anchor the concept
- Concrete exercises you can apply directly to your work
- A lightweight check-in with an accountability partner
- Slack sharing and reflection with the cohort

For the most part, the goal is written artifacts and small experiments over meetings.

> **Optional:** Some cohorts add a recurring **AI office hours** slot — 30 min, optional, no agenda. Engineers drop in to share what's working, what isn't, and what they're figuring out. It's not required, but if your cohort is hungry for it, it's worth the time.

## Themes by Month

### Month 1 – Foundations & Discipline

The first month is about slowing down before speeding up — understanding what your tools are actually doing and building habits that keep you in control.

- **Week 1: Setup & Baseline** — Take stock of how you're currently using AI and what's actually in your stack
- **Week 2: No Vibe Coding** — Put real guardrails in place: PR size, descriptions, how to review AI-assisted PRs from others, and linting rules that catch undesired patterns before they enter the codebase
- **Week 3: Context Engineering** — Better inputs produce better outputs; this week is about designing those inputs deliberately
- **Week 4: LEARNINGS.md** — Build a persistent "brain" your AI can actually use (written by you, read by the agent), so context doesn't die between sessions

### Month 2 – Agents Across the SDLC

Month 2 is about expanding where AI shows up in your workflow — not just writing code, but reading it, designing it, and validating it.

- **Week 5: Reading Code with AI** — Use AI for code archaeology in unfamiliar repos; get up to speed faster without losing critical thinking
- **Week 6: Agents in Design** — Plan before you code; treat AI as a design partner that helps you stress-test decisions early
- **Week 7: AI-Generated Tests** — Let agents propose the test suite; you stay accountable for quality and coverage
- **Week 8: Pair Programming with AI** — Humans and agents working together as a team, not a human typing and an AI autocompleting

### Month 3 – Orchestration, Risk, and Reflection

The final month zooms out — from using individual tools to orchestrating workflows, reasoning about risk, and figuring out what this all means for your team and org.

- **Week 9: Voice Coding** — Explore conversational workflows and what changes (and what doesn't) when you stop typing
- **Week 10: Build, Build, Build** — Apply everything from the past 9 weeks to 1–3 real projects; this is where the skills compound into something you can actually ship
- **Week 11: No-AI Experiment** — Go without for a week; surface the dependencies and gaps you didn't know you had
- **Week 12: Reflection & Outcomes** — What changed in 12 weeks, and what should your org actually do next?

## Outcomes We Care About

This isn't about prompt counts or AI adoption metrics. It's about whether things actually got better.

### Delivery

- Smaller, safer PRs
- Faster onboarding to unfamiliar codebases
- Less on-call pain and rework

### Quality & Risk

- Stronger test coverage where it actually matters
- Fewer changes that shipped because they _looked_ right but nobody really understood them
- Clearer risk gates before AI-assisted changes go out the door

### Developer Experience

- Less time stuck in code you didn't write and can't read
- A clearer mental model for when and how to use agents _(built across weeks 6–8: design, pair programming, and observing your own orchestration habits)_
- Engineers who can design and debug AI workflows — not just cope with them _(weeks 10 and 12: build something real, then document the full orchestration pipeline)_

### How to Measure This

The weekly metrics in each guide (PR labels applied, exercises completed, Slack participation) are **leading indicators** — they tell you the program is running. The real outcomes require a before/after comparison:

- **Delivery:** Pull average PR size (lines changed) for weeks 1–3 vs weeks 10–12 via the GitHub API. Track time-to-first-PR for any new engineers who onboard during the program.
- **Quality/Risk:** Track hotfix/revert rate — PRs followed by a "fix the fix" within 48 hours. Also track how many Copilot review flags were acted on vs. ignored over the 12 weeks.
- **Developer Experience:** Re-run the Week 1 setup survey questions in Week 12 and diff the answers. That before/after comparison is your DX measurement.

> The [metrics app](./metrics/prompt-to-create-cohort-metrics-app.md) tracks Copilot usage signals — a useful leading indicator. The above are the lagging outcomes that actually matter to leadership.

## Learning Modes

Every week has the same basic shape — a small required core, with optional layers for those who want to go deeper.

- **Core Exercises** — Required, but scoped to be realistic; these should fit into a normal week, not blow it up
- **Reflection** — What did AI improve? What did it break? What are you changing in your workflow next week?

Your day job stays primary. This program is designed to ride alongside real work, not replace it.

## Repo Layout

```text
README.md
metrics/
  prompt-to-create-cohort-metrics-app.md
week-01/
  week-01-setup-and-baseline.md
  setup-survey.md
week-02/
  week-02-no-vibe-coding.md
  no-vibe-checklist.md
  no-vibe-reviewer-checklist.md
week-03/
  week-03-context-engineer.md
  context-exercise.md
week-04/
  week-04-your-learnings.md
  learnings.md
week-05/
  week-05-reading-code-with-ai.md
  code-reading-exercise.md
week-06/
  week-06-agents-in-design.md
  design-review-exercise.md
week-07/
  week-07-ai-generated-tests.md
  ai-test-generation-log.md
week-08/
  week-08-peer-ai-pair-programming.md
  peer-ai-pair-programming-session.md
week-09/
  week-09-voice-coding.md
  voice-coding-experiment.md
week-10/
  week-10-build-the-thing.md
  build-log.md
week-11/
  week-11-no-ai-experiment.md
  no-ai-reflection.md
week-12/
  week-12-reflection.md
```

## Contributors

Thanks to everyone who reviewed and shaped this playbook:

[![JFramptonCR](https://github.com/JFramptonCR.png?size=60)](https://github.com/JFramptonCR)
[![nytsua](https://github.com/nytsua.png?size=60)](https://github.com/nytsua)
[![erin-doyle](https://github.com/erin-doyle.png?size=60)](https://github.com/erin-doyle)
[![joyebertz](https://github.com/joyebertz.png?size=60)](https://github.com/joyebertz)
[![maksymilian-majer](https://github.com/maksymilian-majer.png?size=60)](https://github.com/maksymilian-majer)
[![ryansb](https://github.com/ryansb.png?size=60)](https://github.com/ryansb)
[![dprats](https://github.com/dprats.png?size=60)](https://github.com/dprats)

## Contributing

Contributions are welcome! This repo follows a fork-and-PR model:

1. **Fork** this repository to your own GitHub account
2. **Create a branch** on your fork (`git checkout -b my-improvement`)
3. **Make your changes** and commit them
4. **Open a pull request** back to this repo — include a short description of what you changed and why
5. The maintainer (@rogue0137) will review and merge

> ℹ️ Collaborators have read access by default. You don't need write access to contribute — just fork and open a PR.
