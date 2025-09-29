export default {
  format: [
    "html:reports/cucumber-report.html",
    "json:reports/cucumber-report.json",
    "allure-cucumberjs/reporter",
  ],
  // How the snippet should look
  formatOptions: {
    resultsDir: "allure-results",
    snippetInterface: "async-await",
    colorsEnabled: true,
  },
   parallel: process.env.CI ? 3 : 1,
  retry: process.env.CI ? 2 : 0,
  paths: ["tests/features/*.feature"],
  require: [
    "tests/step-definitions/*.ts",
    "tests/support/**/*.ts",
    "tests/Pages/**/*.ts",
  ],
  requireModule: ["ts-node/register"],
  publishQuiet: true,
  dryRun: false,
  failFast: false,
  tags: process.env.TAGS || 'not @skip'
};
