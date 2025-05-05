import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'

import loginPage from '../pageobjects/login.page.js';

// Given('I am on the home page', async () => {
//     await browser.url(`https://www.flipkart.com/`)
//     await browser.pause(3000); // Waits for 3 seconds
// });

// Then(/^switch window to (.*)$/,async (windowId) => {
//     // Get all window handles
//     const handles = await browser.getWindowHandles();
//     await browser.switchWindow(handles[windowId]);
// })

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




