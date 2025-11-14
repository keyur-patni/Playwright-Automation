import { Page, Locator, expect } from "@playwright/test";

export class AddToCartPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly checkoutButton: Locator;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator(".shopping_cart_link");
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.cartItem = page.locator(".cart_item");
  }

  async addItemToCart(itemName: string) {
    const productCard = this.page.locator(".inventory_item").filter({ hasText: itemName });

    await productCard.getByRole("button", { name: "Add to cart" }).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async assertItemInCart(itemName: string) {
    await expect(this.cartItem).toContainText(itemName);
  }

  async proceedToCheckout() {
    await this.goToCart();
    await this.checkoutButton.click();
  }
}
