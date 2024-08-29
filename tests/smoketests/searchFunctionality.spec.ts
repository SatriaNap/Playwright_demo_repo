import { expect } from "@playwright/test";
import { test } from "../../fixtures/pageManager";

test("Search functionality works correctly", async ({ homePage, searchResultsPage }) => {
  await homePage.navigateTo();
  await homePage.performSearch("Amsterdam");

  // Verify that the search result summary contains the search term
  const resultSummary = await searchResultsPage.searchResultSummary();
  // Verify that the search results count is greater than 0
  const resultsCount = await searchResultsPage.getResultsCount();

  expect(resultSummary).toContain("Amsterdam");
  expect(resultsCount).toBeGreaterThan(0);
});
