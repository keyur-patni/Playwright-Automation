import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AddToCartPage } from "../pages/AddToCartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test("Multi-Item Cart Test", async ({ page }) => {
  const login = new LoginPage(page);
  const cart = new AddToCartPage(page);
  const checkout = new CheckoutPage(page);

  // Login
  await login.gotoLoginPage();
  await login.login("standard_user", "secret_sauce");

  const items = ["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Fleece Jacket"];

  // Add items to cart
  await cart.addItemToCart(items); // <- Array support!

  // Go to cart
  await cart.goToCart();
  await cart.assertItemInCart(items);
});
