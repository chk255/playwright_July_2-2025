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

	let sourceCity='Dehradun';
	let destCity='Delhi';
	let passengerName='Chandan Kumar';
	let age='35';
	let gender='Male';
	let insurance='Yes';
	let state='Bihar';
	let dateOfJourney='28';

	// Launching REDBUS URL
    await page.goto("https://www.redbus.in/");

	const header=page.locator("//h1");
	await expect(header).toBeVisible;
	await expect(header).toContainText('India');

	// 1. Search route: Any route you can pick
    await page.locator("(//div[contains(@class,'srcDestWrapper')])[1]").click();
    await page.locator('#srcDest').first().pressSequentially('Dehra');
    await page.waitForTimeout(2000);
    const sourceSuggestionList= await page.$$("//div[contains(@class,searchSuggestionWrapper) and @role='listbox']/div/div/div/div/div");
    for(const sourceSuggestion of sourceSuggestionList ){
    const source=await sourceSuggestion.textContent();
    if(source === sourceCity) {
				await sourceSuggestion.click();
				break;
			}
 }

    await expect(page.locator("//div[contains(@class,'labelCityWrapper')]/div[2]").first()).toHaveText(sourceCity);
 
    await page.locator('#srcDest').last().pressSequentially('Delh');
    const destSuggestionList= await page.$$("//div[contains(@class,searchSuggestionWrapper) and @role='listbox']/div/div/div/div/div");
    for(const destSuggestion of destSuggestionList ){
    const dest=await destSuggestion.textContent();
    if(dest === destCity) {
				await destSuggestion.click();
				break;
			}
}
 await expect(page.locator("//div[contains(@class,'labelCityWrapper')]/div[2]").last()).toHaveText(destCity);
//2. Select Date
await page.locator("//div[contains(@class,'dateInputWrapper') and @role='button']").click();
const datepickers=await page.$$("//div[contains(@class,'datePickerWrapper')]/div[2]/div/ul/li/div/div/span");
//div[contains(@class,'monthYearHolidayWrap')]/p
//i[contains(@aria-label,'Next month')]
for(const datepicker of datepickers){
  const date=await datepicker.textContent();
  if(date == dateOfJourney){
  await  datepicker.click();
  }
}

await expect(page.locator("//div[contains(@class,'dojWrapper')]/span[2]")).toContainText(dateOfJourney);
//  3. Click Search Buses
await page.locator("//button[contains(@class,'primaryButton')]").click();

//  4. Apply filters:
//  ✔ Primo Bus
//  ✔ Evening Departure
//  ✔ Live Tracking
await page.locator("//div[contains(@aria-label,'Primo Bus')]").click();
await page.locator("//div[contains(@aria-label,'Live Tracking')]").click();
await page.locator("//div[contains(text(),'Departure time from source')]").click();
await page.locator("//div[contains(@class,'filterWrap') and @data-autoid='departureTime']/div[contains(@class,'mainListWrapper')]/div/div/div/div[2][text()='Evening']").click();

//  5. Scroll through results and pick the cheapest bus fare

await page.waitForSelector("//div[contains(@class,'fareWrapper')]/p");
 const busFaresElements=await page.$$("//div[contains(@class,'fareWrapper')]/p");

  let minBusFare = Number.MAX_SAFE_INTEGER;
  console.log(minBusFare);
		for(const busFaresElement of busFaresElements) {
		
       const text = await busFaresElement.textContent(); // e.g. "₹599"
    if (!text) continue;
console.log(text)
        const fareStr = text.replace(/\D/g, '');
    const busFare = Number.parseInt(fareStr);
    console.log(busFare);

			if(busFare<minBusFare) {
				minBusFare=busFare;
			}
      
		}
		console.log('Minimum Bus Fare:', minBusFare);
		await page.locator("//p[contains(text(),'"+minBusFare+"')]").click();

		//  6. Select seat and continue with boarding & dropping points

		page.locator("//div[contains(@class,'seat') and @id='6']").click();
		page.locator("//button[contains(text(),'Select boarding')]").click();
		await page.locator("//div[contains(@class,'bpdp')]/div[contains(text(),'kailash')]").click();
		await page.locator("//div[contains(@class,'bpdp')]/div[contains(text(),'ISBT')]").click();

		//  7. Fill contact/passenger details, opt for insurance, and continue

		//driver.findElement(By.cssSelector("input[placeholder='Phone']")).sendKeys("9811073522");
		//driver.findElement(By.cssSelector("input[placeholder*='email']")).sendKeys("chk@gmail.com");

		await page.locator("//input[contains(@class,'inputField') and @id='0_201']").click();
		await page.locator("//input[contains(@class,'searchInput') and @placeholder='Search for state']").pressSequentially("b");
		await page.locator("//div[contains(text(),'"+state+"')]").click();
		await page.locator("//input[contains(@placeholder,'Enter your')]").fill(passengerName);
		await page.locator("//input[contains(@placeholder,'Enter Age')]").fill(age);
		await page.locator("div[aria-label='"+gender+"']").click();
		await page.locator("//div[contains(text(),'"+insurance+"')]").click();
		await page.locator("//button[contains(text(),'Continue')]").click();
		
		console.log("Success");

}
)