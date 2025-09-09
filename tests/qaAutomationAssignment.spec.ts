import { test, expect } from '@playwright/test';

test.describe('QA Automation Assignment', () => {
    test('should open the website', async ({ page }) => {
        await page.goto('https://www.google.com');
        await expect(page).toHaveTitle('Google');
    });
    
}); 