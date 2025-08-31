import {test , expect} from '@playwright/test'
import { execPath } from 'process';

test("Validating RadioButton and Checkbox" , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#male").check();
    await expect(page.locator("#male")).toBeChecked();
    await expect(page.getByLabel("Female")).not.toBeChecked;

    await page.getByLabel("Tuesday" , {exact:true}).click();
    await expect(page.getByLabel("Tuesday" , {exact:true})).toBeChecked();

    await page.getByLabel("Tuesday" , {exact:true}).uncheck();
    await expect(page.getByLabel("Tuesday" , {exact:true})).not.toBeChecked();





})