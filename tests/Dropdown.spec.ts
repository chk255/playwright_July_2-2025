

import {test,expect} from '@playwright/test'

test("validating Select Dropdown" , async({page})=>{

await    page.goto("https://practice.expandtesting.com/dropdown");
await    page.locator('#country').scrollIntoViewIfNeeded();
await    page.locator('#country').selectOption({value:'AO'});

await    page.waitForTimeout(3000);
await    page.locator('#country').selectOption({label:'Afghanistan'});
await    page.waitForTimeout(3000);

await page.goto("https://demoqa.com/select-menu");
await page.locator('#cars').selectOption([{value:'opel'},{label:'Audi'},{index:1}]);

    
})

test("Handelling Dropdown using non Select tag", async({page})=>{

    await page.goto("https://demoqa.com/select-menu");
     await page.locator("div.css-1hwfws3").first().click()
    await page.locator("#react-select-2-option-2").click()
    await page.waitForTimeout(2000)

    await page.locator("div.css-1hwfws3").last().click()
    await page.getByText("Blue", {exact: true}).last().click()
    await page.locator("#react-select-4-option-3").click()
    await page.locator("#react-select-4-option-2").click()
    await page.waitForTimeout(2000)
})