export class loginPage{

    usernameInput = "//input[@id='user-name']";
    userPasswordInput = "//input[@id='user-name']";
    loginButton = "//input[@id='user-name']";
    errorMessage = '//*[contains(text(), "you must specify a valid username and password")]'
   
    page: any;
    
    constructor(page: any){
        this.page = page;
    }

    async login(userid: string, password: string){
        await this.setUserName(userid);
        await this.setPassword(password);
        await this.clickLogin();
    }
    async setUserName(userid : string){
    await this.page.locator(this.usernameInput).fill('standard_user');
    }

    async setPassword(password: string){
    await this.page.locator(this.userPasswordInput).fill('standard_user');
    }

    async clickLogin(){
    await this.page.locator(this.loginButton).fill('standard_user');
    }
}