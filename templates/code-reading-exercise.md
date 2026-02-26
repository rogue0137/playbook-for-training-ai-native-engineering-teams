# Code Reading Exercise

> [Outcome engineering](https://o16g.com/): agents explore paths, humans
> evaluate what they find. This exercise makes that concrete — you direct
> the dig, the agent does the archaeology.

Pick a repo you don't normally work in. Trace one thing. Find out what
AI makes possible that manual reading doesn't.

## The Repo I Chose

**Repo name:**

**Why I picked this:**

- [ ] Don't normally work in it
- [ ] Less familiar language or framework
- [ ] Heard about it but never explored
- [ ] Need to understand it for upcoming work

**Primary language / framework:** [e.g., Go with Gin]

**My familiarity level:**

- [ ] Complete beginner
- [ ] Seen it before, never coded in it
- [ ] Can read it but don't write it regularly
- [ ] Somewhat familiar

## What I Wanted to Understand

**The specific endpoint, feature, or hook I traced:**

_e.g., "How does `/v2/anime/search` handle rate limiting?"_

**Why this one:**

_e.g., "Need to implement a similar pattern in my service"_

## The Process

**Tool(s) I used:**

- [ ] GitHub Copilot Chat
- [ ] Claude
- [ ] ChatGPT
- [ ] Other: \***\*\_\_\_\*\***

**Questions I asked, in order:**

1.
2.
3.
4.
5.

**Time spent:** _\_\_ min _(target: 15 min)\_

## What I Learned

**In my own words, what this endpoint or feature does:**

**Key files involved:**

1. [e.g., `routes/animal.go` — defines the endpoint]
2. [e.g., `middleware/rate_limiter.go` — applies rate limiting]
3. [e.g., `services/search_service.go` — business logic]

**The flow from input to output:**

**Anything interesting I noticed:**

_e.g., "They use ValKey for distributed rate limiting — worth stealing for our service becaues cheaper than Redis?"_

## AI vs. Manual

**AI was useful for:**

- [ ] Finding entry points fast
- [ ] Explaining unfamiliar syntax or patterns
- [ ] Tracing function calls across files
- [ ] Understanding architecture and structure
- [ ] Summarizing what code does
- [ ] Other: \***\*\_\_\_\*\***

**I still had to do manually:**

- [ ] Verify AI's explanations against the actual code
- [ ] Understand the business logic context
- [ ] Connect things AI explained in isolation
- [ ] Other: \***\*\_\_\_\*\***

**Where AI got it wrong or incomplete:**

_e.g., "AI said rate limiting was per-user — it's actually per-IP"_

> This gap is worth adding to your `LEARNINGS.md`. Mistakes AI makes
> consistently in a domain are some of the most valuable things to capture.

## Time

|                                 |                  |
| ------------------------------- | ---------------- |
| Without AI, this would've taken | \_\_\_ min / hr  |
| With AI, it took                | \_\_\_ min       |
| Time saved                      | ~\_\_\_ min / hr |

**Was it worth it?**

- [ ] Yes — significant time saver
- [ ] Yes — but I had to verify a lot
- [ ] About the same as manual
- [ ] No — AI confused me more than helped

## What Goes in My LEARNINGS.md

**Prompt pattern or tip worth keeping:**

_e.g., "Asking 'Trace endpoint X end to end' works better than 'Explain file Y'"_

**Will I use AI for code reading again?**

- [ ] Definitely — this changes how I onboard to new code
- [ ] Yes, for unfamiliar codebases specifically
- [ ] Maybe — depends on the repo
- [ ] No — I prefer reading manually

## Share in Slack

```
Used AI to understand [repo] in [X] minutes.
Biggest help: [what AI did well]
Biggest gap: [where I had to verify or correct it]
```
