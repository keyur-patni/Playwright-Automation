import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameTextbox: Locator;
  readonly lastNameTextbox: Locator;
  readonly postalCodeTextbox: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly orderSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameTextbox = page.getByPlaceholder("First Name");
    this.lastNameTextbox = page.getByPlaceholder("Last Name");
    this.postalCodeTextbox = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.finishButton = page.getByRole("button", { name: "Finish" });
    this.orderSuccessMessage = page.locator(".complete-header");
  }

  async fillCheckoutInfo(firstName: string, lastName: string, postal: string) {
    await this.firstNameTextbox.fill(firstName);
    await this.lastNameTextbox.fill(lastName);
    await this.postalCodeTextbox.fill(postal);
    await this.continueButton.click();
  }

  async completeOrder() {
    await this.finishButton.click();
  }

  async assertOrderSuccess() {
    await expect(this.orderSuccessMessage).toHaveText("Thank you for your order!");
  }
}
