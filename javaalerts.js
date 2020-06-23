import { element, by, browser } from "protractor";

describe('handle alerts in non angular website', function(){

    it('alerts', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');
        element(by.id('confirmbtn')).click();
        //browser.sleep(2000);

        //browser.switchTo().alert().accept();
        browser.switchTo().alert().dismiss();
        
        
    });
});