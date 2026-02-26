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

> "But coverage is a floor, not a shield. You can cover every line and still miss the thing that breaks in production: the bad assumption, the untested integration boundary, or the multi-agent coordination failure. In agentic systems, the visible 'bug' is often just the last hole that lined up."
> — [Ryan Porter, Cybernetic Development](https://anth.us/blog/cybernetic-development/)

If you want to _really_ challenge yourself this week, try **Behavior-Driven Development (BDD)**: write your specs _first_ in plain Given/When/Then language, then let AI implement the tests from those specs. Instead of asking "generate tests for this function," you write: _"Given a logged-out user, When they visit /dashboard, Then they should be redirected to /login"_ — and AI translates your clear intent into test code. It's context engineering applied directly to verification, and it directly solves the "tests that pass but don't test anything" problem.

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

**Additional Reading**

- [Cybernetic Development — Ryan Porter](https://anth.us/blog/cybernetic-development/)

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
-  Tests pass but don't assert anything meaningful → check each assertion manually
```

---

## DM Scripts

### Hasn't submitted test log

```
Hey [Name]! Just checking in — have you had a chance to run AI test
generation this week and fill out the log?

If you're stuck on what to test, start small — pick one function you
already have tests for and see what AI adds or misses.

Let me know if you need help getting started.
```

### No activity in Slack

```
Hey [Name]! Haven't seen you in #ai-pilot-cohort this week.
Everything okay?

Week 7 is one of the most important ones — AI-generated tests are
where a lot of hidden risk lives. Would love to hear what you find.

Let me know if anything is blocking you.
```

---

## Welcome Video Script (10 min max)

> _The video script uses "you" to address participants directly — that's
> intentional. Write and record it as if you're speaking to them, not
> about them._

### 0:00–1:30 — Welcome + Week 6 Recap

- Celebrate design review wins
- Common theme: _"AI catches edge cases fast — but you still have to
  know what to do with them"_
- This week: we turn that same critical eye toward tests

### 1:30–4:00 — The Problem with AI-Generated Tests

- AI generates tests that pass but don't actually test anything
- Screen share an example: a test with no assertions, or assertions
  that always return true
- Reference [o16g](https://o16g.com): you grade agents on outcomes,
  not output — a passing test suite that doesn't catch bugs is not
  an outcome
- The skill this week: reading AI-generated tests the way you'd read
  AI-generated code — with intent and skepticism

### 4:00–6:00 — LIVE DEMO: AI Test Generation

- Pick a real function from a real codebase
- Generate tests with your AI tool
- Walk through each test out loud:
  - _"What is this actually asserting?"_
  - _"Does this cover the edge case I care about?"_
  - _"Would this test catch a real bug?"_
- Show at least one test that looks right but isn't

### 6:00–8:00 — The Exercise This Week

- Screen share the AI Test Generation Log template
- Pick one function or module you're working on
- Generate tests, review them critically, fill out the log
- Document: what AI got right, what it missed, what you had to add

### 8:00–10:00 — Tasks This Week

- Complete the AI Test Generation Log for at least one function
- Share one finding in `#ai-pilot-cohort` by Friday
- Keep updating your `LEARNINGS.md`

### Video best practices

- Show a real example of an AI test that looks good but fails on
  inspection — it's more convincing than a hypothetical.
- Add captions for async viewing.
