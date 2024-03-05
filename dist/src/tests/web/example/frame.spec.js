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
const test_1 = __importDefault(require("@playwright/test"));
const webHelper_1 = require("../../../helper/web/webHelper");
(0, test_1.default)("iframe", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto("http://rahulshettyacademy.com/AutomationPractice/");
    const framesPage = yield page.frameLocator("#courses-iframe");
    framesPage.locator("li a[href*='lifetime-access]:visible").click();
    const textCheck = yield framesPage.locator(".text h2").textContent();
    console.log(textCheck);
}));
(0, test_1.default)("Test 2 : Operation on frame", ({ page, browser }) => __awaiter(void 0, void 0, void 0, function* () {
    const context = yield browser.newContext();
    const webHelper = new webHelper_1.WebHelper(page, context);
    const frameOne = yield webHelper.getFrame("iframe[name='courses-iframe']");
}));
