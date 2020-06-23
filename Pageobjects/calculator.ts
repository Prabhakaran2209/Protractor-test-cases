import { ElementFinder, element, by } from "protractor";

export class calculator {
    firstinput: ElementFinder;
    secondinput: ElementFinder;
    gobutton: ElementFinder;
    results: ElementFinder;

    constructor() {
        this.firstinput = element(by.model('first'));
        this.secondinput = element(by.model('second'));
        this.gobutton = element(by.id('gobutton'));
        this.results = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
        
    }
}