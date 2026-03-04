# Context Engineering Exercise

> [Outcome engineering](https://o16g.com/) principle: _"Context before
> agents — never dispatch an agent without context; map the territory
> before building."_ This exercise makes that principle measurable.

Pick a real task. Run it twice. Find out what context actually changed.

> **Important:** Start a fresh agent session between Attempt 1 and
> Attempt 2. Don't let the first attempt bleed into the second.

## Your Task

_Describe the real task here — e.g., "Add pagination to anime search API"_

## Attempt 1: Minimal Context

### Prompt used

_Paste or screenshot here._

### AI output

_Paste or screenshot here._

### Problems with this output

- [ ] Wrong framework or language patterns
- [ ] Doesn't integrate with existing code
- [ ] Missing error handling
- [ ] Doesn't follow our conventions
- [ ] Other: \***\*\_\_\_\*\***

## Attempt 2: Rich Context

### Context provided

_Fill this out before you write the prompt — this is the territory map._

- **Role / persona:**
- **Relevant file(s):**
- **Tech stack info:**
- **Existing code patterns:**
- **Constraints:**
- **Examples:**
- **What I tried:**
- **Anything else relevant:**

### Prompt used

_Paste or screenshot here. This should be noticeably longer than Attempt 1._

### AI output

_Paste or screenshot here._

### Was this output better than Attempt 1? If so, how?

_Describe in detail._

## Results

Paste your Attempt 1 and Attempt 2 notes into an approved agent (browser,
IDE, or text editor all work), then run this prompt and paste the output below:

```
Look at my two attempts above. Answer these questions:

What context mattered most?
  1. [e.g., "Showing the existing pagination class"]
  2. [e.g., "Mentioning the error I got"]
  3. [e.g., "Providing the related file"]

What context didn't help?
  [e.g., "The full 500-line file was too much"]

Time comparison:
  Attempt 1: Would've taken __ min to fix
  Attempt 2: Took __ min to set up context, output was __% ready

Was it worth it?
  [ ] Yes — saves time overall
  [ ] Maybe — depends on complexity
  [ ] No — minimal is faster for this type of task
```

## Share in Slack

Copy, fill out, and post in `#ai-pilot-cohort`:

```
I ran the context engineering exercise on: [JIRA ticket or task description]
Exercise doc: [link]

The context that mattered most: [1 sentence]
```

## Optional Stretch: Context Transfer Prompt

If your session goes off the rails — too many failed attempts, contradictory
outputs, or you're just not getting anywhere — try this instead of starting
completely over:

Paste this into your current session:

```
Write a context transfer prompt for the purposes of starting over in a new
session. Summarize:
1. What we were trying to do
2. What we've learned along the way
3. What has worked and what hasn't
4. Any key findings or constraints discovered

Structure it so I can paste it into a new session and pick up where we left off.
```

Edit the output as needed, then open a fresh session and paste it in.
You lose the noise. You keep the progress.
