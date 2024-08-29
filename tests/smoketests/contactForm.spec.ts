import { expect } from "@playwright/test";
import { test } from "../../fixtures/pageManager";

test("Contact form functionality works correctly", async ({
  homePage,
  searchResultsPage,
  propertyDetailsPage,
  contactBrokerPage,
}) => {
  await homePage.navigateTo();
  await homePage.performSearch("Amsterdam");

  await searchResultsPage.clickOnProperty(0);
  await propertyDetailsPage.clickContactBrokerButton();

  // Verify that the contact broker form is visible
  await expect(contactBrokerPage.contactBrokerForm).toBeVisible();
});
