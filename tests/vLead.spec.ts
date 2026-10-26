import {test ,expect} from '@playwright/test';
import {vLoginPage} from '../pages/vLoginPage';
import {vHomepage} from '../pages/vHomepage';
import { vleadpage } from '../pages/vleadpage';
import td from '../data/testdata.json';



test('TC03_create_leads', async ({page})=>{
await page.goto('/')
const VLoginPage = new vLoginPage(page);
await VLoginPage.vLogin(td.TC03.username, td.TC03.password)
const VHomepage = new vHomepage(page);
await expect(VHomepage.verifyHomeLink()).toBeTruthy();
await VHomepage.clickNewLeadLink();
const Vleadpage = new vleadpage(page);
await Vleadpage.vLead(td.TC03.lastname,td.TC03.company);
await VHomepage.clickLogoutLink();

})


