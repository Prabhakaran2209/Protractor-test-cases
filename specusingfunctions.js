describe('list of elements', function(){

    var firstelement = element(by.model('first'));
    var secondelement = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));
    var history = element.all(by.repeater('result in memory'));

    beforeEach(function() {
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    function add(a,b){
        firstelement.sendKeys(a);
        secondelement.sendKeys(b);
        browser.sleep(3000);
        gobutton.click();
    }

    it('check the result',function(){
        add(1,1);
        add(2,3);
        add(3,3);
        expect(history.count()).toEqual(3);
        add(8,8);
        add(6,3);
        expect(history.count()).toEqual(5);
    });
});