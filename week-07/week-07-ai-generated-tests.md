# Week 7 — AI-Generated Tests

## Focus

Tests are the thing everyone knows matters and nobody (except Kent Beck?) loves writing.
AI is genuinely useful here — it handles the repetitive structure fast,
and it will cheerfully generate a full test suite for anything you hand it.

The catch is that AI-generated tests are where vibe coding hides most
comfortably. Tests that pass but don't test anything. Test names that
describe one thing and check another. Happy path coverage with zero edge
cases. It all looks fine until it isn't.

This week participants use AI to generate tests for real code, then review
and correct them with the same discipline they'd apply to any AI output.
The log they fill out — what was right, what was wrong, how better context
might have changed it — is the actual deliverable. This is [outcome
engineering](https://o16g.com/) applied to verification: agents generate,
humans validate, and the only truth is whether the tests actually catch
real bugs.

If you wantn to _really_ challenge yourself this week, you could start with the
tests and then write the code.

## Contents

- [Learning Objectives](#learning-objectives)
- [Participant Time Commitment](#participant-time-commitment)
- [Supporting Materials](#supporting-materials)
- [Program Lead: Weekly To-Do List](#program-lead-weekly-to-do-list)
- [Week 6 Success Metrics](#week-6-success-metrics)
- [Monday Slack Post](#monday-slack-post)
- [Slack Reminders](#slack-reminders)
- [DM Scripts](#dm-scripts)
- [Welcome Video Script](#welcome-video-script-10-min-max)

## Learning Objectives

By the end of Week 7 participants will:

- Have used AI to generate tests for a real feature or change and
  reviewed every test critically before accepting it
- Know AI's most common test blind spots and how to catch them fast
- Have logged what went wrong, what worked, and how better prompting
  or context would have improved the output

## Participant Time Commitment

| Activity                 | Time            |
| ------------------------ | --------------- |
| Instruction video        | 10 min          |
| Test generation + review | ~45–60 min      |
| Partner sync             | 15–30 min       |
| Share findings in Slack  | 5–10 min        |
| **Total**                | **~75–100 min** |

## Supporting Materials

- [ ] [AI Test Generation Log Template](./ai-test-generation-log.md)
- [ ] [Accountability Partner Discussion Guide](#) — _link TBD_
- [ ] Instruction video — _link TBD_

> **Note for program lead:** Pull 2–3 strong design review findings from
> last week to open the video. A concrete "AI caught this before I coded
> it" example sets the right tone for moving into tests.

### Optional Reading

**Outcome Engineering — o16g**

- **Principle to focus on:** _"Outcomes over code — grade agents on
  what they verify, not what they write"_ and _"Risk as a blocking
  function — if risk is unknown or unmitigated, the line stops"_
- **Why this week:** AI-generated tests that pass but don't verify
  anything are unmitigated risk wearing a green checkmark; this week
  is about learning to tell the difference
- **Access:** [o16g.com](https://o16g.com)

---

## Program Lead: Weekly To-Do List

- [ ] Pull Week 6 success metrics (see below)
- [ ] Compile Week 6 design review findings — which types of features
      benefited most, what prompt patterns worked, where AI struggled
- [ ] Create a short summary of issues AI caught in design phase to
      share in the Week 7 video intro
- [ ] Post Monday Slack message with instruction video link
- [ ] Send Wednesday and Thursday Slack reminders
- [ ] DM anyone not visible in `#ai-pilot-cohort` by Thursday EOD
- [ ] Friday: Compile test generation findings — note AI's most common
      failure patterns across the cohort

### Week 6 Cohort Landscape — compile prompt for Week 8 video intro

- **Exercise completion** — % who finished the design review exercise
- **Issues caught** — average number per review, breakdown by type
  (edge cases, performance, integration, security)
- **Design changes made** — % who changed their design based on AI feedback
- **Prompt patterns** — which questions surfaced the most useful issues
- **AI blind spots** — where design review consistently fell short
- **Key quote** — one where AI caught something real, one where it missed

---

## Week 6 Success Metrics

Track for leadership reporting:

- % who completed the design review exercise
- Average number of issues AI caught per review
- % who made design changes based on AI feedback
- % who said the design review was worth doing
- Breakdown of issue types caught (edge cases, performance,
  integration, security)
- Continued PR label compliance

---

## Monday Slack Post

```
Week 7: AI-Generated Tests.

Our least favorite part of the job. (Kent Beck, if you're reading this,
we're kidding. Mostly.)

This week: have AI generate tests for real code, then review every
single one before you accept it.

📺 Watch the instruction video → [link]

This week:
  ✅ Have AI generate tests for at least 1 feature or change
  ✅ Review and correct the tests — don't just accept them
  ✅ Log what was right, what was wrong, and how better prompting
     might have changed the output
  ✅ Share your findings in #ai-pilot-cohort by Friday
  🏷️ Keep using the Pilot AI Training Program label on PRs

📋 Template → [link]

The goal: learn AI's test blind spots so you catch them faster next time.

Questions? Drop them here. 👇
```

---

## Slack Reminders

#### Wednesday

```
Mid-week: test generation check-in.

What are you generating tests for? Share in thread:
"Generating tests for [feature / function]"

Already found an AI test mistake? Share it. 🧵

Common issues so far:
-  Tests pass but don't assert anything meaningful → check e
```
