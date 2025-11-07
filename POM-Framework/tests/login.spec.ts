import { test } from "@playwright/test";
import { LoginPage } from "../pages/login";

test.describe("Login Tests", () => {
  test("should login successfully with valid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("tomsmith", "SuperSecretPassword!");
    await login.assertLoginSuccess();
  });

  test("should show error for invalid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("wrongUser", "wrongPass");
    await login.assertLoginFailure();
  });
});
