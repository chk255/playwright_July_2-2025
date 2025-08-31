import {test , expect} from '@playwright/test'

test("Getting Text value from Element" , async({page})=>{

    await page.goto("https://www.xe.com/currencyconverter/")

    //textcontent

    const text=await page.locator("h1.text-center").textContent();
    console.log(text)

    //static assertion

    await expect(text).toBe("Xe Currency Converter");
     await expect(text).toContain("Converter");


})