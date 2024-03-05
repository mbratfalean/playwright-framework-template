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
class BasePage {
    constructor(page) {
        this.page = page;
    }
    open(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.goto(url);
        });
    }
    getTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.title();
        });
    }
    pause() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.pause();
        });
    }
    getUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.url();
        });
    }
    wait() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.waitForTimeout(10000);
        });
    }
    waitForPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.waitForLoadState('domcontentloaded');
        });
    }
    waitAndClick(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.click(selector);
        });
    }
    waitAndHardClick(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.$eval(selector, element => element.click());
        });
    }
    waitAndFill(selector, text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.fill(selector, text);
        });
    }
    keyPress(selector, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.press(selector, key);
        });
    }
    takeScreenShot() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, test_1.expect)(yield this.page.screenshot()).toMatchSnapshot('MyScreenShot.png');
        });
    }
    verifyElementContainsText(selector, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const locatorText = yield this.page.locator(selector);
            return yield (0, test_1.expect)(locatorText).toContainText(text);
        });
    }
    verifyJSElementValue(selector, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const textValue = yield this.page.$eval(selector, element => element.value);
            return (0, test_1.expect)(textValue.trim()).toBe(text);
        });
    }
    selectValueFromDropdown(selector, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const dropdown = yield this.page.locator(selector);
            return yield dropdown.selectOption({ value: text });
        });
    }
    getFirstElementFromTheList(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const rows = yield this.page.locator(selector);
            const count = yield rows.count();
            for (let i = 0; i < count; ++i) {
                const firstItem = yield rows.nth(0).textContent();
                return firstItem;
            }
        });
    }
    getLastElementFromTheList(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const rows = yield this.page.locator(selector);
            const count = yield rows.count();
            for (let i = 0; i < count; ++i) {
                const lastItem = yield rows.nth(5).textContent();
                return lastItem;
            }
        });
    }
    clickAllElements(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const rows = yield this.page.locator(selector);
            const count = 2;
            for (let i = 0; i < count; ++i) {
                yield rows.nth(i).click();
            }
        });
    }
    isElementVisible(selector, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this.page.locator(selector);
            try {
                const isVisible = yield element.isVisible();
                (0, test_1.expect)(isVisible).toBeTruthy();
            }
            catch (error) {
                throw new Error(`${errorMessage}`);
            }
        });
    }
    isElementNotVisible(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this.page.locator(selector);
            return (0, test_1.expect)(element).toBeHidden;
        });
    }
    isElementEnabled(selector, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this.page.locator(selector);
            try {
                const isEnabled = yield element.isEnabled();
                (0, test_1.expect)(isEnabled).toBeTruthy();
            }
            catch (error) {
                throw new Error(`${errorMessage}`);
            }
        });
    }
    isElementChecked(selector, errorMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this.page.locator(selector);
            try {
                const isChecked = yield element.isChecked();
                (0, test_1.expect)(isChecked).toBeTruthy();
            }
            catch (error) {
                throw new Error(`${errorMessage}`);
            }
        });
    }
}
exports.default = BasePage;
function range(count) {
    throw new Error('Function not implemented.');
}
