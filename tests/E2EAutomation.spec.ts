import {test, expect} from '@playwright/test';

test("E2E Automation", async({page})=>{

    let userEmail="chk255@gmail.com";
    let password="Ckumar@2426";
    let product="IPHONE 13 PRO";
    let country="India";

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator('#userEmail').fill(userEmail);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();
    await expect(page.locator(".fa-sign-out")).toBeVisible();

   
 
     const products=page.locator("div.card-body");

     await products.first().waitFor();

     const productCount=await products.count();
    for(let i=0;i<productCount;i++){

        const productName=await products.nth(i).locator("h5").textContent();

        if(productName === product){

           await products.nth(i).locator("button").last().click();
           break;
        }
    }
     //await page.waitForTimeout(3000);

    // await page.locator("#toast-container").waitFor();
     await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart");
     //await page.waitForTimeout(3000);
     await expect(page.locator("#toast-container")).toBeHidden();
    await page.locator("(//button[@class='btn btn-custom'])[3]").click();
    await expect(page.locator("//h1[text()='My Cart']")).toBeVisible();
    //await page.waitForTimeout(3000);
    //await page.getByRole('button', {name:'Checkout'}).click();

    await page.locator("ul.cartWrap").first().waitFor();
    await expect(page.locator("div[class='cart']")).toBeVisible();
    await page.locator("//button[text()='Checkout']").waitFor();
    await page.locator("//button[text()='Checkout']").click();

    page.locator("div.user__name.mt-5 input").first().waitFor();
    await expect(page.locator("div.user__name.mt-5 input").first()).toHaveValue(userEmail);
    await page.locator("div.user__name.mt-5 input").last().pressSequentially('ind');

    const countrydropdown=await page.locator("section.ta-results button");

    await countrydropdown.first().waitFor();

    const countryCount=await countrydropdown.count();
    for(let i=0;i<countryCount;i++){
       
       const countryName=await countrydropdown.nth(i).innerText();
       if(countryName.trim() === country){
        
        countrydropdown.nth(i).click();
        break;

       }

    }

    await page.locator("//a[text()='Place Order ']").click();
    await expect(page.locator("h1.hero-primary")).toContainText("Thankyou");

    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId)

    // Clicking on Order button to land on OrderHistory page.
    await page.locator("(//button[@class='btn btn-custom'])[2]").click();

    // Getting All OrderId from the Table
    const tableOrderids= page.locator("//table/tbody/tr/th");

    tableOrderids.first().waitFor();

    // Count of all entires
    const tableOrderidCount=await tableOrderids.count();

    console.log(tableOrderidCount);

    // Checking OrderId exist in Order History Table
    for(let i=0;i<tableOrderidCount;i++){

       const tableOrderid= await tableOrderids.nth(i).innerText();
       if(orderId?.includes(tableOrderid)){
        console.log("Order History Contains Current OrderID")
        console.log(tableOrderid);
        console.log(orderId);
        break;

       }else{
         console.log("OrderId not Found in Order History Table")
       }

    }






})
