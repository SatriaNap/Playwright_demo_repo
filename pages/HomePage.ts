import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  get title() {
    return this.page.title();
  }
  get mainNavigation() {
    return this.page.locator("section.flex.h-full");
  }

  async navigateTo() {
    await this.page.goto("/");
  }

  async performSearch(location: string) {
    await this.page.getByTestId("search-box").click();
    await this.page.getByTestId("search-box").fill(location);
    await this.page.getByRole("option", { name: "Amsterdam Plaats in Noord-" }).click();
  }
}
