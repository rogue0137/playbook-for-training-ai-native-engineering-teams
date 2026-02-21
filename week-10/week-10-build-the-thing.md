# Week 10 — Build Something Real

## Focus

Eight weeks of practice. Two weeks of experiments. This week you use
all of it.

Every engineer has a list — mental or otherwise — of small tools they
wish existed. The script that would have saved three hours of manual
work. The CLI command that doesn't exist yet. The internal utility
everyone on the team would use if someone just built it. This week
you build one of those things, with AI as your co-builder.

The constraint is simple: it has to run. Not perfect, not polished —
but working software that you can demo to the cohort at the end of the week. That's the bar.

## Contents

- [Learning Objectives](#learning-objectives)
- [Participant Time Commitment](#participant-time-commitment)
- [Supporting Materials](#supporting-materials)
- [Program Lead: Weekly To-Do List](#program-lead-weekly-to-do-list)
- [Week 9 Success Metrics](#week-9-success-metrics)
- [Monday Slack Post](#monday-slack-post)
- [Slack Reminders](#slack-reminders)
- [DM Scripts](#dm-scripts)
- [Welcome Video Script](#welcome-video-script-10-min-max)

## Learning Objectives

By the end of Week 10 participants will:

- Have built and demoed a working tool using AI as a primary
  collaborator — from idea to running software in one week
- Know how to scope a real project for AI-assisted development:
  breaking it into steps, steering the agent, and knowing when
  to take the wheel
- Have seen what the rest of the cohort builds — and gotten a
  concrete picture of what's possible in a week with AI

## Participant Time Commitment

| Activity                     | Time             |
| ---------------------------- | ---------------- |
| Instruction video            | 10 min           |
| Project planning             | ~15 min          |
| Build sessions (AI-assisted) | ~60–70 min       |
| Recording demo video         | ~10 min          |
| Share demo in Slack          | 5 min            |
| **Total**                    | **~100–110 min** |

## Supporting Materials

- [ ] [Build Log Template](../templates/build-log.md)
- [ ] [Accountability Partner Discussion Guide]() — optional this week
- [ ] Instruction video — _link TBD_

> **Note for program lead:** Pull 2–3 voice coding findings from Week 9
> — specifically whether voice changed how participants specified intent.
> The through-line into Week 10: you've been practicing how to talk to
> AI; now you're going to build something with it.

### Optional Reading

**Outcome Engineering — o16g**

- **Principle to focus on:** _"Orchestration over one-shots — complex
  outcomes require sequenced agent steps, not single prompts"_ and
  _"Human intent — agents explore paths, humans choose the destination"_
- **Why this week:** Building a real tool is the fullest expression of
  both principles — you define what exists at the end, and you get
  there by breaking the work into steps the agent can execute
- **Access:** [o16g.com](https://o16g.com)

## Program Lead: Weekly To-Do List

- [ ] Pull Week 9 success metrics (see below)
- [ ] Compile Week 9 voice coding findings — did voice change how
      participants specified intent? What surprised them? What did
      they say they'd use voice for going forward?
- [ ] Create a short summary of voice coding patterns to reference
      in the Week 10 video intro
- [ ] Post Monday Slack message with instruction video link and
      tool idea examples
- [ ] Send Tuesday and Thursday Slack reminders
- [ ] DM anyone who hasn't shared a project idea by Tuesday EOD
- [ ] DM anyone who hasn't posted a demo by Friday EOD
- [ ] Friday: Watch every demo video — compile what the cohort built
      for Week 11 video intro

### Week 9 Cohort Landscape — compile prompt for Week 11 video intro

- **Session completion** — % who completed 2+ voice sessions
- **Intent specificity** — did voice make participants more or less
  explicit? What was the most common finding?
- **Tool preferences** — which voice tools got used; which didn't land
- **Will use again** — % who plan to use voice for specific task types
- **Key quote** — one where voice clearly changed the output, one
  where typing won

## Week 9 Success Metrics

Track for leadership reporting:

- % who completed 2+ voice coding sessions
- % who found voice made them more explicit about intent
- Most common task types tried with voice
- Most common challenges (technical vs. environmental)
- % who plan to use voice again for specific tasks
- Continued PR label compliance

## Monday Slack Post

```
Week 10: Build something real.

You've spent 9 weeks practicing how to work with AI. This week you
use it to build a tool you've always wished existed.

📺 Watch the instruction video → [link]

This week:
  - Pick a tool to build — something small(?), useful, and runnable
  - Build it with AI as your primary collaborator
  - Record a short demo video when it's working
  - Post your demo in #ai-pilot-cohort by Friday
  🏷️ Keep using the Pilot AI Training Program label on PRs

📋 Build log → [link]

Solo or with your accountability partner — your call.

The bar: it has to run. Not perfect. Running.

Not sure what to build? Some ideas:
  - A CLI tool that automates something you do manually every week
  - A script that reformats or transforms data your team works with
  - A VS Code extension or snippet set for your most common patterns
  - A small internal API or webhook your team actually needs
  - A dev utility — linter config, PR template generator, changelog
    formatter, test scaffolder
  - Anything your team would actually use


Questions? Drop them here. 👇
```

## Slack Reminders

#### Thursday

```
How's the build going? React with where you are:
  ✅ Working and almost done
  🔨 In progress, on track
  🤔 Stuck — could use help
  🔄 Pivoted to something simpler

Stuck? Drop it in thread — someone's probably hit the same thing. 👇
```

## DM Scripts

### No project idea by Tuesday EOD

```
Hey [Name]! What are you thinking of building this week?

If nothing's coming to mind:
- What's something you do manually that feels like it should
  be automated?
- What's a small tool your team always asks for but nobody
  builds?
- What would have saved you time in the last month?

Even a rough idea is enough to start. Drop it in the thread or
tell me here and I'll help you scope it.
```

### No demo posted by Friday EOD

```
Hey [Name]! Haven't seen your demo yet — how's it going?

If it's not quite done:
- Record what you have — a WIP demo is fine as long as it runs
- Even a 2-minute screen share of the working parts counts
- "Here's what I built and here's what's left" is a valid demo


Post it today if you can. Let me know if you're stuck.
```

## Welcome Video Script (10 min max)

> _The video script uses "you" to address participants directly — that's
> intentional. Write and record it as if you're speaking to them, not
> about them._

### 0:00–1:30 — Welcome + Week 9 Recap

- Pull 2–3 voice coding findings here — specifically whether speaking
  changed how participants specified intent
- Common theme: when you stop editing before you send, you explain more
- That's the setup for this week: you've been practicing how to talk to
  AI clearly; now you're going to build something with it
- This week is the most open-ended week in the program — and the most
  concrete deliverable

### 1:30–3:30 — What You're Building

- A tool you've always wished existed — and that someone else could
  actually use
- The constraint: it has to run by Friday
- Scope matters more than ambition this week — a small tool that works
  is better than a big tool that doesn't
- Examples to spark ideas:
  1. A CLI script that automates something you do manually every week
  2. A data formatter or transformer for something your team touches
  3. A VS Code extension or snippet set for your most common patterns
  4. A small internal API or webhook your team actually needs
  5. A dev utility — PR template generator, changelog formatter,
     test scaffolder, linter config
- Solo or with your accountability partner — your call
- The deliverable: a short demo video posted in Slack by Friday

### 3:30–6:00 — LIVE DEMO: Building with AI End-to-End

- Screen share: building a small tool from scratch with AI
- Example: _"A CLI script that takes a list of Jira ticket IDs and
  outputs a formatted release notes draft"_
- Walk through the full orchestration sequence:
  1. _"What's the simplest architecture for a CLI tool that reads
     from stdin and outputs formatted markdown?"_
  2. _"Generate the scaffolding — Node/TypeScript, single file,
     no dependencies if possible"_
  3. _[Reviews output]_ _"Add support for reading a file path
     as an argument instead of stdin"_
  4. _"Add error handling for missing input and malformed IDs"_
  5. _"Generate a README with usage examples"_
- Call it out: _"Five prompts. Each one small enough to evaluate.
  That's everything from Weeks 5 through 9 applied at once."_
- Show it running in the terminal before moving on

### 6:00–8:00 — The Build Log and Demo

- Screen share the build log template
- Use it to track your prompting sequence as you build — same
  discipline as every other week, applied to a longer arc
- Demo format: screen recording, 2–5 minutes, shows the tool running
- You don't need to explain every prompt — show the tool working and
  say one thing you'd do differently next time
- Post the demo video directly in `#ai-pilot-cohort` by Friday

### 8:00–9:30 — Tasks This Week

- Pick your project and drop your idea in Slack by Tuesday
- Build using AI as your primary collaborator — track prompts in
  the build log
- Record a demo video when it runs
- Post demo in `#ai-pilot-cohort` by Friday
- Keep `LEARNINGS.md` updated — end-to-end orchestration patterns
  from a real build are worth capturing

### 9:30–10:00 — Why This Matters

- Every week so far has been practice on someone else's terms —
  a template, a task type, a constraint. This week the constraint
  is just: build something real and make it run.
- The engineers who get the most out of AI aren't the ones who
  use it for tasks — they're the ones who use it to build things
  they wouldn't have had time to build otherwise
- Next week: Week 11 — _link TBD_
- Questions? `#ai-pilot-cohort`

### Video best practices

- Do the live demo all the way to a running terminal — participants
  need to see what "it has to run" looks like, not just the prompts.
- Pick a tool that's genuinely useful, not a toy; if it's something
  you'd actually use, say so on camera.
- Add captions for async viewing.
