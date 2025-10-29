import { test, expect } from '@playwright/test'

test('Selectors Demo', async({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    // using any objet property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')
    await page.click('id=password')
    await page.locator('id=password').fill('secret_sauce')
    // using CSS selector
    // #login-button
    await page.locator('#login-button').click()
    // using xpath
    // await page,locator('xpath=//input[@name="login-button"]').click()
    // await page.locator('//input[@name="login-button"]').click()

    // using text
    // await page.locator('text=LOGIN').click()
    // await page.locator('input:has-text("LOGIN")').click()

}  )