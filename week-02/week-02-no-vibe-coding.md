# Week 2 — No Vibe Coding

## Focus

Last week the cohort captured where they're starting from. This week we start
changing behavior — and we do it with discipline, not vibes. Vibe coding is
what happens when AI generates, a participant pastes, and it ships without
anyone really understanding what was sent. It's fast, it feels productive,
and it quietly accumulates risk.

[Outcome engineering](https://o16g.com/) is clear on this: ambiguity is the
enemy of alignment, and risk without mitigation is a blocking function.
Vibe coding fails on both counts — it ships ambiguity and hides risk.
This week introduces three rules that turn AI into a tool participants
control instead of one that controls them. These rules stay in effect for
the rest of the program.

> **A note on learning consolidation:** This applies to every reflection,
> log, and write-up in this program — not just this week. When you're
> writing down differences and what you learned, write it yourself first.
> You can always have AI polish it. But write it first.

## Contents

- [Learning Objectives](#learning-objectives)
- [Participant Time Commitment](#participant-time-commitment)
- [Supporting Materials](#supporting-materials)
- [Program Lead: Weekly To-Do List](#program-lead-weekly-to-do-list)
- [Monday Slack Post](#monday-slack-post)
- [Slack Reminders](#slack-reminders)
- [DM Scripts](#dm-scripts)
- [Welcome Video Script](#welcome-video-script-10-min-max)
- [Week 1 Success Metrics](#week-1-success-metrics)

## Learning Objectives

By the end of Week 2 participants will:

- Understand what vibe coding is, why it accumulates risk, and how to
  recognize it in their own workflow
- Have applied the three No Vibe Coding rules to at least one real PR
- Know how to use Copilot's PR Review feature and compare its output to
  their own description

## Participant Time Commitment

| Activity                   | Time                    |
| -------------------------- | ----------------------- |
| Instruction video          | 10 min                  |
| PR practice (ongoing)      | ~60 min across the week |
| Partner sync               | 15–30 min               |
| Share one example in Slack | 5–10 min                |
| **Total**                  | **~90–110 min**         |

## Supporting Materials

- [ ] [No Vibe Coding Checklist](../templates/no-vibe-checklist.md)
- [ ] [No Vibe Coding Reviewer Checklist](../templates/no-vibe-reviewer-checklist.md)
- [ ] Accountability Partner Discussion Guide — _link TBD_

> **Note for program lead:** Get an example screenshot of the GitHub
> `Pilot AI Training Program` label applied to a PR to use in the Monday
> Slack post. Post the picture inline.

### Optional Reading

**Outcome Engineering — o16g**

- **Principle to focus on:** _"Certainty not vibes — encode laws into
  the environment; ambiguity is the enemy of alignment"_ and
  _"Risk as a blocking function — if risk is unknown or unmitigated,
  the line stops"_
- **Why this week:** The three rules participants are applying this week
  are a direct implementation of these two principles at the PR level
- **Access:** [o16g.com](https://o16g.com)

**Additional Reading**

- [Navigating AI](https://duion.life/navigating-ai/)
- [Vibe Code and Git Blame](https://quesma.com/blog/vibe-code-git-blame/)

## Program Lead: Weekly To-Do List

- [ ] Pull [Week 1 Success Metrics](#week-1-success-metrics)
- [ ] Review Week 1 survey results and [Create Summary Slide Deck](#create-summary-slide-deck)
- [ ] Record and drop a short video synopsis of Week 1 cohort
      findings using the cohort landscape prompt below
- [ ] Post Monday Slack message with instruction video link and example
      label screenshot
- [ ] Send Tuesday Slack reminder
- [ ] DM anyone not visible in `#ai-pilot-cohort` by Thursday EOD
- [ ] Compile and share No Vibe Coding examples shared by cohort into a
      "No Vibe Coding Insights" doc — include "What AI Review Caught"
      and "What Engineers Said" sections with anonymized examples

## Week 1 Success Metrics

Track for leadership reporting:

- Survey completion rate (target: 10/10)
- Accountability partner syncs confirmed
- Participation in `#ai-pilot-cohort` (posts, replies, emoji responses)
- Engineers who watched the welcome video
- Anything notable from survey open-text responses

### Create Summary Slide Deck

Paste your spreadsheet results into your AI tool of choice along with the prompt below — use the output as the basis for your slides.

- **Tool diversity** — primary tools with counts, IDE distribution
- **Experience levels** — Beginner: X, Intermediate: X, Advanced: X
- **Usage patterns** — most common tasks (ranked), SDLC phases, average
  daily usage
- **Baseline metrics** _(for Week 12 comparison)_
  - Typical PR size distribution
  - PR description approach breakdown
  - Copilot review awareness (X know it exists, Y use it regularly)
- **Top concerns** by frequency
- **Top learning goals** (top 5)
- **Interesting setups** — anonymized notable approaches
- **Key quotes** — one where AI is helping, one where it's creating problems

## Monday Slack Post

```
Week 2: No Vibe Coding starts today.

Watch the instruction video, then apply these rules to ALL PRs starting now:

1️⃣ PR Size Limit — max 500 lines
2️⃣ Human Description — write it yourself, no AI
3️⃣ AI Review — use Copilot review, compare to your description
4️⃣ Label — apply the GitHub `Pilot AI Training Program` label to all your PRs

Reference guides:
→ No Vibe Coding Checklist: [link]
→ No Vibe Coding Reviewer Checklist: [link]

🎯 Goal: Share one AI review comparison example by Friday

Your partner is your support system this week — use them!
```

## Slack Reminders

#### Tuesday

```
Are you using the GitHub label? [NAME] did — look at them go! 📸 [photo]
```

#### Friday

```
Share your AI review comparison example today if you haven't yet!
Screenshot it and drop it in thread. 👇
```

## DM Scripts

### Not visible in channel

```
Hey [NAME]! Haven't seen you in #ai-pilot-cohort this week. How's it going
with the No Vibe Coding rules? Any PRs you've applied them to? Would love to
hear how it's landing for you — even if it's frustrating. Need any help?
```

## Welcome Video Script (10 min max)

> _The video script uses "you" to address participants directly — that's
> intentional. Write and record it as if you're speaking to them, not
> about them._

### 0:00–2:00 — Welcome + Week 1 Recap

- Celebrate 100% survey completion
- Share 1–2 interesting insights from the cohort landscape
- Transition: _Now we put AI into practice — with discipline_

### 2:00–4:30 — The Vibe Coding Problem

- Define vibe coding: AI generates, human pastes, ships
- Show a real example of vibe coding causing tech debt
- Connect to [o16g](https://o16g.com): vibe coding violates two core
  principles — it ships ambiguity and treats unknown risk as acceptable;
  neither is engineering
- We need guardrails that make the right behavior the default behavior

### 4:30–7:00 — The Three Rules

- Screen share the No Vibe Coding Checklist
- **Rule 1: PR size limit** — max 500 lines
  - Why: Smaller PRs = easier review, less AI drift
  - How: Check with `git diff --stat origin/main`
- **Rule 2: Human-written descriptions**
  - Why: Forces you to articulate intent — o16g calls this "human intent";
    agents explore paths, but you own the destination
  - How: Write it before you look at AI suggestions
- **Rule 3: AI review comparison**
  - Why: Surfaces mismatches between what you think you shipped and what
    you actually shipped — that gap is where risk lives
  - How: Demo coming next

### 7:00–10:30 — LIVE DEMO: AI Review Process

- Screen record an actual GitHub PR
- Navigate to Reviewers → Copilot
- Show Copilot generating review (~30 sec)
- Read Copilot's summary out loud
- Compare to human description
- Example: _"Notice Copilot caught that I'm changing auth logic, but I
  didn't mention security implications in my description. That's a
  mismatch — good catch!"_

### 10:30–12:00 — Your Tasks This Week

- Apply rules to all PRs starting today
- When you find an interesting mismatch, screenshot it and share in Slack
  _(aim for 1 example from you this week)_
- Connect with your accountability partner
- Friday: We'll compile learnings and patterns

### Video best practices

- Keep energy high — you're building on Week 1 momentum.
- Demo a real PR if possible; generic examples land less well.
- Add captions for async viewing.
