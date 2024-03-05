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
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const webHelper_js_1 = require("../../../helper/web/webHelper.js");
let webContext;
/* The `test.beforeAll()` function is a hook provided by the Playwright test framework. It is used to
run a setup function before all the tests in a test file. In this hook, we will login into application and save login details in state.json file
test.beforeAll(
  "Login into web app through browser and save login detail in JSON",
  async ({ browser }) => {
    const browserContext = await browser.newContext();
    const webPage = await browserContext.newPage();
    const webHelper = new WebHelper(webPage, browserContext);
    webHelper.navigateToUrl("www.gmail.com");

    //write code to login in gmail

    await browserContext.storageState({ path: "state.json" });
    webContext = await browserContext.newContext({
      storageState: "state.json",
    });
    await webPage.close();
  }
); */
/* The code you provided is a test case that logs into a web application using the saved login state. */
(0, test_1.test)("Login into web app using saved login state", () => __awaiter(void 0, void 0, void 0, function* () {
    const webPage = yield webContext.newPage();
    const webHelper = new webHelper_js_1.WebHelper(webPage, webContext);
    webHelper.navigateToUrl("www.gmail.com"); // Browser will open page using login details saved in test.beforeAll() step
}));
