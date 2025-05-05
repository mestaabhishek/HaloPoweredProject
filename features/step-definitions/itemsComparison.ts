import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { stopLoadingIfNecessary } from './utils';

import comparisonPage from '../pageobjects/comparison.page.js';

Given('I am on the home page', async () => {
    await browser.url(`https://www.flipkart.com/`)
    await browser.pause(3000); // Waits for 3 seconds
});

When(/^I enter product with name (.*)$/,async (productname) => {
    await browser.pause(3000); // Waits for 3 seconds
    await comparisonPage.enterProduct(productname)
    await browser.pause(2000); // Waits for 3 seconds
    await browser.keys('Enter'); // Simulates pressing the Enter key
    await browser.pause(3000); // Waits for 3 seconds
})

When(/^click on First Product$/,async () => {
    await stopLoadingIfNecessary();
    await comparisonPage.clickFirstProduct();
    await browser.pause(3000); // Waits for 3 seconds
})

Then(/^switch window to (.*)$/,async (windowId) => {
    // Get all window handles
    const handles = await browser.getWindowHandles();
    await browser.switchWindow(handles[windowId]);
})

When(/^verify the product name as (.*)$/,async (productname) => {
    await comparisonPage.verifyProductName(productname);
    await browser.pause(3000); // Waits for 3 seconds
})

Then(/^click on Compare Button$/,async () => {
    await comparisonPage.clickCompareButton();
    await browser.pause(500); // Waits for 3 seconds
})

When(/^user click on Comparison Button$/,async () => {
    await comparisonPage.clickComparisonButton();
    await browser.pause(1000); // Waits for 3 seconds
})

Then(/^user clicks on Show Difference$/,async () => {
    await comparisonPage.clickShowDifference();
    await browser.pause(3000); // Waits for 3 seconds
})



