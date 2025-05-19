import { Given, When, Then } from "@cucumber/cucumber";

Given("A web browser is at the main page", async function () {
  console.log("Navigating to login page...");
});

When("The user Search", async function () {
  console.log("Entering credentials...");
});

Then("The user should see the result", async function () {
  console.log("Login successful!");
});
