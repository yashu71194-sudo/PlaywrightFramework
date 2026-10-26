export class vHomepage{

    linknewlead = "//a[text()='New Lead']";
    linklogout = "//a[text()='Logout']";
    linkleads = "//a[text()='Leads']";
    linkhome = "//a[text()='Home']";


    page: any;

    constructor(page: any){
        this.page = page;
    }

    async verifyHomeLink(): Promise<boolean>{
        return await this.page.locator(this.linkhome).toBeVisible
    }

     async verifyLeadsLink(): Promise<boolean>{
        return await this.page.locator(this.linkleads).toBeVisible
    }
     async verifyNewLeadsLink(): Promise<boolean>{
        return await this.page.locator(this.linknewlead).toBeVisible
    }
     async verifyLogoutLink(): Promise<boolean>{
        return await this.page.locator(this.linklogout).toBeVisible
    }
    async clickNewLeadLink(){
        await this.page.locator(this.linkleads).click();
    }
    async clickLeadsLink(){
        await this.page.locator(this.linknewlead).click();
    }
    async clickHomeLink(){
    await this.page.locator(this.linkhome).click();
    }
    async clickLogoutLink(){
    await this.page.locator(this.linklogout).click();
    }
}
