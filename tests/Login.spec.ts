import {test ,expect} from '@playwright/test';
import { loginPage } from '../pages/loginpage';

test('valid login test', async ({page})=>{

    await page.goto('/')
    const loginpage = new loginPage(page);
    loginpage.login('standard_user','secret_sauce')

// await expect(page).toHaveTitle("Swag Labs");
// await expect(page).toHaveURL("https://www.saucedemo.com/");
await expect(page.locator("//div[text()='Swag Labs']")).toHaveText("Swag Labs");

})

test('Invalid login test', async ({page})=>{

    await page.goto('/')
    const loginpage = new loginPage(page);
    loginpage.login('error_user','secret_sauce')
    await expect(page.locator("//div[text()='Swag Labs']")).toHaveText("Swag Labs");

// await expect(page).toHaveTitle("Swag Labs");
// await expect(page).toHaveURL("https://www.saucedemo.com/");
// await page.waitForTimeout(3000);
// await page.locator("//input[@id='user-name']").fill('standard_user');
// await page.locator("//input[@id='password']").fill('secret_sauce');
// await page.locator("//input[@id='login-button']").click();

})
test('git commit login test2', async ({page})=>{

    await page.goto('/')
    const loginpage = new loginPage(page);
    loginpage.login('error_user','secret_sauce')
    await expect(page.locator("//div[text()='Swag Labs']")).toHaveText("Swag Labs");})

