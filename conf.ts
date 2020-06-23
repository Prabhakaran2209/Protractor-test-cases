import {Config} from "protractor";

export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub/',
    directConnect: true,
    specs: ['testspec.js'],

    capabilities: {
        'browserName': 'chrome'
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