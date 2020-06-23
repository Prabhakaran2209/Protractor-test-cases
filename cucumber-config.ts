import {Config} from "protractor";
var reporter = require('cucumber-html-reporter');

export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub/',
    directConnect: true,
    specs: ['../feature/demo.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        'browserName': 'chrome'
    },

    cucumberOpts: {
      //tags: "@Angulartesting",
      format: 'json:./cucumberreport.json',

      require: [
        './stepdef/*.js', // accepts a glob
      ],
    
        onComplete: () => {
          var options = {
            theme: 'bootstrap',
            //jsonFile: './cucumberreport.json',
            jsonFile: './stepdef/cucumberreport.json',
            output: './cucumberreport_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  83.0.4103.61",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
          };
        reporter.generate(options);
        },
        
        
      }

    // multiCapabilities:  [{
    //     "browserName": 'firefox',
    //     'firefoxOptions': {
    //         //args: ['--verbose'],
    //     },
    //     specs: ['spec2.js']
    //    }, 
    //    {
    //    "browserName": 'chrome',
    //    'chromeOptions': {
    //     args: ['--start-maximized'],
    //    },
    //     specs: ['spec.js']
    // ,
    // }],
}