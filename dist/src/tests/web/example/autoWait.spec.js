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
//Different wait available in Playwright
// 1. waitForTimeout -- Thread.sleep()
// 2. waitForRequest
(0, test_1.test)("test waitForRequest demo", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    const request = yield page.waitForRequest(/ohrm_logo.png/);
    console.log(request.url());
}));
// 3. waitForResponse
(0, test_1.test)("test waitForResponse demo", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield page.waitForResponse(/ohrm_logo.png/);
    console.log(response.request().url());
}));
// 4. waitForUrl
// 5. waitForLoadState
// 6. waitForSelector
(0, test_1.test)("test waitForSelector demo", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    //use below approach than using waitForSelector
    yield (0, test_1.expect)(page.getByAltText("OrangeHRM")).toBeVisible({ timeout: 3000 });
}));
// 7. waitForFunction
(0, test_1.test)("test waitForFunction demo", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.waitForFunction(() => {
        window.scrollBy(0, 600);
    });
}));
// 8. waitForEvent
(0, test_1.test)("test waitForEvent demo", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.waitForEvent("domcontentloaded");
}));
