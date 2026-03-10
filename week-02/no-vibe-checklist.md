# No Vibe Coding Checklist

Use this checklist for every PR you open starting Week 2.

> Ambiguity is the enemy of alignment ([o16g](https://o16g.com/))

And unknown risk is a blocking function. These steps exist to eliminate both before your code ships. 

### Step 1: Check your line count

```
git diff --stat origin/main
```

- **Under 500 lines?** Move to Step 2.
- **Over 500 lines?** Break it up first.
  - What's the smallest shippable change here?
  - Stuck? Ask AI: _"How can I break this PR into logical, incremental changes?"_

### Step 2: Write your PR description — no AI

Write it in your own words. Cover:

- **What** changed
- **Why** you changed it
- **How** you tested it
- **Risks** — or N/A
- **What** you want feedback on

Stuck? Pretend you're explaining it to a teammate who's been out for a week.

**Template:**

```
What: Describe the change

Why: Explain the reason

How I tested: Manual / unit tests / integration tests / etc.

Risks: Any potential issues — or N/A
```

Also see: [COMPANY High Quality Commit Standards](link)

### Step 3: Submit your PR

- Push your code
- Open the PR in GitHub
- Add your human-written description
- Add the label: `Pilot AI Training Program`

### Step 4: Request Copilot review

- Go to your PR page
- Review your own PR first
- Click **Reviewers** → select **Copilot** _(if it's not already enabled automatically)_
- Wait 20–30 seconds — it's not broken, just slow

### Step 5: Compare Copilot's read vs. yours

Read Copilot's summary, then fill this out:

```
Does Copilot understand WHAT I changed?
  [ ] YES
  [ ] NO
  [ ] PARTIALLY — explain:

Did Copilot catch something I didn't mention?
  [ ] YES — what did it catch?
  [ ] NO

Did Copilot misunderstand anything?
  [ ] YES — what did it miss?
  [ ] NO

Mismatch worth sharing?
  [ ] YES — will post screenshot
  [ ] NO — looks aligned
```

### Step 6: Share interesting mismatches

Found a mismatch? That's the learning. Screenshot it and post in `#ai-pilot-cohort`.

**Worth sharing:**

- Copilot caught a side effect you didn't mention
- AI misread your intent
- AI missed the broader context of the change in the codebase
- Security or performance implications surfaced
- Scope creep revealed

> Questions or stuck? Drop them in `#ai-pilot-cohort`
