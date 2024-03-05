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
let fakePayloadOrders = { data: [], message: "No Users" };
(0, test_1.default)("Intercept Network call and Fake/Mock API response", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto("http://xxxx.com");
    yield page.route("http://xxxx.com/abc/ird", (route) => __awaiter(void 0, void 0, void 0, function* () {
        //go the response
        const response = yield page.request.fetch(route.request());
        let body = JSON.stringify(fakePayloadOrders);
        //send response to browser and override respond body
        route.fulfill({
            status: 200,
            body: body,
        });
    }));
}));
(0, test_1.default)("Intercept Network request", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto("http://xxxx.com");
    //intercept request send to server & respond by url value passed in route.continue
    yield page.route("http://xxxx.com/abc/ird", (route) => __awaiter(void 0, void 0, void 0, function* () {
        route.continue({
            url: "http://xxxx.com/abc/123455",
        });
    }));
}));
test_1.default.only("Capture Request and Response", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    page.on("request", (request) => {
        console.log(request.url(), request.method());
    });
    page.on("requestfinished", (data) => {
        console.log(data);
    });
    page.on("websocket", (data) => {
        console.log(data.url());
    });
    page.on("console", (msg) => __awaiter(void 0, void 0, void 0, function* () {
        const values = [];
        for (const arg of msg.args())
            values.push(yield arg.jsonValue());
        console.log(...values);
    }));
    page.on("response", (response) => {
        // console.log(response?.status(), response?.body());
        console.log(response === null || response === void 0 ? void 0 : response.status());
    });
    page.on("requestfailed", (request) => {
        var _a;
        console.log(request.url() + " " + ((_a = request.failure()) === null || _a === void 0 ? void 0 : _a.errorText));
    });
    yield page.goto("https://www.flipkart.com");
}));
