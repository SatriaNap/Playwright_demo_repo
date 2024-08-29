import { Page } from "@playwright/test";

export class ContactBrokerPage {
  constructor(private page: Page) {}

  get contactBrokerForm() {
    return this.page.locator("h2.contact-form-object__title");
  }
}
