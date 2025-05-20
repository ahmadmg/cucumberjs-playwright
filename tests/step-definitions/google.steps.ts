import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from 'playwright';
import { test, expect } from '@playwright/test';
// Update the path below if your hooks file is located elsewhere
import { page } from "../../support/hooks";

Given("A web browser is at the main page", async function () {

  await page.goto('https://playwright.dev/');
  console.log("Navigating to main page...");
});

When("The user Search", async function () {
  // Example: await page.fill('input[name="q"]', 'Playwright');
  console.log("Entering search...");
  await page.waitForTimeout(1000)
});

Then("The user should see the result", async function () {
  // Example: await expect(page).toHaveURL(/.*playwright/);
  console.log("Search result displayed!");
})
