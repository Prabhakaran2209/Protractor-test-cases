import { element, by, browser } from "protractor";
import { protractor } from "protractor/built/ptor";

describe('Non Angular sync', function(){

    it('sync', function(){
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
        element(by.css("a[href='javascript: void(0);loadAjax();']")).click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id("loader"))) , 8000)
        element(by.id('results')).getText().then(function(text) {
            console.log(text);
        })
    });
});