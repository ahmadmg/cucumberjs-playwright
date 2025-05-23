export default {
    format:
        [
            'html:reports/cucumber-report.html',
            'json:reports/cucumber-report.json',
            "allure-cucumberjs/reporter"
        ],
    // How the snippet should look
    formatOptions: {
        resultsDir: "allure-results",
        snippetInterface: 'async-await'
    },
    parallel: 1,
    serial: true,
    // retry: 2,
    paths: ['tests/features/*.feature'],
    require: [
        'tests/step-definitions/*.ts',
        'tests/support/**/*.ts',
        'tests/Pages/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
}
