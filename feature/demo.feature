Feature: To validate calc functionality
@calculator
Scenario Outline: calc addition

Given Im in "calc" site
When I enter "<input1>" and "<input2>"
Then The output should be displayed as "<output>"

Examples:
|input1|input2|output|
|2|2|4|
|7|3|11|

@Angulartesting
Scenario Outline: Angular page navigation

Given Im in "angular" site
When I click on link
Then I landed in another page
Then I type "<key>" in search box

Examples:
| key | 
| hello  | 
| protractor|
| API | 



