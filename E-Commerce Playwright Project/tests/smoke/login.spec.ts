import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
test.describe("Login Test", () => {
  test("should login successfully with valid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    // Step 1: Go to login page
    await login.gotoLoginPage();

    // Step 2: Enter valid username & password
    await login.login("standard_user", "secret_sauce");

    // Step 3: Assert login success
    await login.assertLoginSuccess();

    // (Optional) I can also double-check visually or by URL:
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator(".title")).toHaveText("Products");
  });
  test("should show error for invalid credentials", async ({ page }) => {
    const login = new LoginPage(page);
    // Step 1: Go to login page
    await login.gotoLoginPage();

    // Step 2: Enter invalid username & password
    await login.login("wrongUsername", "wrongPassword");

    // Step 3: Assert login failure
    await login.assertLoginFailure();

    // (Optional) I can also double-check via locater:
    await expect(page.locator("[data-test='error']")).toContainText("Username and password do not match any user");
  });
});
