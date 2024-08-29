import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async navigateTo() {
    await this.page.goto("/login");
  }

  async login(username: string, password: string) {
    await this.page.getByLabel("E-mailadres").fill(username);
    await this.page.getByLabel("Wachtwoord").fill(password);
    await this.page.getByRole("button", { name: "Log in" }).click();
  }
}
