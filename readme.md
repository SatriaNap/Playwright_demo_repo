## Preconditions

Node.js & npm are installed on your machine

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies

```bash
npm install
```

4. Install playwright browsers if not installed yet

```bash
npx playwright install
```

5. Update the userAgent config. Create a .env file and fill in the value to run it locally

```bash
   FUNDA_USER_AGENT=<User agent>
```

4. Running Tests
   To run the tests, use the following command:
   `npx playwright test`

5. CI/CD - Github Actions
   Workflow is setup in the `playwright.yml` file.
   The tests will run automatically on each push and pull req. and can be monitored in the 'Actions' tab.
   The user agent is stored as a secret to be able to run it in Github Actions

## Summary

The framework uses:

- A supplied user agent to avoid robot detection

- Pre-defined cookies to run each testsession without having to deal with cookie popups

- Playwright fixtures to avoid duplicates on POM instanciation
