import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AddToCartPage } from "../pages/AddToCartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test("complete checkout for a single item", async ({ page }) => {
  const login = new LoginPage(page);
  const cart = new AddToCartPage(page);
  const checkout = new CheckoutPage(page);

  await login.gotoLoginPage();
  await login.login("standard_user", "secret_sauce");

  // Add item
  await cart.addItemToCart("Sauce Labs Backpack");

  // Go to Cart PAGE before checking cart contents
  await cart.goToCart();
  await cart.assertItemInCart("Sauce Labs Backpack");

  // Checkout flow
  await cart.proceedToCheckout();
  await checkout.fillCheckoutInfo("John", "Doe", "12345");
  await checkout.completeOrder();
  await checkout.assertOrderSuccess();
});
