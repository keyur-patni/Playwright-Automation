import {test, expect} from '@playwright/test'

test('Assertion Demo', async({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()

    // Assertions
    // Check if element is present
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    // If condition
    if (await page.getByRole('heading', { name: 'The Kitchen' }).isVisible()) {
    await page.getByRole('heading', { name: 'The Kitchen' }).click();
}

    // Check if element is hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    // Check if element is enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    // Check text 
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen')

    // Check attribute value
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute ('class', 'chakra-heading css-dpmy2a')
    // Incase a complete class value is not available, this is how to provide partial value
    // await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute ('class', /.*css-dpmy2a/)

    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveAttribute('class', 'chakra-heading css-dpmy2a')

    // Can also check value via class function as below
    // await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass (/.*css-dpmy2a/)
    // await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass('chakra-heading css-dpmy2a')

    // Check page URL
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    // Can also check with a partial URL
    // await expect(page).toHaveURL(/.*kitchen.app/)
    
    // Check page Title
    await expect(page).toHaveTitle('The Kitchen')
    // Can also check with a partial Title
    //await (expect(page).toHaveTitle(/.*Kitchen/))

    // Visual Validation with a screenshot
    await expect(page).toHaveScreenshot()


})

// *** Defining goto URL as a constant ***

// import { test, expect } from '@playwright/test';

// test('Assertion Demo', async ({ page }) => {
//   await page.goto('https://kitchen.applitools.com/');
//   await page.pause();

//   const heading = page.getByRole('heading', { name: 'The Kitchen' });

//   // Check if element is present
//   await expect(heading).toHaveCount(1);

//   // Click if visible
//   if (await heading.isVisible()) {
//     await heading.click();
//   }

//   // Visibility assertions
//   await expect(heading).toBeVisible();
//   await expect(heading).toBeHidden(); // This will fail unless the element is hidden after click

//   // Enabled/Disabled assertions
//   await expect(heading).toBeEnabled();
//   await expect(heading).toBeDisabled(); // This will fail unless the element becomes disabled
// });
