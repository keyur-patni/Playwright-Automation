import { test, expect } from '@playwright/test';

test('login form validation', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // Try submitting empty form
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');

  // Enter wrong username/password
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');

  // Enter correct login (these creds work on this demo site)
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  // Verify successful login
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
});
