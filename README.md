<h1 text-align="center">Playwright-Framework-Template</h1>

## Tech Stack/Libraries Used

- [PlayWright](https://playwright.dev/) - for web automation
- [PlayWright](https://playwright.dev/) - for Api automation
- [Artillery](https://www.artillery.io/) - for load testing
- [Appium](https://appium.io/docs/en/2.4/) - for mobile app automation
- [ESLint](https://eslint.org/) - pinpoint issues and guide you in rectifying potential problems in both JavaScript and TypeScript.
- [Prettier](https://prettier.io/) - for formatting code & maintain consistent style throughout codebase
- [Dotenv](https://www.dotenv.org/) - to load environment variables from .env file
- [Secrets](https://github.com/du5rte/secrets) - to load secrets from AWS Secrets Manager

## Getting Started

## Project Structure

- `src`
  - `helper`
    - `/api/apiHelper.ts` contains functions for making HTTP requests
    - `/load/loadHelper.ts` contains functions generating load on UI/Api
    - `/mobile/mobileHelper.ts` contains functions for interacting with mobile apps
    - `/web/webHelper.ts` contains functions for interacting with browser
- `tests` contains utility functions
  - `api` place to write api tests
    - `example` contains example api tests using this framework
  - `web` place to write web tests
    - `example` contains example api tests using this framework
  - `load` place to write load tests
    - `example` contains example api tests using this framework
  - `mobile` place to write mobile tests
    - `example` contains example api tests using this framework
- `utils` contains utility functions
  - `config` contains config files
  - `report` contains report function files
  - `dataStore.js` acts as a in-memory data store. It is used to save data that needs to be shared between different test case
- `test-results` contains test results
- `har` contains har file generated by playwright tests
- `logs` contains logs

### Prerequisite

- `nodejs`: Download and install Node JS from
  > `https://nodejs.org/en/download`
- `Visual Studio Code/Aqua/IntelliJ`: Download and install code editor

### Installation

- clone the repo using below URL

- Navigate to folder and install npm packages using:

  > `npm install`

- For first time installation use below command to download required browsers:

  > `npx playwright install`

- In case you want to do fresh setup of playwright
  - Create a folder & run command `npm init playwright@latest`
  - select `TypeScript` & select default for other options

## Usage

- For browser configuration, change required parameters in playwright.config.ts
- To run your suite on MS Azure, copy the below code in `azure-pipeline.yml` and `playwright.service.config.ts` to root folder, update following key & run your suite
  - PLAYWRIGHT_SERVICE_ACCESS_TOKEN
  - PLAYWRIGHT_SERVICE_URL=XXX

## How to generate Playwright code (Playwright Test Generator)

- run command `npx playwright codegen`
- Browser gets opened & navigate to web app & perform test actions

Playwright test generator generates tests and pick locator for you. It uses role,text and test ID locators.

To pick a locator, run the `codegen` command followed by URL, `npx playwright codegen https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`

## Writing Tests

- Create test files in `src/tests` folder

## Sample Test

### Unit/Integration Testing

### Sample Web Load Test

### Sample API Load Test

### Sample Mobile Test

## Run Test

### To Run Web Test

- `npx playwright test (name-of-file.spec.ts) --headed` to run test in ui mode
- `npx playwright test (name-of-file.spec.ts) --headed --config=playwright.config.chrome.ts` to run test in ui mode on chrome browser
- `npx playwright test (name-of-file.spec.ts) --headed --config=playwright.config.firefox.ts` to run test in ui mode on firefox browser
- `npx playwright test (name-of-file.spec.ts) --headed --config=playwright.config.edge.ts` to run test in ui mode on edge browser

### To Run Api Test

### To Run Mobile Test

### To Run Test Multiple Times in Parallel

`npx playwright test --workers=5 --headed --repeat-each=5`

- This will run test 5 times, at a time 5 instance will run. `--workers=5` will run 5 instances

### To Run Test Multiple Times in Sequence

`npx playwright test --workers=1 --headed --repeat-each=5`

- This will run test 5 times, at a time single instance will run, `--repeat-each=5` will run 5 times

### To Run Load Test using Artillery & PlayWright Suite

`artillery run artillery-script.yml --output report.json`

### Grouping and Organizing Test Suite in PlayWright

`npx playwright test --grep @smoke` This will run only test tagged as @smoke

## Debug And Analyze

### View Trace Result of PlayWright Execution

- Open `https://trace.playwright.dev`
- Upload `trace.zip` file to above site, it will show trace details

### Run test in debug mode

`npx playwright test UIBasictest.spec.js --debug`

This will start running script in debug mode & open PlayWright inspector

### How to generate load test report using artillery + Playwright

`artillery report report.json --output report.html`

#### Run & Generate Report

## GitHub Actions - created workflow to run test