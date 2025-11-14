import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AddToCartPage } from "../pages/AddToCartPage";

test.describe("Add To Cart", async () => {
  test("should add an item to cart successfully", async ({ page }) => {
    const login = new LoginPage(page);
    const cart = new AddToCartPage(page);

    // login step
    await login.gotoLoginPage();
    await login.login("standard_user", "secret_sauce");

    // add item to cart
    await cart.addItemToCart("Sauce Labs Backpack");

    // Go to cart
    await cart.goToCart();

    // assert item was added successfully
    await cart.assertItemInCart("Sauce Labs Backpack");
  });
});
