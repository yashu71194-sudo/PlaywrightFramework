import {test ,expect} from '@playwright/test';
import { loginPage } from '../pages/loginpage';

test('book order', async ({page})=>{
page.goto("/");
const loginpage = new loginPage(page);
loginpage.login('standard_user','secret_sauce')
await expect(page.locator("//div[text()='Swag Labs']")).toHaveText("Swag Labs");

})