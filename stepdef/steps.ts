import { Given, When, Then } from "cucumber";
import { calculator } from '../Pageobjects/calculator';
import { browser } from "protractor";
import { angularhomepage } from '../Pageobjects/angularhomepage';
import chai from "chai";

var expect = chai.expect;
let calc = new calculator();
let angularhome = new angularhomepage();

Given('Im in {string} site', async (string) => {
  if(string=='calc')
  {
    await browser.get("https://juliemr.github.io/protractor-demo/")
  }
  else if (string=='angular') {
    await browser.get("https://angularjs.org/")
  }    
});

  When('I enter {string} and {string}', async(string, string2) => {
      await calc.firstinput.sendKeys(string);
      await calc.secondinput.sendKeys(string2);
  });

  Then('The output should be displayed as {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
        await calc.gobutton.click();
        let text = await calc.results.getText().then(function (text: String) {
             console.log(text);
             expect(text).to.equal(string);
        });
        
  });

  When('I click on link', async() => {
        await angularhome.angularlink.click();
  });

  Then('I landed in another page', async () => {
    console.log('landed in new page')
  });

  Then('I type {string} in search box', async(string) => {
    await angularhome.searchbox.sendKeys(string);
  });

