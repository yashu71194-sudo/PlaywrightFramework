export class vleadpage{

    lastnameInput = "//input[@name='lastname']";
    companyInput = "//input[@name='company']";
    saveButton = "//input[@name='button'])[1]";
  

    page: any;

    constructor(page: any){
        this.page = page;
    }

    async vLead(lastname: string, company: string){
       await this.LastName(lastname);
    //   await this.page.waitForTimeout(2000);   //it will show input
       await this.setCompany(company);
       await this.clickSave();
       
    }

        async LastName(lastname: string){
            await this.page.locator(this.lastnameInput).fill(lastname);
        }
        async setCompany(company: string){
             await this.page.locator(this.companyInput).fill(company);
        }
        async clickSave(){
             await this.page.locator(this.saveButton).click();
        }

        
    }

