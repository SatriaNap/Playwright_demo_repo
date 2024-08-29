import { expect } from "@playwright/test";
import { test } from "../../fixtures/pageManager";

test("Property details page loads correctly", async ({ homePage, searchResultsPage, propertyDetailsPage }) => {
  await homePage.navigateTo();
  await homePage.performSearch("Amsterdam");

  await searchResultsPage.clickOnProperty(1);

  const price = await propertyDetailsPage.getPrice();
  const description = await propertyDetailsPage.getDescription();

  //Validate that the price and description have values present
  expect(price).not.toBeNull();
  expect(description).not.toBeNull();
});
