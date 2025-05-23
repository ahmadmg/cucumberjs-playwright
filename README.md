# cucumberjs-playwright

This repository demonstrates end-to-end testing using [Cucumber.js](https://github.com/cucumber/cucumber-js) and [Playwright](https://playwright.dev/) with TypeScript.

## Features

- **Cucumber.js** for BDD-style feature files and step definitions
- **Playwright** for fast, reliable browser automation
- **TypeScript** for type safety
- **.env** support for configuration (base URL, browser, API URL)
- **HTML/JSON reporting** for test results
- **PowerShell scripts** for report viewing and artifact cleanup

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```sh
npm install
```

### Configuration

Create a `.env` file in the project root:

```
BASE_URL=https://playwright.dev
API_URL=https://api.playwright.dev
BROWSER=chromium
```

You can adjust these values as needed.

### Running Tests

```sh
npx cucumber-js
```

Or add a script to your `package.json` and run:

```sh
npm test
```

### Open the report

To open the report (Windows/PowerShell):

```sh
npm run report
```

### Cleaning Artifacts

To delete all files in `reports`, `traces`, and `videos` folders:

```sh
npm run clean:artifacts
```

## Project Structure

```
.
├── features/                # Cucumber feature files
├── tests/step-definitions/  # Step definitions
├── support/                 # Config, hooks, world setup
├── reports/                 # Test reports (gitignored)
├── traces/                  # Playwright traces (gitignored)
├── videos/                  # Playwright videos (gitignored)
├── .env                     # Environment variables
├── package.json
└── README.md
```

## Useful Scripts

- `npm run report` — Open the latest HTML report
- `npm run clean:artifacts` — Clean reports, traces, and videos

## License

MIT

---

**Happy testing!**