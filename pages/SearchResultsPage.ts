import { Page } from "@playwright/test";

export class SearchResultsPage {
  constructor(private page: Page) {}

  // Extract the count value from the search result summary and remove the dots
  async getResultsCount() {
    const textContent = await this.page.locator("h1.text-neutral-80").textContent();

    const numericValue = parseInt(textContent!.match(/[\d.]+/)![0].replace(/\./g, ""), 10);
    return numericValue;
  }

  //Returns the search result summary text
  async searchResultSummary() {
    return this.page.locator("h1.text-neutral-80").textContent();
  }

  //Open the property details page based on index number
  async clickOnProperty(index: number) {
    const searchResult = this.page.locator('[data-test-id="search-result-item"] h2').nth(index);
    await searchResult.click();
  }
}
