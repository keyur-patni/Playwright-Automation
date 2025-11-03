import {test, expect, chromium} from '@playwright/test';

test ('slowmo and video recording demo', async() => {
    
    // launch browser
    const browsers = await chromium.launch({

        headless:false,
        slowMo: 1000
    });

    // create a context for browser
    const context = await browsers.newContext({

        recordVideo: {
            dir:'videos/',
            size: {width:800, height: 600}
        }
    });

    const page = await context.newPage();

    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    // await page.pause()
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+c');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+c');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();

    await context.close();
    

})