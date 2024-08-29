import { Page } from "@playwright/test";

export class UserProfilePage {
  constructor(private page: Page) {}

  //These are pseudo methods. I do not know the actual locator for these 2 elements as I do not have an account
  get userName() {
    return this.page.locator(".user-name");
  }

  get manageAccount() {
    return this.page.locator(".manage-account");
  }
}
