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
const appiumHelper_1 = require("../../../helper/mobile/appiumHelper");
const iOSVersion = "16.4";
const capabilities = {
    platformName: "iOS",
    "appium:platformVersion": iOSVersion,
    "appium:deviceName": "iPhone 13 Pro Max",
    "appium:automationName": "XCUITest",
    "appium:app": "com.apple.Preferences",
    "appium:locale": "US",
    "appium:language": "en",
};
describe("Healthcheck iOS Appium connection", function () {
    let app;
    before(() => __awaiter(this, void 0, void 0, function* () {
        app = new appiumHelper_1.AppiumHelper();
        yield app.init(capabilities);
    }));
    after(() => __awaiter(this, void 0, void 0, function* () {
        yield app.quit();
    }));
    it("checks iOS version number on Settings App", () => __awaiter(this, void 0, void 0, function* () {
        // Go the the "General" section
        const generalElement = yield app.findElement('//XCUIElementTypeCell[@name="General"]');
        yield generalElement.click();
        // Go the the "About" section
        const aboutElement = yield app.findElement('//XCUIElementTypeCell[@name="About"]');
        yield aboutElement.click();
        // Go the the "iOS Version" section
        const versionElement = yield app.findElement('//XCUIElementTypeCell[@name="iOS Version"]');
        yield versionElement.click();
        // Check the version is the on expected
        const iosVersionElement = yield app.findElement(`//XCUIElementTypeButton[contains(@name, "iOS ${iOSVersion}")]`);
        const isDisplayed = yield iosVersionElement.isDisplayed();
        if (!isDisplayed) {
            throw new Error(`Could not find iOS version label ${iOSVersion} on the device`);
        }
    }));
});
