"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const test_1 = __importStar(require("@playwright/test"));
const webHelper_1 = require("../../../helper/web/webHelper");
(0, test_1.default)("Test 1 : Subscribe on dialog and call dismiss by clicking on Ok button", ({ page, browser, }) => __awaiter(void 0, void 0, void 0, function* () {
    const context = yield browser.newContext();
    const webHelper = new webHelper_1.WebHelper(page, context);
    const expectedText = "I am JS Alert";
    //setup listener to handle alert box
    webHelper.acceptAlertBox();
    //write code to open alert box
    yield webHelper.clickByText("click to open alert box");
    //Assert
    (0, test_1.expect)(yield webHelper.getAlertText()).toBe(expectedText);
}));
(0, test_1.default)("Test 2 : Subscribe on dialog and call accept  by clicking on Ok button and dismiss by clicking on Cancel button", ({ page, browser, }) => __awaiter(void 0, void 0, void 0, function* () {
    const context = yield browser.newContext();
    const webHelper = new webHelper_1.WebHelper(page, context);
    const expectedText = "I am JS Confirm box";
    //setup listener to click on Ok button on confirm box
    webHelper.acceptConfirmBox();
    //write code to open alert box
    yield webHelper.clickByText("click to open Confirm box");
    //Assert
    (0, test_1.expect)(yield webHelper.getAlertText()).toBe(expectedText);
    //setup listener to click on Cancel button on confirm box
    webHelper.dismissConfirmBox();
    //write code to open alert box
    yield webHelper.clickByText("click to open Confirm box");
    //Assert
    (0, test_1.expect)(yield webHelper.getAlertText()).toBe(expectedText);
}));
(0, test_1.default)("Test 3 : Subscribe on Prompt, enter text in input box and call accept  by clicking on Ok button", ({ page, browser, }) => __awaiter(void 0, void 0, void 0, function* () {
    const context = yield browser.newContext();
    const webHelper = new webHelper_1.WebHelper(page, context);
    const expectedText = "I am JS Prompt box";
    //setup listener to click on Ok button on confirm box
    webHelper.handlePromptBox(expectedText);
    //write code to open alert box
    yield webHelper.clickByText("click to open Prompt box");
    //Assert
    (0, test_1.expect)(yield webHelper.getAlertText()).toBe(expectedText);
}));
