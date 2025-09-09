import { test, expect, chromium, Page } from '@playwright/test';
test.describe('Tests with beforeEach hook', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/elements');
    });

    test('Interact with text box element', async ({ page }) => {
        await page.click('text=Text Box');
        await page.getByPlaceholder('Full Name').fill('Pramod Rocky');
        await page.locator('#userEmail').fill('pramod@gmail.com');
        await page.click('#submit');
        await page.waitForTimeout(3000);
    });

    test('Interact with checkbox element', async ({ page }) => {
        await page.click('text=Check Box');
        await page.click('button[title="Toggle"]');
        await page.locator("//label[@for='tree-node-documents']/span[@class='rct-checkbox']").click();
        await page.waitForTimeout(3000);
    });
});