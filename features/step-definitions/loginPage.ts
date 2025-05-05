import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js';

When(/^user clicks on Login Button$/,async () => {
    await browser.pause(3000); // Waits for 3 seconds
    await loginPage.clickLoginButton();
})

Given(/^user provides value as (.*)$/,async (userCreds) => {
    await loginPage.userInput(userCreds);
})

Then(/^click on Request OTP$/,async () => {
    await loginPage.requestOTP();
})

Then(/^verify error message as (.*)$/,async (message) => {
    await loginPage.verifyErrorMessage(message);
})




