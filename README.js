/*
Installation Guide for macOS
VSCODE : https://code.visualstudio.com/download
Intall : Npm https://docs.npmjs.com/getting-started
intall nodejs https://nodejs.org/en/download/
npm install --save-dev cypress@12.2.0
mkdir SMG QA Challenge && cd SMG QA Challenge
npm init -y
Visit cypress dashboard https://cloud.cypress.io/projects/m7yygs
Add projectId to cypress.config.js
Open Cypress. GUI: npx cypress open
To run all test cases with report to Dashboard: npx cypress run --record --key 726cc7b1-90f4-4ab0-8f43-90497bae87e9

Test cases:
API Automation: ./cypress/e2e/api-automation/mediawiki-search.js
UI Automation: ./cypress/e2e/ui-automation/wikipedia-search-option1.js
UI Automation Handle script and data seperately(not finished): ./cypress/e2e/ui-automation/wikipedia-search-option2.js
*/