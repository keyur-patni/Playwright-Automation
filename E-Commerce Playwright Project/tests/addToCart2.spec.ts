import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AddToCartPage } from "../pages/AddToCartPage";

test.describe("Add To Cart 2", async () => {
  test("should be able to add specific item", async ({ page }) => {
    const login = new LoginPage(page);
    const cart = new AddToCartPage(page);

    // Login
    await login.gotoLoginPage();
    await login.login("standard_user", "secret_sauce");

    // Add an item
    await cart.addItemToCart("Sauce Labs Bike Light");

    // Go to cart
    await cart.goToCart();

    // Assert item was added successfully
    await cart.assertItemInCart("Sauce Labs Bike Light");
  });
});
