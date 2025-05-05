import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ComparisonPage {
    
    public get inputSearchBox() {
        return $("input[name='q']");
    }

    public get firstProduct() {
        const element =  $$("//div[@class='KzDlHZ']")
        return element[0];
    }

    public get productName() {
        return $('span.VU-ZEz');
    }

    public get compareButton() {
        const ele = $$('div.XqNaEv')
        return ele[0];
    }

    public get comparisonButton() {
        return $('span.vYpSTw');
    }

    public get showDiference() {
        return $('div.XqNaEv');
    }


    
    public async enterProduct(productname: any) {
        await this.inputSearchBox.clearValue();
        await browser.pause(2000); // Waits for 2 seconds
        await this.inputSearchBox.setValue(productname);
    }

    public async clickFirstProduct() {
        await this.firstProduct.click();
    }

    public async verifyProductName(productName: any) {
        const ele = await this.productName.getText();
        await expect(ele).toContain(productName);
    }

    public async clickCompareButton() {
        await this.compareButton.click();
    }

    public async clickComparisonButton() {
        await this.comparisonButton.click();
    }

    public async clickShowDifference() {
        await this.showDiference.click();
    }
}

export default new ComparisonPage();
