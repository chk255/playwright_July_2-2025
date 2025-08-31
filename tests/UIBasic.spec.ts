import {test,expect} from '@playwright/test'

test("Fill and Validate textbox", async ({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    ////input[@id='username']


    //fill(value)==>fill the valuein textbox;
    //pressSequentially==>enter the value character by character

    await page.locator("//input[@id='username']").fill("student");
    await  expect(page.locator("#username")).toHaveValue("student");

    //await page.getByLabel('password').fill('password');
    await page.fill('#password',"Password123");
    await expect(page.getByLabel('password')).toHaveValue('Password123');

    await page.getByRole('button' , {name:'submit'}).click();

    await expect(page.locator('h1.post-title')).toBeVisible();
     await expect(page.locator('h1.post-title')).toHaveText("Logged In Successfully");
     await expect(page.locator('h1.post-title')).toContainText("Logged In");





})

