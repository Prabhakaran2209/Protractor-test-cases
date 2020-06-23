describe('different locators', function(){

    it('All Elements', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');

        function add(a,b) {
            element(by.model('first')).sendKeys(a);
            element(by.model('second')).sendKeys(b);
            element(by.id('gobutton')).click();
        }
      
        add(2,5);
        add(7,3);
        add(8,1);

        element.all(by.repeater("result in memory")).count().then(function(a) {
            console.log(a);
        });

        element.all(by.repeater("result in memory")).each(function(item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text)
            })
        });
        
    });
});