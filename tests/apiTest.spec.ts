import { test, expect } from '@playwright/test';

test('Real API response', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/apiMock.html');
    await page.click('button');
    
    // Wait for API response and content to load
    await page.waitForTimeout(2000);
    
    const output = await page.locator('#output').textContent();
    expect(output).toContain('Leanne Graham'); // Real user from JSONPlaceholder
});