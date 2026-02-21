# AI Test Generation Log

> [Outcome engineering](https://o16g.com/): agents generate, humans
> validate. A green checkmark from a bad test is unmitigated risk — not
> coverage. Review every test before you accept it.

## The Code I'm Testing

**Feature / function name:** _e.g., "User authentication middleware"_

**What it does:**

**File path:** _e.g., `src/middleware/auth.ts`_

**Code snippet:**

_Paste the code you're testing, or describe it if it's too long to paste._

```
[paste here]
```

## The Generation Session

**Tool used:**

- [ ] GitHub Copilot
- [ ] Claude
- [ ] ChatGPT
- [ ] Cursor
- [ ] Other: ****\_\_\_****

**My prompt:**

_Paste your exact prompt._

```
[paste here]
```

_Example: "Generate unit tests for the `authenticateUser` function above.
Cover the happy path and these edge cases: null input, expired token,
database connection failure."_

> The more specific the edge cases you name upfront, the less you'll
> need to fix. Vague prompts like "cover edge cases" produce vague tests.

**AI-generated tests:**

```
[paste here]
```

**Number of tests generated:** \_\_\_

## What AI Got Right

**Test #\_\_ — [test name]**

- What it tests:
- Why it's good: _e.g., "Covers happy path correctly", "Tests behavior not implementation"_

**Test #\_\_ — [test name]**

- What it tests:
- Why it's good:

_Repeat for each test worth keeping as-is._

## What AI Got Wrong

> This section is the most important one. Document every problem and
> why it happened — that's what goes in your `LEARNINGS.md`.

**Test #\_\_ — [test name]**

- The problem: _e.g., "Test name says 'checks invalid email' but tests valid email"_
- How I fixed it:
- Why AI got it wrong: _e.g., "I didn't specify edge cases in the prompt"_

**Test #\_\_ — [test name]**

- The problem: _e.g., "Assertion only checks truthy, not the specific value"_
- How I fixed it:
- Why AI got it wrong:

**Test #\_\_ — [test name]**

- The problem: _e.g., "Mocks the wrong dependency"_
- How I fixed it:
- Why AI got it wrong:

_Repeat for each problem test._

## Missing Coverage

**Edge cases AI didn't generate tests for:**

1. _e.g., "Null input"_
2. _e.g., "Expired token"_
3. _e.g., "Database connection failure"_

**Did you add tests for these?**

- [ ] Yes — wrote them manually
- [ ] Yes — asked AI to generate specific tests for each
- [ ] No — decided not to test these yet

## Running the Tests

**Did the tests run without modification?**

- [ ] Yes, all ran
- [ ] Some ran, some had syntax errors
- [ ] None ran without fixes

**Did the tests pass?**

- [ ] All passed
- [ ] Some passed, some failed — caught real bugs
- [ ] All failed — tests were wrong

**Did the tests catch any real bugs?**

- [ ] Yes — [describe the bug]
- [ ] No bugs found
- [ ] Tests passed but I don't trust them

## Time

|                                |                |
| ------------------------------ | -------------- |
| Prompting AI                   | \_\_\_ min     |
| Reviewing generated tests      | \_\_\_ min     |
| Fixing tests                   | \_\_\_ min     |
| Writing missing tests manually | \_\_\_ min     |
| **Total**                      | **\_\_\_ min** |

**Estimated time if written manually:** \_\_\_ min

**Was it worth it?**

- [ ] Yes — saved significant time
- [ ] Maybe — saved some time but needed a lot of fixes
- [ ] No — would've been faster to write manually

## How to Prompt Better Next Time

**What I should have specified upfront:**

- [ ] Specific edge cases to cover
- [ ] Testing framework and syntax conventions _e.g., "Use Jest's expect syntax"_
- [ ] Mock and stub requirements
- [ ] Test naming conventions
- [ ] Other: ****\_\_\_****

**My improved prompt for next time:**

_Rewrite your original prompt based on what you learned this session._

```
[paste here]
```

## Patterns I Noticed

**AI was good at:**

- [ ] Generating test structure and boilerplate
- [ ] Happy path testing
- [ ] Common error cases
- [ ] Mock setup
- [ ] Other: ****\_\_\_****

**AI struggled with:**

- [ ] Edge cases specific to our domain
- [ ] Integration test complexity
- [ ] Assertions that are too weak or too specific
- [ ] Understanding business logic
- [ ] Test naming
- [ ] Other: ****\_\_\_****

## What Goes in My LEARNINGS.md

**Test generation prompts that worked:**

_e.g., "Specifying 'test happy path AND these edge cases: [list]' works
much better than 'cover edge cases'"_

**AI test mistakes I now catch fast:**

_e.g., "Always verify the assertion actually validates the behavior,
not just that something is truthy"_

**Testing patterns to give AI upfront:**

_e.g., "We always mock external APIs with MSW, not Jest mocks — tell
AI this at the start of the prompt or it'll use the wrong approach"_

## Share in Slack

```
Generated tests for [feature name].
Got right: [X / Y tests]
Had to fix: [main issue in one sentence]
Time: [X min] vs ~[Y min] manually
Worth it? [Yes / Maybe / No]
```
