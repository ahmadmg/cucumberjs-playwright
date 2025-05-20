import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from 'playwright';
import { test, expect } from '@playwright/test';
// Update the path below if your hooks file is located elsewhere
import { page } from "../../support/hooks";

Given("A web browser is at the main page", async function () {

  await page.goto('https://www.google.com/');
  console.log("Navigating to main page...");
});

When("The user Search for {string}", async function (srch) {
  
  const searchInput = page.locator('textarea');
  await searchInput.fill(srch);
  await searchInput.press('Enter');
  console.log(`Searching for ${srch}...`);

});

Then("The user should see the result", async function () {
  // Example: await expect(page).toHaveURL(/.*playwright/);
  console.log("Search result displayed!");
})
