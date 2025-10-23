import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect title to contain substring
  await expect(page).toHaveTitle(/Playwright/);

  // Create locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Check link href
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the link
  await getStarted.click();

  // Expect URL to contain /docs/intro
  await expect(page).toHaveURL(/.*intro/);
});
