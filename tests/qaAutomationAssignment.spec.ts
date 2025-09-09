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

test('Fill a form',async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.getByPlaceholder('Full Name').fill('Pramod Rocky');
    await page.locator('#userEmail').fill('pramod@gmail.com');
    await page.getByPlaceholder('Current Address').fill('no 38 4th h cross jodibhavi road');
    await page.locator('#permanentAddress').fill('no 38 4th h cross jodibhavi road');
    await page.click('#submit');
    await page.waitForTimeout(10000);
    await page.close();
})

test('Verify title of a page',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    const pageTitle=await page.title();
    await expect(page).toHaveTitle('The Internet');
    await page.waitForTimeout(10000);
    await page.close();
})


test('Check and click a checkbox od document if not selected',async({page})=>{
    await page.goto('https://demoqa.com/checkbox');
    await page.click('button[title="Toggle"]');
    const is_checke=await page.locator("//label[@for='tree-node-documents']/span[@class='rct-checkbox']").isChecked();
    if(!is_checke){
        await page.locator("//label[@for='tree-node-documents']/span[@class='rct-checkbox']").click();
    }
    await page.waitForTimeout(10000);
    await page.close();
   
})

test('Wait for an element before interacting',async({page})=>{  
    await page.goto('https://demoqa.com/dynamic-properties');
    await page.waitForSelector('button[id=visibleAfter]',{state:'visible'});
    await page.click('button[id=visibleAfter]');
    await page.waitForTimeout(10000);
    await page.close();
})

test('Click a link that opens a new tab',async({page})=>{
    await page.goto('https://demoqa.com/browser-windows');
    const [newPage]=await Promise.all([
        page.context().waitForEvent('page'),
        page.locator('#tabButton').click()
    ])
    await newPage.waitForTimeout(10000);
     // verify heading
     const heading=await newPage.locator('h1').textContent();
     await expect(heading).toBe('This is a sample page');
     await newPage.close();
})

test('Select item from dropdown',async({page})=>{
    await page.goto('https://demoqa.com/select-menu');
    await page.selectOption('#oldSelectMenu', {'value':'Yellow'});
    await page.waitForTimeout(10000);
    await page.close();
})

test('Click the 3rd item in a list',async({page})=>{
    await page.goto('https://demoqa.com/menu#');
    await page.locator('#nav li').nth(2).click();
    await page.waitForTimeout(10000);
    await page.close();
})








}); 


