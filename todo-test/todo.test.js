const {test, expect} = require('@playwright/test')
const pageUrl = 'http://127.0.0.1:5500/to-do-app/';

// Test 1: Test If a User Can Go to Page

test('User can go to Page', async ({page})=> {
await page.goto(pageUrl);
await expect(page).toHaveURL(pageUrl);
});

