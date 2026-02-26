# Week 3 — Context Engineering

## Focus

The last two weeks were about discipline — putting guardrails in place so
AI doesn't ship code nobody really understands. This week we shift from
discipline to design. The question isn't just whether participants are
using AI carefully. It's whether they're using it _well_.

Context engineering is the practice of deliberately designing what you
give an AI before you ask it to do anything. [Outcome engineering](https://o16g.com/)
calls this "context before agents" — never dispatch an agent without
mapping the territory first. Garbage in, garbage out. Context in, quality
out. This week participants test that hypothesis with a real task from
their own backlog.

## Contents

- [Learning Objectives](#learning-objectives)
- [Participant Time Commitment](#participant-time-commitment)
- [Supporting Materials](#supporting-materials)
- [Program Lead: Weekly To-Do List](#program-lead-weekly-to-do-list)
- [Monday Slack Post](#monday-slack-post)
- [Slack Reminders](#slack-reminders)
- [DM Scripts](#dm-scripts)
- [Welcome Video Script](#welcome-video-script-12-min-max)
- [Week 2 Success Metrics](#week-2-success-metrics)

## Learning Objectives

By the end of Week 3 participants will:

- Understand what context engineering is and why it changes AI output quality
- Have run a controlled experiment — minimal context vs. rich context —
  on a real task
- Know what types of context matter most and how to build them deliberately

## Participant Time Commitment

| Activity                     | Time            |
| ---------------------------- | --------------- |
| Instruction video            | 12 min          |
| Context engineering exercise | ~45–60 min      |
| Partner sync                 | 15–30 min       |
| Share results in Slack       | 5–10 min        |
| **Total**                    | **~75–110 min** |

## Supporting Materials

- [ ] [Context Engineering Exercise Template](./context-exercise.md)
- [ ] Instruction video — _link TBD_

> **Note for program lead:** Pull 2–3 strong No Vibe Coding examples from
> last week to open the video with. Concrete wins from the cohort land
> better than hypotheticals.

### Optional Reading

**Outcome Engineering — o16g**

- **Principle to focus on:** _"Context before agents — never dispatch
  an agent without context; map the territory before building"_
- **Why this week:** The exercise participants are running is a direct
  test of this principle — same task, same agent, different territory maps
- **Access:** [o16g.com](https://o16g.com)

## Program Lead: Weekly To-Do List

- [ ] Pull Week 2 success metrics (see below)
- [ ] Compile Week 2 No Vibe Coding examples into a "No Vibe Coding
      Insights" doc — include "What AI Review Caught" and "What Engineers
      Said" sections with anonymized examples; share with cohort
- [ ] Post Monday Slack message with instruction video link
- [ ] Send Wednesday Slack reminder
- [ ] DM anyone not visible in `#ai-pilot-cohort` by Thursday EOD
- [ ] Friday: Compile context experiment results shared by cohort —
      note which types of context made the biggest difference

## Week 2 Success Metrics

Track for leadership reporting:

- PRs with the `Pilot AI Training Program` label applied
- PRs with human-written descriptions
- Engineers who used Copilot PR Review at least once
- AI review comparison examples shared in `#ai-pilot-cohort`
- Partner check-in activity

### Week 2 Cohort Landscape

- **No Vibe Coding adoption** — how many PRs had the label, human
  descriptions, and Copilot review applied
- **AI review catches** — what categories of issues surfaced
  (security, scope creep, missing tests, etc.)
- **Mismatch patterns** — what did Copilot catch that engineers didn't
  describe? Any patterns across the cohort?
- **Key quotes** — one where the rules helped, one where they felt like friction

## Monday Slack Post

```
Week 3: Context Engineering is live.

The last 2 weeks were about discipline. This week we experiment.

The hypothesis: better context = better AI output = less fixing time.
Your job this week is to test it.

📺 Watch the instruction video → [link]

This week:
  ✅ Complete 1 context engineering exercise using the template below
  ✅ Share your results in #ai-pilot-cohort by Friday
  🏷️ Keep using the Pilot AI Training Program label on PRs

📋 Template → [link]

Questions? Drop them here. 👇
```

## Slack Reminders

#### Wednesday

```
Have you picked the task for your context exercise yet?
Emoji answer below 👇

Stuck?
-  Task feels too big → pick just ONE part of it
-  Not sure what "rich context" means → use the checklist in the template
-  Both attempts gave bad output → that's valuable data, share it anyway
```

#### Friday

```
Share your context experiment results today if you haven't yet!
What did richer context actually change? Drop it in thread. 👇
```

## DM Scripts

### Not visible in channel

```
Hey [Name]! How's the context engineering exercise going?

If you're stuck:
-  What task to pick → something small from this sprint works great
-  What counts as rich context → the template checklist walks you through it
-  Results aren't clean → messy data is still useful, share it

Due Friday. Need help? Drop it in #ai-pilot-cohort or let me know.
```

## Welcome Video Script (12 min max)

> _The video script uses "you" to address participants directly — that's
> intentional. Write and record it as if you're speaking to them, not
> about them._

### 0:00–2:00 — Welcome + Week 2 Recap

- Celebrate No Vibe Coding wins
- Share 2–3 best examples of AI review catching real issues
- Transition: _Now let's make AI outputs actually useful_

### 2:00–4:30 — The Context Problem

- The question isn't just "did AI help?" — it's "did you give it
  enough to work with?"
- Reference [o16g](https://o16g.com): context before agents — you
  can't dispatch an agent without mapping the territory first
- Show a side-by-side example _(update this for your org before recording)_:
  - **Minimal:** _"Write a function to validate user input"_
  - **Rich:** _"Write a Python function to validate user email for our
    Django app. Must check format, block disposable emails, integrate
    with our `UserValidator` class in `validators.py`, raise
    `ValidationError` on failure"_
- The difference in output quality is the point — same agent, different map

### 4:30–7:30 — The Context Engineering Exercise

- Screen share the exercise template
- Walk through the experiment:
  1. Pick a real task from your backlog
  2. First attempt: minimal context — just the ask
  3. Second attempt: rich context — files, constraints, examples
  4. Compare outputs side-by-side
  5. Document what context actually made the difference
- What "rich context" includes:
  - Relevant files or code snippets
  - Tech stack and frameworks
  - Business constraints
  - Examples of similar existing code
  - What you've already tried
  - Known edge cases

### 7:30–9:30 — Exercise Walkthrough

- Show a completed example
- _"Notice how specific the rich prompt is — this isn't extra work,
  it's front-loaded work that eliminates back-and-forth later"_

### 9:30–11:00 — Tasks This Week

- Complete 1 context engineering exercise using the template
- Share results in `#ai-pilot-cohort` by Friday
- Continue No Vibe Coding rules on all PRs
- Check in with your accountability partner

### 11:00–12:00 — What We're Testing

- Does context actually save time?
- What types of context matter most?
- Week 4 preview: we'll use what we learn here to start building
  `LEARNINGS.md` — a persistent context brain for your AI
- Questions? `#ai-pilot-cohort`

### Video best practices

- Use a real example from your own codebase if possible — generic
  examples land less well with engineers.
- Keep the side-by-side demo tight; the contrast is the lesson.
- Add captions for async viewing.
