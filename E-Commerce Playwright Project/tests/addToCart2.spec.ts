import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AddToCartPage } from "../pages/AddToCartPage";

test.describe("Add To Cart 2", async () => {
  test("should be able to add specific item", async ({ page }) => {
    const login = new LoginPage(page);
    const cart = new AddToCartPage(page);
    // login
    await login.gotoLoginPage();
    await login.login("standard_user", "secret_sauce");
    // add an item
    await cart.addItemToCart("Sauce Labs Bike Light");
    await cart.assertItemInCart("Sauce Labs Bike Light");
  });
});
