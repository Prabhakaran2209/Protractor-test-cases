describe('Enter name in a page',function() {
    xit('it should name as prabha',function(){
        
        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('prabha');
        browser.sleep('1000');
        //var title = elemnet(by.xpath("/html/body/div[2]/div[1]/div[2]/div[2]/div/h1"));
        //expect(title.gettext()).toEqual('Hello prabha!');
    });
});

describe ('free crm title test',function (){
    it('should get title test',function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        // element(by.model('first')).sendKeys('21');
        // browser.sleep('4000');
        // element(by.model('second')).sendKeys('21');
        // browser.sleep('4000');
        // element(by.id('gobutton')).click;
        // browser.sleep('20000');
    });
});

