# AI Engineering Pilot Program

<!-- TODO: Fix this; sounds so bad -->

Most engineers aren't going from "no AI" to "full autonomy" overnight. This 12-week async program is for engineers who want to work with AI and agents in a structured, intentional way — not just use Copilot more, but actually design and manage agent workflows that ship better outcomes.

It's grounded in the principles of [o16g (Outcome Engineering)](https://o16g.com/) — a framework for moving beyond software engineering as code production, toward something more capable, faster, and trustworthy than either vibe coding or hand coding.

The mental model I keep coming back to:

- **Humans** set the intent, define the constraints, and own the risk
- **Agents** explore the solution space, generate code, and surface options
- **The only real measure** is the rate of meaningful, positive change we're actually delivering

This isn't about AI hype. It's about being deliberate.

## Program Structure

This is designed to fit into a real engineering schedule — no mandatory meetings, no synchronous overhead.

- **Duration:** 12 weeks
- **Cohort:** ~10 engineers, across levels and locations
- **Format:** Async-first

Each week includes:

- A short video (5–12 min) to anchor the concept
- Concrete exercises you can apply directly to your work
- Optional "build a tool" or "agent org" challenges for those who want to go deeper
- Optional reading from [Beyond Vibe Coding](https://learning.oreilly.com/library/view/beyond-vibe-coding/9798341634749/) by Addy Osmani
- A lightweight check-in with an accountability partner
- Slack sharing and reflection with the cohort

The goal is written artifacts and small experiments over meetings.

## Themes by Month

### Month 1 – Foundations & Discipline

The first month is about slowing down before speeding up — understanding what your tools are actually doing and building habits that keep you in control.

- **Week 1: Setup & Baseline** — Take stock of how you're currently using AI and what's actually in your stack
- **Week 2: No Vibe Coding** — Put real guardrails in place: PR size, descriptions, AI review practices
- **Week 3: Context Engineering** — Better inputs produce better outputs; this week is about designing those inputs deliberately
- **Week 4: LEARNINGS.md** — Build a persistent "brain" your AI can actually use, so context doesn't die between sessions

### Month 2 – Agents Across the SDLC

Month 2 is about expanding where AI shows up in your workflow — not just writing code, but reading it, designing it, and validating it.

- **Week 5: Reading Code with AI** — Use AI for code archaeology in unfamiliar repos; get up to speed faster without losing critical thinking
- **Week 6: Agents in Design** — Plan before you code; treat AI as a design partner that helps you stress-test decisions early
- **Week 7: AI-Generated Tests** — Let agents propose the test suite; you stay accountable for quality and coverage
- **Week 8: Pair Programming with AI** — Humans and agents working together as a team, not a human typing and an AI autocompleting

### Month 3 – Orchestration, Risk, and Reflection

The final month zooms out — from using individual tools to orchestrating workflows, reasoning about risk, and figuring out what this all means for your team and org.

- **Week 9: Voice Coding** — Explore conversational workflows and what changes (and what doesn't) when you stop typing
- **Week 10: Amplifying Expertise** — Teach agents your domain patterns so they produce outputs that actually fit your context
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
- A clearer mental model for when and how to use agents
- Engineers who can design and debug AI workflows — not just cope with them

## Learning Modes

Every week has the same basic shape — a small required core, with optional layers for those who want to go deeper.

- **Core Exercises** — Required, but scoped to be realistic; these should fit into a normal week, not blow it up
- **Agent Orchestration** — Where it makes sense, you'll define explicit roles (planner, implementer, tester, reviewer) inside a single tool like Claude CLI, VS Code Copilot, etc. and practice managing the hand-offs between them
- **Optional: Build Something** — "Build something that changes your reality" — a PR hygiene checker, an analytics payload validator, whatever solves a real problem you have
- **Reflection** — What did AI improve? What did it break? What are you changing in your workflow next week?

Your day job stays primary. This program is designed to ride alongside real work, not replace it.

## Repo Layout

<!-- TODO: ask AI to regenerate this once it's done -->

```text
  README.md
  week-01-setup-and-baseline.md
  week-02-no-vibe-coding.md
  week-03-context-engineering.md
  week-04-learnings-md.md
  week-05-code-reading-with-ai.md
  week-06-agents-in-design.md
  week-07-ai-generated-tests.md
  week-08-pair-programming-with-ai.md
  week-09-voice-coding.md
  week-10-expertise-amplification.md
  week-11-no-ai-experiment.md
  week-12-reflection-and-outcomes.md
  templates/
    no-vibe-checklist.md
    no-vibe-reviewer-checklist.md
    context-exercise.md
    design-review-exercise.md
    code-reading-exercise.md
    ai-test-log.md
    pair-programming-session.md
    voice-coding-experiment.md
    expertise-amplification.md
    no-ai-reflection.md
```
