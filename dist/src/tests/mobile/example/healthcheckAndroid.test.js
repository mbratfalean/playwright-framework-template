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
const androidCapabilities = {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Android",
    "appium:appPackage": "com.android.settings",
    "appium:appActivity": ".Settings",
    "appium:locale": "US",
    "appium:language": "en",
};
describe("Healthcheck Android Appium connection", function () {
    let app;
    before(() => __awaiter(this, void 0, void 0, function* () {
        app = new appiumHelper_1.AppiumHelper();
        yield app.init(androidCapabilities);
    }));
    after(() => __awaiter(this, void 0, void 0, function* () {
        yield app.quit();
    }));
    it("checks battery level on Settings App", () => __awaiter(this, void 0, void 0, function* () {
        const imageButton = yield app.findElement("android.widget.ImageButton");
        yield imageButton.click();
        const editText = yield app.findElement("android=new UiSelector().className(android.widget.EditText)");
        yield editText.click();
        yield editText.setValue("bat");
        const linearLayout = yield app.findElement("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.LinearLayout[3]/android.widget.LinearLayout");
        yield linearLayout.click();
        const progressBar = yield app.findElement("android=new UiSelector().className(android.widget.ProgressBar)");
        yield progressBar.isDisplayed();
    }));
});
