# Week 5 — Reading Code with AI

## Focus

Month 1 built the habits. This week Month 2 starts, and the shift is
simple: stop thinking of AI as something that writes code and start
treating it as something that reads it too.

Every engineer has a graveyard of tickets they avoided because the code
was unfamiliar, the language was foreign, or the codebase was just too
intimidating to dive into cold. This week participants pick one of those
repos and use AI to trace a specific endpoint or feature in 15 minutes.
Not to become an expert — just to see what's possible when the agent
does the archaeology and the engineer directs the dig.

That's [outcome engineering](https://o16g.com/) in plain terms: agents
explore paths, humans evaluate what they find and decide what to do next.
Code reading is one of the clearest places to feel that dynamic work.

## Contents

- [Learning Objectives](#learning-objectives)
- [Participant Time Commitment](#participant-time-commitment)
- [Supporting Materials](#supporting-materials)
- [Program Lead: Weekly To-Do List](#program-lead-weekly-to-do-list)
- [Week 4 Success Metrics](#week-4-success-metrics)
- [Monday Slack Post](#monday-slack-post)
- [Slack Reminders](#slack-reminders)
- [DM Scripts](#dm-scripts)
- [Welcome Video Script](#welcome-video-script-10-min-max)

## Learning Objectives

By the end of Week 5 participants will:

- Have used AI to trace a specific endpoint or feature in an unfamiliar
  repo in under 15 minutes
- Know how to direct an AI agent through an unknown codebase — what
  questions to ask, in what order
- Have a concrete sense of where AI accelerates code reading vs. where
  manual reading is still necessary

## Participant Time Commitment

| Activity                | Time           |
| ----------------------- | -------------- |
| Instruction video       | 10 min         |
| Code reading exercise   | ~30–45 min     |
| Partner sync            | 15–30 min      |
| Share findings in Slack | 5–10 min       |
| **Total**               | **~60–90 min** |

---

## Supporting Materials

- [ ] [Code Reading Exercise Template](../templates/code-reading-exercise.md)
- [ ] [Accountability Partner Discussion Guide](#) — _link TBD_
- [ ] Instruction video — _link TBD_

> **Note for program lead:** Pull 2–3 strong LEARNINGS.md entries shared
> by the cohort last week to open the video with. Concrete examples land
> better than placeholders.

### Optional Reading

**Outcome Engineering — o16g**

- **Principle to focus on:** _"Outcomes over code — the only truth is
  the rate of positive change delivered to the customer; grade agents on
  what they verify, not what they write"_
- **Why this week:** Reading code with AI flips the usual dynamic —
  the agent isn't writing anything, it's helping participants understand
  and verify what already exists; this is agents doing archaeology, not
  construction
- **Access:** [o16g.com](https://o16g.com)

---

## Program Lead: Weekly To-Do List

- [ ] Pull Week 4 success metrics (see below)
- [ ] Compile Week 4 LEARNINGS.md entries shared by cohort — note
      patterns in what types of learnings participants are capturing;
      share highlights in `#ai-pilot-cohort`
- [ ] Post Monday Slack message with instruction video link
- [ ] Send Tuesday and Wednesday Slack reminders
- [ ] DM anyone not visible in `#ai-pilot-cohort` by Thursday EOD
- [ ] Friday: Compile code reading findings — note which repo types,
      which languages, and what AI helped vs. didn't

### Week 4 Cohort Landscape — compile prompt for Week 6 video intro

- **LEARNINGS.md adoption** — how many participants created the file,
  average entries, how many tested it in a session
- **Most common entry types** — prompt patterns, context tricks, domain
  mistakes, tool tips
- **Interesting entries** — anonymized examples worth sharing with the
  cohort
- **Key quote** — one entry that illustrates why the file matters

---

## Week 4 Success Metrics

Track for leadership reporting:

- % who created `LEARNINGS.md`
- Average number of entries per file
- % who tested it in at least one AI session
- LEARNINGS.md entries shared in `#ai-pilot-cohort`
- Continued PR label compliance _(should be habitual by now)_

---

## Monday Slack Post

```
Week 5: Reading Code with AI — Month 2 begins.

This week you're using AI to understand code, not write it.

📺 Watch the instruction video → [link]

This week:
  ✅ Pick a repo you don't normally work in
  ✅ Use AI to trace 1 endpoint or feature in 15 minutes
  ✅ Document what AI helped with vs. what you had to figure out manually
  ✅ Share your findings in #ai-pilot-cohort by Friday
  🏷️ Keep using the Pilot AI Training Program label on PRs

📋 Template → [link]

Challenge mode: pick a repo in a language you're less familiar with.
That's where AI adds the most value.

Questions? Drop them here. 👇
```

---

## Slack Reminders

#### Tuesday

```
Day 2: Code reading check-in.

Have you:
  [ ] Watched the video?
  [ ] Picked your unfamiliar repo?
  [ ] Chosen the endpoint or feature to trace?

The less comfortable you are with the repo, the more interesting
your findings will be. Questions on which repo to pick? 👇
```

#### Wednesday

```
Which repo are you exploring this week? Emoji below 👇

  🤖 Android / Kotlin
  📺 BrightScript / Roku
  🍎 Swift / iOS
  🏗️ Infrastructure / Terraform / HCL
  🐘 PHP
  🟦 TypeScript / JavaScript
  🐍 Python
  🔷 Go
  ☕ Java
  🎯 Other

Stuck?
-  Repo feels too big → pick ONE specific feature to trace
-  AI doesn't know the codebase → give it files to read first
-  15 min isn't enough → focus on understanding the flow, not every detail
```

#### Friday

```
Share your code reading findings today if you haven't yet!
What did AI make possible that manual reading wouldn't have? 👇
```

---

## DM Scripts

### Not visible in channel

```
Hey [Name]! How's the code reading exercise going?

If you're stuck:
-  Can't pick a repo → what's a service you've heard about but never
  touched? Start there
-  Don't have 15 min → block it today, it's literally 15 minutes
-  AI isn't helping → share the repo and what you tried in
  #ai-pilot-cohort and we'll troubleshoot

Findings due Friday. Need help? Let me know.
```

---

## Welcome Video Script (10 min max)

> _The video script uses "you" to address participants directly — that's
> intentional. Write and record it as if you're speaking to them, not
> about them._

### 0:00–1:30 — Welcome to Month 2 + Month 1 Recap

- Celebrate Month 1 completion
- Quick wins: No Vibe Coding habits, context engineering, LEARNINGS.md
- The Month 2 shift: _"AI across the full SDLC, not just writing code"_
- This week: using AI to read code, not write it

### 1:30–3:30 — The Code Reading Challenge

- How long does it take to understand a new codebase? Traditionally:
  hours of clicking through files, searching, reading docs
- With AI: ask questions, trace flows, understand architecture in minutes
- Reference [o16g](https://o16g.com): agents explore paths and surface
  options — code reading is one of the clearest demonstrations of that;
  the agent does the archaeology, you direct the dig
- Opening prompt: _"I need to understand the user authentication flow.
  Where do I start?"_

### 3:30–6:00 — LIVE DEMO: AI-Assisted Code Reading

- Screen share an unfamiliar repo
- Walk through the sequence:
  1. _"What does this repository do?"_
  2. _"Show me the main entry points"_
  3. _"Trace the `/api/user/login` endpoint from request to response"_
  4. Follow AI's guidance, verify in the actual code
  5. Time it out loud — _"That took 5 minutes. Manually it would've been 30+"_

### 6:00–8:00 — The Exercise This Week

- Screen share the code reading exercise template
- Pick a repo you don't normally work in
- Bonus: a different language — TypeScript dev? Try a Go repo.
  Really courageous? Try a BrightScript repo
- Choose 1 specific endpoint, feature, or hook to trace
- Give yourself 15 minutes with AI
- Document:
  - What you learned
  - What AI helped with vs. what you had to figure out manually
  - Your time saved estimate

### 8:00–9:30 — Tasks This Week

- Complete the code reading exercise using the template
- Share your findings in `#ai-pilot-cohort` by Friday
- Continue No Vibe Coding rules and adding to your `LEARNINGS.md`
- Check in with your accountability partner

### 9:30–10:00 — Why This Matters

- Onboarding to new codebases gets weeks faster
- Contributing to unfamiliar areas gets less intimidating
- Code reviews get deeper — you understand more of what you're reading
- Week 6 preview: using AI in the design and planning phase
- Questions? `#ai-pilot-cohort`

### Video best practices

- Use a real repo in the demo — a sanitized internal one if possible,
  or a well-known open source repo. Generic demos land less well.
- Time yourself on camera during the demo; the contrast is the lesson.
- Add captions for async viewing.
