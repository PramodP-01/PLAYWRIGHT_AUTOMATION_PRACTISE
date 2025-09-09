import { test, expect, chromium, Page } from '@playwright/test';

test.describe('QA Automation Assignment', () => {
    test('Open a webpage and take a screenshot', async ({ page }) => {
        await page.goto('https://example.com');
        await page.screenshot({ path: 'example.png',fullPage: true });
        await page.waitForTimeout(10000);
        await page.close();

    });

    test('Login form automation', async ({ page }) => {
        await page.goto('https://www.saucedemo.com')
        await page.fill('input[id="user-name"]', 'standard_user')
        await page.fill('input[id="password"]', 'secret_sauce')
        await page.click('input[id="login-button"]')
        await page.waitForTimeout(10000);
        await page.close();

    });

    test('Click a button and wait for text', async () => {
    const browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');

    // Wait for the dialog event after clicking the button
    const [dialog] = await Promise.all([
        page.waitForEvent('dialog'),
        page.click('#timerAlertButton')
    ]);
    console.log(dialog.message());
    await dialog.accept();

    await browser.close();
});


}); 


