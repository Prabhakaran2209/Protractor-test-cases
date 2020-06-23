describe('different locators', function() {

    function calc(a,b,c) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        //element(by.id('gobutton')).click();

        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(values) {
                //console.log(values)
        if(values == c){
            item.click();
        }
            }); 
        });

        element(by.id('gobutton')).click();
    }

    


    it('get all dropdown values', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');  
        
        calc(3,3,"MULTIPLICATION");
        calc(1,2,"ADDITION");
        calc(8,2,"DIVISION"); 

        element.all(by.repeater("result in memory")).each(function(item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text)
            })
        });

    });
});