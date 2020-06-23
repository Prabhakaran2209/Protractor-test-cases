import { element, browser } from "protractor";

describe('Practice session', function(){

    it('forms', function(){
        browser.manage().window().maximize();
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.name('name')).sendKeys("prabhakaran");
        element(by.css("input[name='email']")).sendKeys("prabhakaran.@email.com");
        element(by.id('exampleInputPassword1')).sendKeys("fdghhhhh");
        element(by.css('input[type="checkbox"]')).click();
        element(by.cssContainingText("[class='form-control'] option", 'Female')).click();
       
        expect(element(by.css('input[id="inlineRadio2"]')).isSelected()).toBeFalsy();
        element.all(by.name('inlineRadioOptions')).get(0).click();
        expect(element.all(by.name('inlineRadioOptions')).get(0).isSelected()).toBeTruthy();
        browser.sleep(5000);
        element(by.buttonText('Submit')).click();
        expect(element(by.className("alert alert-success")).isDisplayed()).toBeTruthy();
        element(by.className("alert alert-success")).getText().then(function(text){
            console.log(text);
        })

        //to capture error messages
        element(by.name('name')).clear();
        element(by.name('name')).sendKeys("p");
        browser.sleep(7000);
        element(by.css("[class='alert alert-danger']")).getText().then(function(error){
               console.log(error);
             })
        
        element(by.name('name')).clear();
        browser.sleep(4000)
        element(by.css("[class='alert alert-danger']")).getText().then(function(error1){
            console.log(error1);
        })
    });
});