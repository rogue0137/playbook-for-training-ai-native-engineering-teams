# No Vibe Coding Reviewer Checklist

Use this checklist when reviewing a PR that may contain AI-generated code.

> Agents explore paths, but you own the risk gate. Copilot helps you review faster — it doesn't replace your judgment. ([o16g](https://o16g.com/))

### Step 1: Check for pilot compliance

- Does the PR have the `Pilot AI Training Program` label? _(only applies if the author is in the pilot)_
- Is it a reasonable size for a human to actually review?
- Does it have a human-written description covering What / Why / How tested / Risks?

If anything is missing, leave a comment asking the author to follow the no vibe coding rules before you start.

### Step 2: Run Copilot review first

- Go to the PR page
- Click **Reviewers** → select **Copilot** _(if it's not already there)_
- Wait 20–30 seconds for it to generate
- Read Copilot's comments and summary **before** you touch the code yourself

Use it to decide where to focus — not to decide whether to approve.

### Step 3: Compare the author's description vs. Copilot's summary

- Read the author's What / Why / How tested / Risks
- Read Copilot's summary of what the PR does
- Do they match?

**Mismatches worth flagging:**

- Copilot mentions changes the author didn't describe — scope creep?
- Copilot flags risks the author didn't — security, performance?
- Copilot misreads the change entirely — code clarity problem?

If something doesn't line up: _"Copilot flagged X but you didn't mention it — can you clarify?"_

### Step 4: Work through Copilot's inline comments

For each one:

- Is the concern actually valid? _(AI can be wrong)_
- Did the author address it?
- Does it reveal a pattern? _(same issue in multiple places?)_

**Take these seriously:**

- Auth, data exposure, injection risks
- N+1 queries, inefficient loops
- Missing error handling
- Inconsistency with existing patterns

**Common false positives:**

- "This could be simplified" — but the current approach is clearer
- Generic style suggestions that don't match your team's conventions

### Step 5: Watch for vibe coding red flags

Even with rules in place, it slips through. Look for:

- **Code that looks too perfect** — no comments, no edge cases, generic variable names
- **Overly generic error messages** — _"An error occurred"_ instead of something useful
- **Ignores existing code** — doesn't use your team's helper functions or patterns
- **Tests that only check the happy path** — no edge cases, no error conditions
- **Copy-paste patterns** — same structure repeated instead of an abstraction

If you spot it: _"Can you walk me through how this works?"_ or _"Did you test the error case on line X?"_

### Step 6: Check the tests

- Does the PR include tests?
- Do they match what the author described in "How I tested"?
- Are edge cases covered?

If the tests look AI-generated:

- Do they actually verify the new behavior, or do they just pass?
- Are the assertions meaningful?
- Do the test names describe what they're testing?

If unclear: _"These tests pass — but how do they verify [specific behavior]?"_

### Step 7: Leave useful feedback

Good examples:

- _"Copilot flagged a potential N+1 on line 42. Can you check?"_
- _"The description says you tested manually, but I don't see edge case handling for empty lists. Did you test that?"_
- _"This works, but we usually use `SpecificUtil` from our utils — can you refactor to match the pattern?"_

Skip:

- "This looks like AI code" — not actionable
- Nitpicking style when the logic is sound
- Blocking PRs over minor issues

### Step 8: Make a call

- **Approve** if the code is solid and Copilot's concerns are addressed
- **Request changes** if there are real issues — security, bugs, vibe coding red flags
- **Comment** if you have questions but nothing blocking

### Where Copilot earns its keep

- Catching common mistakes fast — null checks, security issues, missing error handling
- Validating your instincts — _"I thought this looked risky, Copilot agrees"_
- Finding patterns you might miss — repeated code, inconsistencies across files
- Speeding up the first pass so you can focus on the hard stuff

### Where it can't help you

- **Business logic** — does this actually solve the right problem?
- **Team conventions** — Copilot doesn't know your style guide (unless you tell it)
- **Context-specific decisions** — is this the right approach for _our_ system?
- **Owning the outcome** — humans set the intent and own the risk; Copilot never does ([o16g](https://o16g.com/))

### Share what you find

If Copilot catches something real, screenshot it and post in `#ai-pilot-cohort`.

_Example: "Copilot flagged a potential SQL injection I would've missed on first pass. Here's what it looked like."_

**Questions?** Drop them in `#ai-pilot-cohort`

**Copilot Review not working?**

- Refresh the PR page
- Make sure the PR is open — not a draft
- Try removing and re-adding Copilot as a reviewer
