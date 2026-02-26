# Week 8 — Peer AI Pair Programming

## Focus

Every week so far, participants have been working with AI alone. This
week they do it with someone watching.

Pair programming with AI is different from pair programming with a human.
The driver isn't writing code — they're orchestrating a sequence of
prompts, reviewing outputs, correcting course, and deciding what to ask
next. The navigator isn't reading code — they're watching how someone
thinks through a problem with an agent, noticing where the prompts are
sharp and where they're vague, asking questions the driver didn't think
to ask.

This is [outcome engineering](https://o16g.com/) made visible: the
human defines the destination, breaks it into steps, and steers the agent
toward something useful. Doing it in front of another engineer — and
watching them do it — is one of the fastest ways to get better at it.
Two sessions this week: one where each person drives, one where they watch.

## Contents

- [Learning Objectives](#learning-objectives)
- [Participant Time Commitment](#participant-time-commitment)
- [Supporting Materials](#supporting-materials)
- [Program Lead: Weekly To-Do List](#program-lead-weekly-to-do-list)
- [Week 7 Success Metrics](#week-7-success-metrics)
- [Monday Slack Post](#monday-slack-post)
- [Slack Reminders](#slack-reminders)
- [DM Scripts](#dm-scripts)
- [Welcome Video Script](#welcome-video-script-10-min-max)

## Learning Objectives

By the end of Week 8 participants will:

- Have practiced multi-step AI orchestration with another engineer
  watching — and have watched someone else do it
- Know what good prompt decomposition looks like in practice, and where
  their own prompting habits break down under observation
- Have given and received real-time feedback on AI orchestration for
  the first time

## Participant Time Commitment

| Activity                     | Time           |
| ---------------------------- | -------------- |
| Instruction video            | 10 min         |
| Pair programming session × 2 | ~60 min total  |
| Documenting session notes    | ~15 min        |
| Share findings in Slack      | 5–10 min       |
| **Total**                    | **~90–95 min** |

## Supporting Materials

- [ ] [AI Pair Programming Session Template](../templates/ai-pair-programming-session.md)
- [ ] [Accountability Partner Discussion Guide](#) — _link TBD_
- [ ] Instruction video — _link TBD_

> **Note for program lead:** Pull 2–3 test generation findings from last
> week — specifically AI failure patterns — to open the video with. The
> transition from "reviewing AI output alone" to "reviewing it together"
> is the through-line.

### Optional Reading

**Outcome Engineering — o16g**

- **Principle to focus on:** _"Human intent — agents explore paths,
  humans choose the destination"_ and _"Orchestration over one-shots —
  complex outcomes require sequenced agent steps, not single prompts"_
- **Why this week:** The driver role is pure orchestration in practice —
  breaking a real task into steps, steering the agent, evaluating at
  each turn; the navigator role makes that process legible to a second
  human
- **Access:** [o16g.com](https://o16g.com)

## Program Lead: Weekly To-Do List

- [ ] Pull Week 7 success metrics (see below)
- [ ] Compile Week 7 test generation findings — common AI failure
      patterns, prompting improvements engineers discovered, whether
      AI-generated tests caught real bugs
- [ ] Create a short summary of AI test mistakes to reference in the
      Week 8 video intro
- [ ] Post Monday Slack message with instruction video link and
      accountability pair reminder
- [ ] Send Tuesday and Friday Slack reminders
- [ ] DM any pairs who haven't scheduled by Wednesday EOD
- [ ] Friday: Compile pair programming session notes — what patterns
      emerged in how engineers orchestrate AI differently from each other?

### Week 7 Cohort Landscape — compile prompt for Week 9 video intro

- **Exercise completion** — % who finished the test generation exercise
- **Test quality data** — average tests generated, average % needing fixes
- **Real bugs caught** — did any AI-generated tests surface actual bugs?
- **AI failure patterns** — most common types (assertions, edge cases,
  mocking, test naming)
- **Prompting improvements** — what engineers said they'd do differently
- **Key quote** — one where AI test generation clearly saved time, one
  where it created more work

## Week 7 Success Metrics

Track for leadership reporting:

- % who completed the test generation exercise
- Average number of tests AI generated per session
- Average % of tests that needed fixes
- % who reported time savings vs. writing manually
- Most common AI test failure types reported
- Whether AI-generated tests caught real bugs
- Continued PR label compliance

## Monday Slack Post

```
Week 8: Peer AI Pair Programming.

You've done peer programming. You've done AI pair programming.
This week: both at once.

Your accountability partner is your co-pilot. One person drives the
AI, one person watches and evaluates. Then you switch.

📺 Watch the instruction video → [link]

This week:
  - Schedule two 30 min sessions with your partner this week
  - One person drives AI, the other evaluates — then switch
  - Practice multi-step prompting, not one-shot completions
  - Share your session notes in #ai-pilot-cohort by Friday
  🏷️ Keep using the Pilot AI Training Program label on PRs

📋 Template → [link]

Accountability pairs:
  Engineer A ↔ Engineer B
  Engineer C ↔ Engineer D
  Engineer E ↔ Engineer F
  Engineer G ↔ Engineer H
  Engineer I ↔ Engineer J

Questions? Drop them here. 👇
```

## Slack Reminders

#### Tuesday

```
Who's locked in a time with their partner? React with 📅 when scheduled.

Not scheduled yet? Do it today — calendars fill up fast.

Need help coordinating? Ask in thread. 👇
```

#### Friday

```
Month 2 done. Month 3 drops Monday.

Share your pair programming session notes today if you haven't yet —
what did you notice watching someone else orchestrate AI? 👇
```

## DM Scripts

### Pair hasn't scheduled

```
Hey [Name]! Have you and [Partner] locked in a time for the pair
programming session yet?

If scheduling is hard:
-  You can do it async — record your screen, partner watches later
-  It can be as short as 15 min with a small task
-  Flexible on timing — just needs to happen this week

Please lock in a time today. Let me know if you need help coordinating.
```

### One partner is unresponsive

```
Hey [Name]! Looks like you and [Partner] haven't connected yet for
Week 8. Can you reach out to them today?

If they're not responding, DM me and I'll help coordinate or pair
you with someone else for this week.
```

## Welcome Video Script (10 min max)

> _The video script uses "you" to address participants directly — that's
> intentional. Write and record it as if you're speaking to them, not
> about them._

### 0:00–1:30 — Welcome + Week 7 Recap

- Celebrate test generation wins
- Common theme: _"AI is fast, but needs careful review — and now we
  know exactly what to look for"_
- This week: practice orchestrating AI with another engineer watching
- Why pairs? We learn more by observing than by doing alone — and more
  by being observed than by working unseen

### 1:30–3:30 — What Is Peer AI Pair Programming?

- Traditional pair programming: driver writes, navigator reviews
- AI pair programming: driver prompts the agent, navigator evaluates
  the prompts and the outputs — not just the code
- The skill this week is multi-step orchestration — breaking a task
  into 5–10 prompts instead of one
- Reference [o16g](https://o16g.com): complex outcomes require sequenced
  agent steps; a single prompt that tries to do everything is the AI
  equivalent of a 1,000-line PR
- Example question to kick off any session: _"How would you break
  this task down into steps?"_

### 3:30–6:00 — LIVE DEMO: Peer AI Pair Programming

- Screen share: two people working together _(can simulate with a
  second person off-camera or walk through the roles yourself)_
- Task: _"Add rate limiting to an API endpoint"_
- Driver sequence:
  1. _"What's the best approach to rate limiting in [framework]?"_
  2. _"Generate middleware for token bucket rate limiting"_
  3. _[Reviews output]_ _"This doesn't use our existing Redis client —
     modify it to use that instead"_
  4. _"Generate tests for this middleware"_
  5. _[Reviews]_ _"Add an edge case test for burst traffic"_
- Navigator feedback at each step:
  - _"Good prompt — but specify our Redis pattern upfront next time"_
  - _"That output looks off — check the config object"_
  - _"The decomposition is working — small steps are easier to steer"_
- Call it out: _"Five prompts, not one. Each step was steerable because
  it was small enough to evaluate"_

### 6:00–8:00 — The Exercise This Week

- Screen share the pair programming session template
- Schedule two 30 min sessions with your accountability partner
- Pick a real task — a small feature, a refactor, something concrete
- Session 1: you drive, partner navigates
- Session 2: switch
- Driver: prompt AI and share screen
- Navigator: watch, give feedback on the prompts and the outputs,
  ask questions the driver didn't think to ask
- Document what you learned about your own orchestration habits

### 8:00–9:30 — Tasks This Week

- Schedule both sessions with your partner — do it today
- Complete the sessions using the template to capture notes
- Share findings in `#ai-pilot-cohort` by Friday
- Keep updating your `LEARNINGS.md` — orchestration patterns and prompt
  decomposition strategies are worth capturing

### 9:30–10:00 — Why This Matters

- Watching someone else prompt AI shows you patterns you'd never find alone
- Being watched makes you more intentional — you explain your reasoning
  out loud and catch gaps you'd otherwise skip past
- Multi-step orchestration is the direction all serious AI work is heading
- Month 3 preview: Week 9 is voice coding — drops Monday
- Questions? `#ai-pilot-cohort`

### Video best practices

- If you can get a second person for the demo, do it — even a brief
  real exchange between two people is more convincing than a simulation.
- Narrate the navigator's feedback explicitly so participants know what
  good evaluation sounds like.
- Add captions for async viewing.
