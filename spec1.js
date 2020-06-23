describe('multiple element', function(){

    it('should add two numbers', function(){

        //if we need to naigate to a page which doesn't use angular, we can turnoff 
        //waiting for angular like below,
        browser.waitforAngularEnabled(false);
        browser.get('www.google.com');

        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(8);
        element(by.id('gobutton')).click();
       
        //Protractor will not resolve promise automatically, so .then
        element(by.css('h2[class=ng-binding')).getText().then(function(text) {
            console.log(text);
        });
        
        //Jasmine takes care of promise resolve internally - expect comes from Jas
        expect(element(by.css('h2[class=ng-binding')).getText()).toEqual('9');
    });
});