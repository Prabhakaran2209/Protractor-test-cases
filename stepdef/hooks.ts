import { browser } from "protractor";

var {After, Before} = require('cucumber');

Before({tags: "@Angulartesting"}, function () {
    browser.manage().window().maximize();
  });

After(async function(scenario) {
    console.log("Testing completed")
    if(scenario.result.status=== 'failed'){
      const screenshot = await browser.takeScreenshot();
      this.attach(screenshot, "image/png");
    }
});