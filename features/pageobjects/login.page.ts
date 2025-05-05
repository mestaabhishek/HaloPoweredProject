import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
   
    public get loginButton() {
        return $("//span[contains(text(),'Login')]");
    }

    public get userCredsInput() {
        return $("input.r4vIwl")
    }

    public get requestOtpButton() {
        return $("button.QqFHMw");
    }
    
    public get errorMessage() {
        return $("span.llBOFA");
    }
    
    public async clickLoginButton() {
        await this.loginButton.click();
    }

    public async userInput(value: any) {
        await this.userCredsInput.setValue('');
        await this.userCredsInput.setValue(value);
    }

    public async requestOTP() {
        await this.requestOtpButton.click();
    }

    public async verifyErrorMessage(message: any) {
        const ele = await this.errorMessage.getText();
        await expect(ele).toContain(message);
    }
}

export default new LoginPage();
