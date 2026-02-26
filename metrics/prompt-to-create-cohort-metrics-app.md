# Prompt to create cohort metrics app

You are an expert TypeScript developer. Build me a CLI tool that pulls GitHub Copilot usage metrics weekly from the GitHub Copilot Metrics API and saves the output for tracking over time.

## Context

- I am running a 12-week async AI engineering pilot program with 10 engineers at my company
- I need to pull per-user and org-level metrics weekly to track cohort progress across three stakeholder views:
  1. Executive view (org-level ROI signals)
  2. Engineering manager view (behavioral change and feature adoption)
  3. Program view (individual engineer progress over 12 weeks)

## Tech Stack

- TypeScript
- Node.js CLI (use `tsx` or compile with `tsc`)
- Use the GitHub REST API v2022-11-28
- Use `dotenv` for secrets
- Use `fs` to persist output as JSON and CSV

## API Endpoints to Call

Call all three of these each week:

1. GET /orgs/{org}/copilot/metrics/reports/users-1-day — per-user metrics for today
2. GET /orgs/{org}/copilot/metrics/reports/enterprise-28-day/latest — org-level rolling 28-day window
3. GET /enterprises/{enterprise}/copilot/metrics/reports/enterprise-1-day — enterprise-level daily snapshot

The API returns a signed download URL to an NDJSON file. You must:

1. Call the endpoint to get the signed URL
2. Fetch the NDJSON file from that URL
3. Parse each line as JSON

## Authentication

- Use a GitHub Personal Access Token (PAT) with `read:org` and `manage_billing:copilot` scopes stored in `.env` as `GITHUB_TOKEN`
- Also store `GITHUB_ORG` and `GITHUB_ENTERPRISE` in `.env`

## Output Files

For each weekly run, save files under `data/YYYY-MM-DD/`:

### 1. Raw files (always save these)

- `users-raw.json` — full NDJSON parsed output from the per-user endpoint
- `org-raw.json` — full NDJSON parsed output from the org 28-day endpoint
- `enterprise-raw.json` — full NDJSON parsed output from the enterprise daily endpoint

### 2. Per-user CSV: `data/YYYY-MM-DD/users.csv`

One row per engineer per week with these columns:

- `date`
- `user_login`
- `is_active` — boolean, was this user active today
- `completions_shown` — number of inline suggestions shown
- `completions_accepted` — number of inline suggestions accepted
- `completions_acceptance_rate` — accepted / shown, as a percentage
- `lines_suggested` — total lines of code suggested
- `lines_accepted` — total lines of code accepted
- `chat_requests` — total Copilot chat messages sent
- `agent_mode_active` — boolean, did this user use agent mode
- `feature_breakdown` — JSON string of usage split by feature (completions, chat, agent)
- `ide_breakdown` — JSON string of usage split by IDE
- `language_breakdown` — JSON string of top languages used

### 3. Executive summary CSV: `data/YYYY-MM-DD/executive-summary.csv`

One row for the whole org with these columns:

- `date`
- `total_licensed_users`
- `daily_active_users`
- `active_rate_pct` — DAU / total licensed, as a percentage
- `total_lines_suggested`
- `total_lines_accepted`
- `org_acceptance_rate_pct`
- `total_chat_requests`
- `agent_adoption_rate_pct` — % of active users who used agent mode

### 4. Manager view CSV: `data/YYYY-MM-DD/manager-view.csv`

One row per engineer with columns focused on behavioral signals:

- `date`
- `user_login`
- `acceptance_rate_pct`
- `primary_feature_used` — whichever of completions/chat/agent had the highest usage
- `used_chat` — boolean
- `used_agent` — boolean
- `used_completions_only` — boolean, true if they only used inline completions and nothing else
- `top_language`
- `top_ide`

### 5. Cumulative CSVs (append, never overwrite)

- `data/cumulative-users.csv` — appends users.csv each week
- `data/cumulative-executive.csv` — appends executive-summary.csv each week
- `data/cumulative-manager.csv` — appends manager-view.csv each week

## CLI Commands

Use `commander` to implement:

- `npm run pull` — pulls today's metrics, generates all output files, appends to cumulative CSVs
- `npm run report:executive` — prints the executive summary table to terminal across all weeks
- `npm run report:manager` — prints the manager behavioral change table to terminal across all weeks
- `npm run report:users` — prints per-user weekly progress table to terminal, sorted by user then date
- `npm run report:trend <user_login>` — prints a single engineer's week-by-week trend for acceptance rate, chat usage, and agent adoption

## Error Handling

- If a user has no activity for the day, include them in all CSVs with 0s and false booleans
- Log clearly if an API call fails with the status code and message
- Do not crash if `data/` does not exist — create it
- If the cumulative CSV does not yet exist, create it with headers before appending

## Project Structure

Generate the following files:

- `src/index.ts` — CLI entry point with commander
- `src/api.ts` — all GitHub API calls and NDJSON parsing
- `src/transform.ts` — logic to map raw NDJSON to all four CSV schemas
- `src/output.ts` — file writing logic (JSON, CSV, cumulative append)
- `src/reports.ts` — terminal table rendering for all four report commands
- `.env.example` — with placeholder values
- `README.md` — full setup and usage instructions

## README Must Include

- How to create the PAT and which scopes are needed
- How to run `npm run pull` on a cron schedule (example: every Monday at 9am)
- A data dictionary explaining every column in every CSV
- A section titled "Stakeholder Guide" explaining which report command to share with executives, managers, and the program lead
