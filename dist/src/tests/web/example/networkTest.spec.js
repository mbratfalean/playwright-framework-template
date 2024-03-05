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
const apiHelper_1 = require("../../../helper/api/apiHelper");
let token;
test_1.default.beforeAll(({ browser }) => __awaiter(void 0, void 0, void 0, function* () {
    const context = yield browser.newContext();
    const apiContent = yield context.newPage();
    const apiHelper = new apiHelper_1.ApiHelper(apiContent);
    //save token value returned from getToken() function in token variable
    token = yield apiHelper.getToken();
}));
(0, test_1.default)("Network Test -> Inject token generated through API into browser", ({ page, }) => __awaiter(void 0, void 0, void 0, function* () {
    //executed JavaScript to inject token into browser
    page.addInitScript((value) => {
        window.localStorage.setItem("token", value);
    }, token);
    //when script hits URL, browser will open as logged in using above generated  token
    yield page.goto("https://www.xxxx.com");
}));
