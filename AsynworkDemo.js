describe('Enter name in a page',function() {
    it('it should name as prabha',function(){
        
        browser.get('https://angularjs.org/');
        browser.get('https://juliemr.github.io/protractor-demo/').then(function(){
            console.log('I m the laset step'); 
        })
        //browser.sleep('1000');
         
         //Evry JS returns a promise, 
         //promise resembles state of our step
         //1.pending, 2.resolved, 3.rejected
         //Sync - will move to next step only after promise is resolved or rejected
         //Async - JS will not care and move to next, even if promise is pending
         //they will own API saying that 90% of our protractor API will not move to next step if promise is pending
         
    });
});