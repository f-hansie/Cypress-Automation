# Cypress-Automation

## Project: 
investec_UI_assessment: run web UI functional test on https://www.investec.com/ webisite.

## Description:
-> Navigate to https://www.investec.com/
->Using the search functionality, look for the cash investment rates information page (which is located here: https://www.investec.com/en_za/focus/money/understanding-interest-rates.html)" 
-> Navigate to: “Understanding cash investment interest rates”
-> Sign up to receive focus insights straight to your inbox – you can use test@investec.co.za as the email address
-> Ensure that the sign up process is successful


## Installation or Tools needed to execute the test:
-> cypress version 9.5.2 or latest
-> npm version 7.5.1
-> mocha version = "^9.2.2",
-> mochawesome version ="^7.1.2",
-> mochawesome-merge version= "^4.2.1",
-> mochawesome-report-generator version = "^6.1.1",

## Usage:

- > clone the project from https://github.com/f-hansie/Cypress-Automation.git
- > The test class to execute is located on this path:/cypress/integration/examples/investecWebsiteUIAutomation.js
- > To open the test runner execute the following command on the terminal './node_modules/.bin/cypress open'
- > Then click on investecWebsiteUIAutomation to execute the test
- > If the test fails screenshot will be saved screenshots folder from the project structure
- > To access the html report open the project from folder you saved and open test report folder and select any browser of your choice to view the report results
