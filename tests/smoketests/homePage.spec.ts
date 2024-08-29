import { expect } from "@playwright/test";
import { test } from "../../fixtures/pageManager";

test("Home page loads successfully", async ({ homePage }) => {
  await homePage.navigateTo();

  expect(await homePage.title).toContain("Zoek huizen en appartementen te koop / huur in Nederland [funda]");
  await expect(homePage.mainNavigation).toBeVisible();
});
