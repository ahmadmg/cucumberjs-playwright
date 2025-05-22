import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from 'playwright';
import { test, expect } from '@playwright/test';
import { config } from "../../support/Config";
import { page } from "../../support/hooks";

Given("A web browser is at the main page", async function () {

  await page.goto(`${config.BASE_URL}`);

});

When('I click {string} button', async function (buttonName) {
  await page.getByRole('button', { name: buttonName }).filter({ visible: true }).click();
})

When('The user searches for {string}', async function (searchWord) {
await page.getByRole("searchbox", { name: "Search" }).fill(searchWord);
});


Then('The user should see relevant search results for {string}', async function (searchWord) {
await expect(page.getByText(searchWord).first()).toBeVisible();
});
