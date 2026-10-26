import {test ,expect} from '@playwright/test';
import {vLoginPage} from '../pages/vLoginPage';
import { vHomepage } from '../pages/vHomepage';
import td from '../data/testdata.json';


test('TC01_Invalid_login_test', async ({page})=>{
await page.goto('/')
const VLoginPage = new vLoginPage(page);
VLoginPage.vLogin(td.TC01.username, td.TC01.password)

await expect(VLoginPage.verifyErrorMsg()).toBeTruthy();
})

test('TC02_valid_login_test', async ({page})=>{
await page.goto('/')
const VLoginPage = new vLoginPage(page);
VLoginPage.vLogin(td.TC02.username, td.TC02.password)
await expect (page.locator('//a[text()="Logout"]')).toBeVisible();
const VHomepage = new vHomepage(page);
await expect(VHomepage.verifyHomeLink()).toBeTruthy();


})
