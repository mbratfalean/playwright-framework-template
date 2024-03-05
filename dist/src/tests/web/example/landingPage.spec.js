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
const test_1 = require("@playwright/test");
const webHelper_1 = require("../../../helper/web/webHelper");
const landingPage_1 = require("../../../pageobjects/landingPage");
const env_1 = __importDefault(require("utils/env"));
(0, test_1.test)("Test 1 : Test Landing Page", ({ page, browser, }) => __awaiter(void 0, void 0, void 0, function* () {
    const context = yield browser.newContext();
    const webHelper = new webHelper_1.WebHelper(page, context);
    //Open page
    let url = env_1.default.BASE_URL;
    console.log(env_1.default.BASE_URL);
    yield webHelper.navigateToUrl(env_1.default.BASE_URL);
    //Assert
    yield (0, test_1.expect)(page).toHaveTitle(landingPage_1.landingPageTitle);
}));
