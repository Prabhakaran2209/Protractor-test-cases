describe('different locators', function(){

    it('ng repeater', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);

        
        element(by.model('second')).sendKeys(8);
        element(by.id('gobutton')).click();

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        })
    });
});