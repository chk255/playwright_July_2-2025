// alerts practice::

import {test , expect} from "@playwright/test"

test("alert handelling" , async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");

   await page.on('dialog' , (dailog)=>{

        console.log(dailog.message());
        expect(dailog.message()).toContain("alert");
        dailog.accept();
    })

   await page.getByText("Simple Alert").click();
   await page.waitForTimeout(3000)
})
test("confirm aler handelling" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog' , (dailog)=>{

        console.log(dailog.message());
        dailog.dismiss();
    })

    await page.locator("//*[@id='confirmBtn']").click();
    await expect(page.locator("#demo")).toContainText("Cancel");

    await page.waitForTimeout(3000)
} )