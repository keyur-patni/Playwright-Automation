import { Page, Locator, expect } from "@playwright/test";

export class AddToCartPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator(".shopping_cart_link");
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
  }

  async addItemToCart(itemNames: string | string[]) {
    const items: string[] = Array.isArray(itemNames) ? itemNames : [itemNames];

    for (const itemName of items) {
      const productCard = this.page.locator(".inventory_item").filter({ hasText: itemName });

      await productCard.getByRole("button", { name: "Add to cart" }).click();
    }
  }

  async assertItemInCart(itemNames: string | string[]) {
    const items: string[] = Array.isArray(itemNames) ? itemNames : [itemNames];

    for (const itemName of items) {
      const row = this.page.locator(".cart_item").filter({ hasText: itemName });

      await expect(row).toContainText(itemName);
    }
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async proceedToCheckout() {
    await this.goToCart();
    await this.checkoutButton.click();
  }
}
