
# Playwright Singleton Browser Manager – JavaScript

A **minimal and clean** Singleton pattern to reuse the same Playwright browser instance across scripts or tests — no unnecessary browser launches.

### Why this approach?
- Avoids opening a new browser for every script/test
- Keeps cookies, localStorage, login state (if needed)
- Very simple code – no complex classes or locks
- Perfect for learning, quick scripts, or small test suites

## Features
- One browser instance reused
- Headed mode by default (visible browser)
- Easy open / close methods
- Works both as plain script and with Playwright Test Runner

## Project Structure
```
playwright-singleton-js/
├── tests/
│   └── example-test.spec.js      # Sample Playwright test
├── browserManager.js             # Singleton logic (very short)
├── playwright.config.js          # Configuration
├── package.json
└── README.md
```

## Installation

```bash
npm init -y
npm install playwright @playwright/test
```
## How to Run
Using Playwright Test Runner (recommended)
```
# All tests – headed + only Chromium
npx playwright test --headed --project=chromium

# Or just one file
npx playwright test tests/example-test.spec.js --headed --project=chromium
```

