describe('multiple scenarios', function(){

    var firstelement = element(by.model('first'));
    var secondelement = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));

    beforeEach(function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    //testcase 1
    it('should verify the title', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    //testcase2
    it('should add two numbers',function(){
        firstelement.sendKeys(2);
        secondelement.sendKeys(2);
        gobutton.click();
        browser.sleep(3000);
        expect(result.getText()).toEqual('4');
    });

    //testcase3
    it('should add three numbers',function(){
        firstelement.sendKeys(3);
        secondelement.sendKeys(3);
        gobutton.click();
        browser.sleep(3000);
        expect(result.getText()).toEqual('6');
    });

    //testcase4
    it('should read the value from input', function(){
        firstelement.sendKeys(5);
        expect(firstelement.getAttribute('value')).toEqual('5');
    });

}); 