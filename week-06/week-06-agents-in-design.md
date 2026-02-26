# Week 6 — Agents in Design

## Focus

Last week AI helped participants read code they didn't write. This week
it helps them design code they haven't written yet.

Most bugs aren't born in the code — they're born in the design. Missed
edge cases, integration risks nobody thought to ask about, performance
implications that only surface at scale. The traditional fix is to get
a senior engineer to poke holes in your plan before you build it. That's
good when you can get it. AI is available at 2am on a Tuesday. I hope your
friend the engineer isn't available then.

This week participants take a real feature they're about to build and
run it through an agent before writing a single line. The agent asks the
questions. The engineer makes the decisions. That's the boundary —
and it's worth naming explicitly. This is [outcome engineering](https://o16g.com/)
at the design phase: humans set the intent and own the risk, agents
surface what's been missed.

## Contents

- [Learning Objectives](#learning-objectives)
- [Participant Time Commitment](#participant-time-commitment)
- [Supporting Materials](#supporting-materials)
- [Program Lead: Weekly To-Do List](#program-lead-weekly-to-do-list)
- [Week 5 Success Metrics](#week-5-success-metrics)
- [Monday Slack Post](#monday-slack-post)
- [Slack Reminders](#slack-reminders)
- [DM Scripts](#dm-scripts)
- [Welcome Video Script](#welcome-video-script-10-min-max)

## Learning Objectives

By the end of Week 6 participants will:

- Have used an AI agent to review a real design or spec before coding
- Know which types of questions to ask — edge cases, integration risks,
  performance, security, customer impact
- Understand where the human/agent boundary is in design work: agents
  ask, engineers decide

## Participant Time Commitment

| Activity                | Time           |
| ----------------------- | -------------- |
| Instruction video       | 10 min         |
| Design review exercise  | ~30–45 min     |
| Partner sync            | 15–30 min      |
| Share findings in Slack | 5–10 min       |
| **Total**               | **~60–90 min** |

## Supporting Materials

- [ ] [Design Review Exercise Template](./design-review-exercise.md)
- [ ] [Accountability Partner Discussion Guide](#) — _link TBD_
- [ ] Instruction video — _link TBD_

> **Note for program lead:** Pull 2–3 strong code reading findings from
> last week to open the video with. A concrete time-saved example lands
> better than a general recap.

### Optional Reading

**Outcome Engineering — o16g**

- **Principle to focus on:** _"Human intent — agents explore paths,
  humans choose the destination"_ and _"Risk as a blocking function —
  if risk is unknown or unmitigated, the line stops"_
- **Why this week:** Design review is where these two principles meet —
  the agent surfaces risks, the engineer decides which ones are blocking
- **Access:** [o16g.com](https://o16g.com)

## Program Lead: Weekly To-Do List

- [ ] Pull Week 5 success metrics (see below)
- [ ] Wednesday: Compile Week 5 code reading findings — note which
      languages and repo types AI helped with most, where it struggled
- [ ] Thursday: Create a short summary of "AI helped vs. struggled"
      patterns from Week 5 to share with cohort
- [ ] Post Monday Slack message with instruction video link
- [ ] Send Tuesday and Wednesday Slack reminders
- [ ] DM anyone not visible in `#ai-pilot-cohort` by Thursday EOD
- [ ] Friday: Compile design review findings — what did AI catch that
      engineers hadn't thought through? Any patterns?

### Week 5 Cohort Landscape — compile prompt for Week 7 video intro

- **Exercise completion** — % who finished the code reading exercise
- **Time data** — average time spent, range, self-reported time saved
- **Language diversity** — which repos and languages participants explored
- **AI strengths** — what it helped with most (entry points, syntax,
  tracing flows, etc.)
- **AI gaps** — where it got things wrong or confused people
- **Key quote** — one where AI clearly saved time, one where it didn't

## Week 5 Success Metrics

Track for leadership reporting:

- % who completed the code reading exercise
- Average time spent _(target: ~15 min)_
- % who reported time savings
- Language and repo diversity across the cohort
- Common AI strengths and weaknesses reported
- Continued PR label compliance

## Monday Slack Post

```
Week 6: Agents in Design.

Last week AI helped you read code. This week it helps you design before
you write any.

📺 Watch the instruction video → [link]

This week:
  - Pick a current or upcoming feature you're working on
  - Use AI to review your design for edge cases, risks, and performance
  - Document what AI caught vs. what you already knew
  - Share your findings in #ai-pilot-cohort by Friday
  🏷️ Keep using the Pilot AI Training Program label on PRs

📋 Template → [link]

The rule: AI asks the questions, you make the decisions.

Questions? Drop them here. 👇
```

## Slack Reminders

#### Wednesday

```
Mid-week check: what are you designing?

Share in one line:
"Reviewing design for [feature name]"

Already found something AI caught that you hadn't thought of? Share it. 🧵

Stuck?
-  No written design → explain your plan to AI in bullet points
-  AI responses are too generic → give it your existing architecture,
  tech stack, and constraints
-  AI is suggesting over-engineered solutions → that's normal, you
  filter what's actually useful; if prompting is the issue, ask in channel
```

## DM Scripts

### Not visible in channel

```
Hey [Name]! How's the design review exercise going?

If you're stuck:
-  No formal design doc → explain your feature plan to AI in bullet
  points, that's enough
-  AI responses are too vague → add more context about your existing
  system and constraints
-  Not sure what to ask → use the prompt suggestions in the template

Findings due Friday. Need help? Let me know.
```

## Welcome Video Script (10 min max)

> _The video script uses "you" to address participants directly — that's
> intentional. Write and record it as if you're speaking to them, not
> about them._

### 0:00–1:30 — Welcome + Week 5 Recap

- Celebrate code reading wins
- Common theme: _"AI helped me understand unfamiliar code significantly
  faster than reading manually"_
- This week: move AI even earlier in the SDLC — into the design phase
- The design loop: triage, planning, design review — before a single
  line of code

### 1:30–3:30 — Why AI in Design?

- Most bugs come from missed edge cases and integration issues —
  problems born in the design, not the code
- Traditionally: think through the design, maybe ask a teammate
- With AI: get a second brain to challenge your assumptions before
  you build anything
- Give it context that matters — past incidents, things that went wrong
  before, architectural constraints your team has learned the hard way
- The boundary: AI asks questions, you make the decisions
- Reference [o16g](https://o16g.com): humans set the intent and own
  the risk; agents surface what's been missed — this is that principle
  in the design phase

### 3:30–6:00 — LIVE DEMO: AI Design Review

- Screen share a real design doc or ticket _(sanitize as needed)_
- Example feature: _"Add 'continue watching' to the player"_
- Walk through the sequence:
  1. _"Here's my design: [paste spec]. What edge cases am I missing?"_
  2. AI flags: multi-device sync conflicts
  3. _"What are the performance implications?"_
  4. AI flags: watch history storage growth, need a retention policy
  5. _"What integration risks should I consider?"_
  6. AI identifies: analytics tracking, CDN caching, mobile sync
- Call it out: _"AI raised three things I hadn't thought through.
  I already knew one of them — but two were genuine gaps. That's the
  value: not replacing your thinking, but pressure-testing it before
  you build."_

### 6:00–8:00 — The Exercise This Week

- Screen share the design review exercise template
- Pick a real feature or ticket you're working on — something with
  enough complexity to have edge cases
- Run it through AI before writing a line of code
- Document what it caught, what it missed, and what you decided to
  do differently

### 8:00–10:00 — Tasks This Week

- Complete the design review exercise for one real feature
- Share one finding in `#ai-pilot-cohort` by Friday
- Keep updating your `LEARNINGS.md` — design-phase prompting patterns
  are worth capturing

### Video best practices

- Use a real design doc or ticket for the demo, even a simplified one.
  It's far more convincing than a hypothetical.
- Show yourself disagreeing with an AI suggestion — that models good
  judgment for participants.
- Add captions for async viewing.
