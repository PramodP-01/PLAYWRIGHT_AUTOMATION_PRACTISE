import { test, expect } from '@playwright/test';

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


}); 