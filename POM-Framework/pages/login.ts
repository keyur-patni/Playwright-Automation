import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username_textbox: Locator;
  readonly password_textbox: Locator;
  readonly login_button: Locator;
  readonly success_message: Locator;
  readonly error_message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username_textbox = page.getByRole("textbox", { name: "Username" });
    this.password_textbox = page.getByRole("textbox", { name: "Password" });
    this.login_button = page.getByRole("button", { name: " Login" });
    this.success_message = page.locator("#flash.success");
    this.error_message = page.locator("#flash.error");
  }

  async gotoLoginPage() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  async login(username: string, password: string) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }

  async assertLoginSuccess() {
    await expect(this.success_message).toContainText("You logged into a secure area!");
  }

  async assertLoginFailure() {
    await expect(this.error_message).toContainText("Your username or password is invalid!");
  }
}
