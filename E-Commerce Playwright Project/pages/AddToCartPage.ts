import { Page, Locator, expect } from "@playwright/test";

export class AddToCartPage {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator(".shopping_cart_link");
    this.cartItem = page.locator(".cart_item");
  }

  async addItemToCart(itemName: string) {
    // find product container by its name
    const productCard = this.page.locator(".inventory_item").filter({ hasText: itemName });

    // click the Add to cart button inside that specific product
    await productCard.getByRole("button", { name: "Add to cart" }).click();

    //go to cart
    await this.cartIcon.click();
  }

  async assertItemInCart(itemName: string) {
    await expect(this.cartItem).toContainText(itemName);
  }
}
