import { element, browser } from "protractor";

describe('Practice session', function(){

    function selectitem(product) {
        element.all(by.tagName('app-card')).each(function(item){
            item.element(by.css("h4[class='card-title'] a")).getText().then(function(text) {
                if(text == "Samsung Note 8") 
                    item.element(by.buttonText('Add')).click();
            });
        });
    };

    it('forms', function(){
        browser.manage().window().maximize();
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.css("a[href='/protocommerce/shop']")).click();
        
        selectitem('Samsung Note 8')
        browser.sleep(4000)
        expect(element(by.partialLinkText("Checkout")).getText()).toContain('1');
        selectitem('iphone X')
        expect(element(by.partialLinkText("Checkout")).getText()).toContain('2');
        element(by.partialLinkText("Checkout")).click();

        element.all(by.css("td[class='col-sm-1 col-md-1 text-center']")).get(0).getText().then(function(amount){
            console.log(amount)
        })
            
        
    });
});
