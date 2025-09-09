import { test, expect } from '@playwright/test';

test.describe('QA Automation Assignment', () => {
    test('Open a webpage and take a screenshot', async ({ page }) => {
        await page.goto('https://example.com');
        await page.screenshot({ path: 'example.png',fullPage: true });
        await page.waitForTimeout(10000);
        await page.close();

    });


}); 