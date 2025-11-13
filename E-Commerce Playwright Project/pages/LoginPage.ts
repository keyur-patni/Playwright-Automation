import { Page, Locator, expect } from "@playwright/test";
export class LoginPage {
  readonly page: Page;
  readonly usernameTextbox: Locator;
  readonly passwordTextbox: Locator;
  readonly loginButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;
  constructor(page: Page) {
    this.page = page;
    this.usernameTextbox = page.getByRole("textbox", { name: "Username" });
    this.passwordTextbox = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.successMessage = page.locator("#flash.success");
    this.errorMessage = page.locator("#flash.error");
  }
  async gotoLoginPage() {
    await this.page.goto("https://www.saucedemo.com/");
  }
  async login(username: string, password: string) {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }
  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.page.locator(".title")).toHaveText("Products");
  }
  async assertLoginFailure() {
    await expect(this.page.locator("[data-test='error']")).toBeVisible();
  }
}
