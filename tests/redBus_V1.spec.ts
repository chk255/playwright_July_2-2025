// 1. Search route: Any route you can pick
//  2. Select current week's Saturday
//  3. Click Search Buses
//  4. Apply filters:
//  ✔ Primo Bus
//  ✔ Evening Departure
//  ✔ Live Tracking
//  5. Scroll through results and pick the cheapest bus fare
//  6. Select seat and continue with boarding & dropping points
//  7. Fill contact/passenger details, opt for insurance, and continue

import {test,expect} from "@playwright/test";

test("REDBUS E2E Automation V1", async({page})=>{

    await page.goto("https://www.redbus.in/");

    await page.locator("(//div[contains(@class,'srcDestWrapper')])[1]").click();
   
await page.locator('#srcDest').first().pressSequentially('Dehra');

await page.waitForTimeout(2000)
 const sourceSuggestionList= await page.$$("//div[contains(@class,searchSuggestionWrapper) and @role='listbox']/div/div/div/div/div")

 for(const sourceSuggestion of sourceSuggestionList ){

  const source=await sourceSuggestion.textContent();

  if(source === "Dehradun") {
				await sourceSuggestion.click();
				break;
			}

 }
//  const focusedElement = await page.evaluate(() => {
//   const el = document.activeElement;
//   return {
//     tag: el.tagName,
//     id: el.id
//   };
// });
// console.log(focusedElement); // Example output: { tag: 'INPUT', id: 'src' }

await page.locator('#srcDest').last().pressSequentially('Delh');

//await page.waitForTimeout(4000)
 const destSuggestionList= await page.$$("//div[contains(@class,searchSuggestionWrapper) and @role='listbox']/div/div/div/div/div")

 for(const destSuggestion of destSuggestionList ){

  const dest=await destSuggestion.textContent();

  if(dest === "Delhi") {
				await destSuggestion.click();
				break;
			}
}

await page.locator("//div[contains(@class,'dateInputWrapper') and @role='button']").click();
//await page.waitForTimeout(4000)

const datepickers=await page.$$("//div[contains(@class,'datePickerWrapper')]/div[2]/div/ul/li/div/div/span");

for(const datepicker of datepickers){

  const date=await datepicker.textContent();

  if(date == '28'){

  await  datepicker.click();

  }
}

await page.locator("//button[contains(@class,'primaryButton')]").click();

await page.locator("//div[contains(@aria-label,'Primo Bus')]").click();
await page.locator("//div[contains(@aria-label,'Live Tracking')]").click();
await page.locator("//div[contains(text(),'Departure time from source')]").click();

await page.locator("//div[contains(@class,'filterWrap') and @data-autoid='departureTime']/div[contains(@class,'mainListWrapper')]/div/div/div/div[2][text()='Evening']").click();


await page.waitForSelector("//div[contains(@class,'fareWrapper')]/p");
 const busFaresElements=await page.$$("xpath=//div[contains(@class,'fareWrapper')]/p");

// const totalbusFares=await busFares.count();
  let minBusFare = Number.MAX_SAFE_INTEGER;
  let minFareElement: null | typeof busFaresElements[0] = null;
  console.log(minBusFare);
		for(const busFaresElement of busFaresElements) {
		
       const text = await busFaresElement.textContent(); // e.g. "₹599"
    if (!text) continue;
console.log(text)
        const fareStr = text.replace(/\D/g, '');
    const busFare = parseInt(fareStr, 10);
    console.log(busFare);

			//console.log(busFare);
			if(busFare<minBusFare) {
				
				minBusFare=busFare;
        minFareElement = busFaresElement;
			}
      
		}
		console.log('Minimum Bus Fare:', minBusFare);
		
		if (minFareElement) {
    await minFareElement.click();
  } else {
    throw new Error('No bus fares found!');
  }
		page.locator("//div[contains(@class,'seat') and @id='6']").click();
		page.locator("//button[contains(text(),'Select boarding')]").click();
		
		await page.locator("//div[contains(@class,'bpdp')]/div[contains(text(),'kailash')]").click();
		await page.locator("//div[contains(@class,'bpdp')]/div[contains(text(),'ISBT')]").click();
		
		
		//driver.findElement(By.cssSelector("input[placeholder='Phone']")).sendKeys("9811073522");
		//driver.findElement(By.cssSelector("input[placeholder*='email']")).sendKeys("chk@gmail.com");
		
		await page.locator("//input[contains(@class,'inputField') and @id='0_201']").click();
		
		
		await page.locator("//input[contains(@class,'searchInput') and @placeholder='Search for state']").pressSequentially("b");
		
		await page.locator("//div[contains(text(),'Bihar')]").click();
		
		await page.locator("//input[contains(@placeholder,'Enter your')]").fill("Chandan");
		await page.locator("//input[contains(@placeholder,'Enter Age')]").fill("25");
		await page.locator("div[aria-label='Male']").click();
		
		await page.locator("//div[contains(text(),'Yes')]").click();
		
		await page.locator("//button[contains(text(),'Continue')]").click();
		
		console.log("Success");

}
)