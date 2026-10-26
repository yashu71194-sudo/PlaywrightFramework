export class leadpage{

    productverify = "//span[text()='Products']";
   // errorMessage = '//*[contains(text(), "you must specify a valid username and password")]'
   
    page: any;
    
    constructor(page: any){
        this.page = page;
    }


    async verifyProduct() : Promise<boolean>{
       return await this.page.locator(this.verifyProduct).toHaveText("Products");
    }
}