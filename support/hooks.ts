import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { ChromiumBrowser, firefox, FirefoxBrowser, WebKitBrowser } from '@playwright/test';
import { Browser, chromium, webkit, Page } from 'playwright';
import { Context } from 'vm';
import { config } from './Config';
// save the scenario name and path to use it through the test
let IScenarioName: any;
let IFeatureName;
let page: Page;
let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser | Browser;
let context: Context;
let startTime: any;


setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);


Before(async (testInfo) => {
  switch (config.browser) {
    case 'firefox':
      browser = await firefox.launch(config.browserOptions);
      break;
    case 'webkit':
      browser = await webkit.launch(config.browserOptions);
      break;
    case 'msedge':
      browser = await chromium.launch({ ...config.browserOptions, channel: 'msedge' });
      break;
    case 'chrome':
      browser = await chromium.launch({ ...config.browserOptions, channel: 'chrome' });
      break;
    default:
      browser = await chromium.launch(config.browserOptions);
  }
  startTime = new Date();
  // retrive the scenario name
  IFeatureName = testInfo.gherkinDocument.feature?.name.replace(/[^\wæøåÆØÅ]/g, '-')
  IScenarioName = testInfo.pickle.name.replace(/[^\wæøåÆØÅ]/g, '-')

  try {
    //browser = await chromium.launch({ headless: false, slowMo: 50, channel: 'msedge' });
    const context = await browser.newContext({
      acceptDownloads: true,
      recordVideo: {
        dir: `videos/${IFeatureName}/${IScenarioName}`
      },
      viewport: { width: 1600, height: 1200 }//{ width: 1280, height: 1024 }
    });

    //Start the trace process -Uncomment both this one and the one down to trace-
    await context.tracing.start({ name: 'trace', screenshots: true, snapshots: true, });


    page = await context.newPage();
  }
  catch (error) {
    console.log(`chrome navigation to demo site failed due to ${error}`)
    throw new Error(`chrome navigation to demo site failed due to ${error}`);
  }
  return page;
})


After(async function (testInfo) {
  //take a screen shot when fail and attach it to the report
  if (testInfo.result?.status !== Status.PASSED) {
    let IScreenShot: any = await page.screenshot({ path: `screenshot/${IScenarioName}.png` })
    this.attach(IScreenShot, 'image/png')
  }


  //end the trace process
  await page.context().tracing.stop({ path: `traces/${IScenarioName}.zip` });
  await page.close()


  const testTagsObjects = testInfo.pickle.tags; // Your array of tag objects
  // Use map to create a new array containing just the tag names (strings)
  const tagNames = testTagsObjects.map(tagObject => {
    // Access the 'name' property from the current object
    const tagName = tagObject.name;
    return tagName; // Return the string as is if no '@'
  });

  let endTime: any = new Date();
  const executionTime = (endTime - startTime) / 1000; // Convert milliseconds to seconds
  const testcaseDetails: any = { 'Scenario': `${IScenarioName}`, 'Duration': `${executionTime} seconds` }
  console.log(testcaseDetails);
  console.log('TAGS: ' + tagNames)


  await browser.close();

})
export { page, browser, context, IScenarioName };