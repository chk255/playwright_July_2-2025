
import {test,expect} from '@playwright/test';

test("Calendar Automation" , async({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html");

   // await page.getByTitle('Calendar-icon').click();
    await page.locator(".ui-datepicker-trigger").click();

    const targetDay=5;
    const targetMonth="May";
    const targetYear=2023;
    

    const monthPicker=page.locator('.ui-datepicker-month');
   const yearPicker= page.locator('.ui-datepicker-year');
  
   const monthNames=["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    function getMonthIndex(monthName){

        return monthNames.indexOf(monthName);
    }
   

   while(true){

    const currentMonth=await monthPicker.textContent();
    const currentYear=Number(await yearPicker.textContent());



    if(currentMonth === targetMonth && currentYear === targetYear){
         break;
    }
    const currentMonthIndex  = getMonthIndex(currentMonth)
    const targetMonthIndex = getMonthIndex(targetMonth)
    if(currentYear > targetYear || (currentYear === targetYear && currentMonthIndex > targetMonthIndex )){

        await page.getByText("Prev").last().click();
    }
    else{
        await page.getByText('Next').click();
    }

   }
   
    await page.getByText(targetDay.toString() , {exact:true}).last().click();
    

    const monthNumber=(getMonthIndex(targetMonth)+1).toString().padStart(2,'0');
    const dateNumber=targetDay.toString().padStart(2,'0');

    const expectedDate=`${monthNumber}/${dateNumber}/${targetYear}`;

    await expect(page.locator('#sixth_date_picker')).toHaveValue(expectedDate);



})