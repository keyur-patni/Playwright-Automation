import {test, expect} from '@playwright/test'

test('Demo login Test 1', async({page}) => {
 
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByRole('textbox', { name: 'Enter your username'}).fill('Durden')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('1234')
    await page.getByRole('link', { name: 'Sign in' }).click()


})

test('Demo login Test 2', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()

})

test.only('Demo login Test 3', async({page}) => {

    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    // await page.pause()
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com')
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin')
    await page.getByRole('button', { name: 'Log in' }).click()

})
