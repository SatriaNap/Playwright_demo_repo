import { Page } from "@playwright/test";

export class PropertyDetailsPage {
  constructor(private page: Page) {}

  async getPrice() {
    const prijsElement = this.page.locator('span:has-text("k.k.")');
    return prijsElement.textContent();
  }

  async getDescription() {
    return this.page.locator("h2:has-text('Omschrijving') + div").textContent();
  }

  async clickContactBrokerButton() {
    await this.page.locator(".pt-4").getByRole("link", { name: "Stuur e-mail" }).click();
  }
}
