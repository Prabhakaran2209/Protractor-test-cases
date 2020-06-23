import { ElementFinder, element, by } from "protractor";

export class angularhomepage {
    angularlink: ElementFinder;
    searchbox: ElementFinder;

    constructor() {
        this.angularlink = element(by.linkText('angular.io'));
        this.searchbox = element(by.css('input[type="search"]'));
    }
}