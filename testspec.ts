import { browser, element, by, $ } from 'protractor';
import { calculator } from './Pageobjects/calculator';
import { angularhomepage } from './Pageobjects/angularhomepage';

describe('different locators', async () => {
    browser.manage().window().maximize();

    it('ng repeater', async () => {
        let calc = new calculator();
        browser.get('https://juliemr.github.io/protractor-demo/');
        calc.firstinput.sendKeys('8');
        calc.secondinput.sendKeys('7');
        calc.gobutton.click();
        let text = await calc.results.getText();
        console.log(text);
    });

    it("get title", async () => {
        await browser.get("https://angularjs.org/");
        let angularhome = new angularhomepage();
        angularhome.angularlink.click();
        angularhome.searchbox.sendKeys('hello');
        browser.sleep(3000);
    })
});