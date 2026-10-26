export class vLoginPage{

    usernameInput = "//input[@name='user_name']";
    passwordInput = "//input[@name='user_password']";
    LoginButton = "//input[@name='Login']";
    errorMsg = "//*[contains(text(),'You must specify a valid username and password.')]"



    page: any;

    constructor(page: any){
        this.page = page;
    }

    async vLogin(userid: string, password: string){
       await this.setUserName(userid);
       await this.setPassword(password);
       await this.clickLogin();
       await this.verifyErrorMsg();
       
    }

        async setUserName(userid: string){
            await this.page.locator(this.usernameInput).fill(userid);
        }
        async setPassword(password: string){
             await this.page.locator(this.passwordInput).fill(password);
        }
        async clickLogin(){
             await this.page.locator(this.LoginButton).click();
        }
        async verifyErrorMsg(): Promise<boolean>{
            return await this.page.locator(this.errorMsg).toBeVisible();
        }

        
    }

