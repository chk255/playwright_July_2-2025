// Step by Step process:

// 1. Launch the url
// 2. Wait for popup event to appear on the - const page1 = page.waitForEvent('popup')
// 3. Identify and click on the element which is responsible for generation of a popup event
// 4. wait for the successfull result from the waitForEvent() - const newPage = await page1
// 5. Perform any action on the new page/window - our main control for that becomes the newPage.locator()
// 6. Come back to the original page and perform some action - page



import {test ,expect} from '@playwright/test'

test("Handelling Multiple Windows" ,  async({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html");

    await page.waitForLoadState()

    const context=page.waitForEvent('popup');
    await page.locator("//button[contains(text(),'click')]").first().click();
    const newPage= await context;
    await newPage.getByText('Downloads').click();
    await expect(newPage.locator('#bindings')).toContainText("WebDriver Language");
    await page.bringToFront()
    await page.getByText('Home').click();
    await page.waitForTimeout(2000)


})