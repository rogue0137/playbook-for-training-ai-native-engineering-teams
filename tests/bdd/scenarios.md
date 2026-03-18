# BDD Scenarios

## Story: Navigate Program Content

### Scenario: Open the landing content
- Given the SPA starts on the root route
- When the app resolves content for the route
- Then the overview markdown document is rendered

### Scenario: Deep-link into a specific week
- Given a direct URL to a week route
- When the user opens the route in a fresh browser session
- Then the corresponding markdown file is rendered
- And refreshing the page preserves the same route and content

### Scenario: Handle missing route
- Given a route that does not map to any markdown file
- When the app resolves the slug
- Then a not-found message is displayed
