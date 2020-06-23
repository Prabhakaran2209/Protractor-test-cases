"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var reporter = require('cucumber-html-reporter');
exports.config = {
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
            './stepdef/*.js',
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
                    "App Version": "0.3.2",
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXItY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBRXRDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLG1EQUFtRDtJQUNuRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixLQUFLLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztJQUNsQyxTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCxZQUFZLEVBQUU7UUFDVixhQUFhLEVBQUUsUUFBUTtLQUMxQjtJQUVELFlBQVksRUFBRTtRQUNaLDBCQUEwQjtRQUMxQixNQUFNLEVBQUUsNEJBQTRCO1FBRXBDLE9BQU8sRUFBRTtZQUNQLGdCQUFnQjtTQUNqQjtRQUVDLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFDZixJQUFJLE9BQU8sR0FBRztnQkFDWixLQUFLLEVBQUUsV0FBVztnQkFDbEIsb0NBQW9DO2dCQUNwQyxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxNQUFNLEVBQUUsOEJBQThCO2dCQUN0QyxzQkFBc0IsRUFBRSxJQUFJO2dCQUM1QixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFO29CQUNOLGFBQWEsRUFBQyxPQUFPO29CQUNyQixrQkFBa0IsRUFBRSxTQUFTO29CQUM3QixTQUFTLEVBQUUsc0JBQXNCO29CQUNqQyxVQUFVLEVBQUUsWUFBWTtvQkFDeEIsVUFBVSxFQUFFLFdBQVc7b0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2lCQUN2QjthQUNGLENBQUM7WUFDSixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUM7S0FHRjtJQUVILHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixJQUFJO0lBQ0osTUFBTTtDQUNULENBQUEifQ==