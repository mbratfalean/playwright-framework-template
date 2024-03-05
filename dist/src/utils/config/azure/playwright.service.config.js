"use strict";
/*
 * This file enables Playwright client to connect to remote browsers.
 * It should be placed in the same directory as playwright.config.ts.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const playwright_config_1 = __importDefault(require("./playwright.config"));
const dotenv_1 = __importDefault(require("dotenv"));
// Define environment on the dev box in .env file:
//  .env:
//    PLAYWRIGHT_SERVICE_ACCESS_TOKEN=XXX
//    PLAYWRIGHT_SERVICE_URL=XXX
// Define environment in your GitHub workflow spec.
//  env:
//    PLAYWRIGHT_SERVICE_ACCESS_TOKEN: ${{ secrets.PLAYWRIGHT_SERVICE_ACCESS_TOKEN }}
//    PLAYWRIGHT_SERVICE_URL: ${{ secrets.PLAYWRIGHT_SERVICE_URL }}
//    PLAYWRIGHT_SERVICE_RUN_ID: ${{ github.run_id }}-${{ github.run_attempt }}-${{ github.sha }}
dotenv_1.default.config();
// Name the test run if it's not named yet.
process.env.PLAYWRIGHT_SERVICE_RUN_ID = process.env.PLAYWRIGHT_SERVICE_RUN_ID || new Date().toISOString();
// Can be 'linux' or 'windows'.
const os = process.env.PLAYWRIGHT_SERVICE_OS || "linux";
exports.default = (0, test_1.defineConfig)(playwright_config_1.default, {
    // Define more generous timeout for the service operation if necessary.
    // timeout: 60000,
    // expect: {
    //   timeout: 10000,
    // },
    workers: 20,
    // Enable screenshot testing and configure directory with expectations.
    // https://learn.microsoft.com/azure/playwright-testing/how-to-configure-visual-comparisons
    ignoreSnapshots: false,
    snapshotPathTemplate: `{testDir}/__screenshots__/{testFilePath}/${os}/{arg}{ext}`,
    use: {
        // Specify the service endpoint.
        connectOptions: {
            wsEndpoint: `${process.env.PLAYWRIGHT_SERVICE_URL}?cap=${JSON.stringify({
                // Can be 'linux' or 'windows'.
                os,
                runId: process.env.PLAYWRIGHT_SERVICE_RUN_ID,
            })}`,
            timeout: 30000,
            headers: {
                "x-mpt-access-key": process.env.PLAYWRIGHT_SERVICE_ACCESS_TOKEN,
            },
            // Allow service to access the localhost.
            exposeNetwork: "<loopback>",
        },
    },
    // Tenmp workaround for config merge bug in OSS https://github.com/microsoft/playwright/pull/28224
    projects: playwright_config_1.default.projects ? playwright_config_1.default.projects : [{}],
});