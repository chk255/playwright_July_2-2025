import { test, expect } from '@playwright/test';
test('Launch URL', async({page})=>{

await page.goto("https://www.google.com/");
console.log("Page Launched Successfully");

})