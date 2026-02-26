# AI Design Review

> [Outcome engineering](https://o16g.com/): humans set the intent and
> own the risk — agents surface what's been missed. That's this exercise.
> AI asks the questions. You make the calls.

Pick the option that matches what you're working with:

- **Option A** — you have a design doc or tech spec
- **Option B** — you're working from a Jira ticket

## Option A: Design Document Review

**Design doc name / link:**

_e.g., "Continue Watching Architecture — [link]"_

**Current status:**

- [ ] Draft
- [ ] Ready for review
- [ ] Approved, about to implement
- [ ] Implementation in progress

**What it does (in your own words):**

**Key technical decisions in the doc:**

1. _e.g., "Store watch progress in Redis with 30-day TTL"_
2. _e.g., "Sync on play/pause events"_
3. _e.g., "Mobile apps poll every 30 seconds"_

**Sections I want AI to focus on:**

_e.g., "Architecture, data model, API design"_

## Option B: Jira Ticket Review

**Jira ticket:** _e.g., "JIRA-1234 — Add continue watching to player"_

**Link:**

**Current status:**

- [ ] Just assigned
- [ ] Read through, planning approach
- [ ] Have a rough implementation plan
- [ ] About to start coding

**What the ticket asks for (in your own words):**

**Acceptance criteria:**

_Copy from Jira, or write it out if the ticket doesn't have it_

**My technical approach:**

_Bullet points — what files/services you'll change, what technologies
you'll use, how you'll structure the solution, how you'll test it_

**Questions I have about the ticket:**

_Unclear requirements, technical decisions you're not sure about yet_

## The AI Review Session

_Same for both options._

**Tool used:**

- [ ] GitHub Copilot Chat
- [ ] Claude
- [ ] ChatGPT
- [ ] Cursor
- [ ] Other: \***\*\_\_\_\*\***

> **Tip:** Give AI context that matters — past incidents, architecture
> constraints, things your team has already learned the hard way. The
> more territory you map, the better it can explore.

**Prompt 1 — Edge cases**

```
Here's my design/plan: [paste design doc OR ticket + your approach].
What edge cases am I missing?
```

**AI response:** _paste key points_

**Prompt 2 — Integration risks**

```
What integration risks should I consider with our existing systems?
```

**AI response:** _paste key points_

**Prompt 3 — Performance**

```
What are the performance implications of this design?
```

**AI response:** _paste key points_

---

**Prompt 4 — Customer impact**

```
What could frustrate users about this approach?
```

**AI response:** _paste key points_

**Prompt 5 — Security** _(if applicable)_

```
What security considerations should I think about?
```

**AI response:** _paste key points_

**Other prompts I tried:**

## What AI Caught

_You write these — don't just paste AI output. Synthesize it._

**Things I hadn't considered:**

1. _e.g., "Multi-device race conditions — two devices updating the same timestamp"_
2. _e.g., "Redis failover could lose recent watch progress"_
3. _e.g., "30-second polling = battery drain on mobile"_

**Things AI got wrong or overblown:**

_e.g., "AI worried about scale, but we only have 100K daily users — not an issue yet"_

**Questions AI asked that made me think:**

_e.g., "How do we handle users with slow connections? Good point — need to think about offline support"_

## Design Changes I'm Making

**Changing based on AI feedback:**

- [ ] _e.g., "Add conflict resolution strategy"_
- [ ] _e.g., "Switch polling to WebSocket for real-time sync"_
- [ ] _e.g., "Add circuit breaker for Redis"_

**AI suggested this, but I'm not doing it — and here's why:**

_e.g., "AI suggested microservice architecture — overkill for this feature"_

> This is the most important section. Knowing what to reject is as
> valuable as knowing what to adopt. Document it.

**Updates I'll make to the design doc or ticket:**

_e.g., "Will add edge case handling to acceptance criteria"_

## Impact

**Issues caught before coding:**

_e.g., "3 edge cases, 2 integration risks, 1 performance concern"_

**Estimated time saved:**

_e.g., "Would've discovered these in code review or QA — saved ~2–3 hours of rework"_

**Was it worth it?**

- [ ] Yes — caught things that would've cost real time later
- [ ] Yes — but had to filter a lot of noise
- [ ] Maybe — mostly confirmed what I already knew
- [ ] No — didn't add much value this time

**Will I use AI for design review again?**

- [ ] Yes, for every feature
- [ ] Yes, for complex features specifically
- [ ] Maybe — depends on the feature
- [ ] No — prefer human review only

## What Goes in My LEARNINGS.md

**Design review prompts that worked:**

_e.g., "Asking 'What could frustrate users?' surfaced UX issues I missed"_

**AI blind spots in design:**

_e.g., "AI doesn't know our existing architecture constraints — need to give it that context upfront"_

**Patterns for my type of work:**

_e.g., "For Jira tickets, giving AI the full ticket + my plan works better than just the ticket"_

## Share in Slack

```
Ran an AI design review on [feature / ticket].
What AI caught that I hadn't thought of: [1–2 sentences]
What I decided not to change — and why: [1 sentence]
```
