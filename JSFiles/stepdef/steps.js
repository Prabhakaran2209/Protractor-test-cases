"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../Pageobjects/calculator");
const protractor_1 = require("protractor");
const angularhomepage_1 = require("../Pageobjects/angularhomepage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let angularhome = new angularhomepage_1.angularhomepage();
cucumber_1.Given('Im in {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == 'calc') {
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
    }
    else if (string == 'angular') {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I enter {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstinput.sendKeys(string);
    yield calc.secondinput.sendKeys(string2);
}));
cucumber_1.Then('The output should be displayed as {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.gobutton.click();
    let text = yield calc.results.getText().then(function (text) {
        console.log(text);
        expect(text).to.equal(string);
    });
}));
cucumber_1.When('I click on link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield angularhome.angularlink.click();
}));
cucumber_1.Then('I landed in another page', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('landed in new page');
}));
cucumber_1.Then('I type {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield angularhome.searchbox.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmL3N0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDBEQUF1RDtBQUN2RCwyQ0FBcUM7QUFDckMsb0VBQWlFO0FBQ2pFLGdEQUF3QjtBQUV4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksV0FBVyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBRXhDLGdCQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUM1QyxJQUFHLE1BQU0sSUFBRSxNQUFNLEVBQ2pCO1FBQ0UsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO0tBQ2hFO1NBQ0ksSUFBSSxNQUFNLElBQUUsU0FBUyxFQUFFO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtLQUM1QztBQUNILENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFRCxlQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDM0QsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNENBQTRDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUNsRSxvRUFBb0U7SUFDaEUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFZO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFFVCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQVEsRUFBRTtJQUM1QixNQUFNLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBTSxNQUFNLEVBQUUsRUFBRTtJQUNwRCxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==