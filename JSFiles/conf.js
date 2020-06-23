"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRVcsUUFBQSxNQUFNLEdBQVc7SUFDeEIsbURBQW1EO0lBQ25ELGFBQWEsRUFBRSxJQUFJO0lBQ25CLEtBQUssRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUV0QixZQUFZLEVBQUU7UUFDVixhQUFhLEVBQUUsUUFBUTtLQUMxQjtJQUVELHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixJQUFJO0lBQ0osTUFBTTtDQUNULENBQUEifQ==