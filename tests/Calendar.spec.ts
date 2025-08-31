
// **********************
import {test,expect} from '@playwright/test';

test("Calendar Automation" , async({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html");

    await page.getByTitle('Calendar-icon').click();

    const day='5';
    const month='September';
    const year='2027';
    await page.waitForTimeout(3000);

    const monthPicker=page.locator('.ui-datepicker-month');
   const yearPicker= page.locator('.ui-datepicker-year');
   //const dayPicker=page.getByText('30');

    while((await monthPicker.textContent()!=month) || (await yearPicker.textContent()!=year)){

        await page.getByText('Next').click();
        
    }
    await page.getByText(day , {exact:true}).click();
    await expect(page.locator('#sixth_date_picker')).toHaveValue('09/05/2027')
   
await page.waitForTimeout(3000);
})