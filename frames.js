import { element, by, browser } from "protractor";

describe('Frames in site', function(){

    it('frames', function(){
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');
        //browser.switchTo().frame("courses-iframe");  //-Using id
        browser.switchTo().frame("iframe-name");       //-Using name
        element(by.css("a[href='https://courses.rahulshettyacademy.com/sign_in']")).getText().then(function(text) {
            console.log(text);
        })
    });
});