import { expect } from "@playwright/test";
import { test } from "../../fixtures/pageManager";

//Test will fail because I do not have a Funda account
test("Account login functionality works correctly", async ({ loginPage, userProfilePage }) => {
  await loginPage.navigateTo();
  await loginPage.login("Username", "Password");

  // Verify that the user profile page displays the correct username
  await expect(userProfilePage.userName).toHaveText("Username");
  // Verify that the manage account section is visible
  await expect(userProfilePage.manageAccount).toBeVisible();
});
