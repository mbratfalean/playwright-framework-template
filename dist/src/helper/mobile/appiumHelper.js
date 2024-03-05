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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppiumHelper = void 0;
const webdriverio_1 = require("webdriverio");
let appiumPort = 4723;
const envAppiumPort = process.env.APPIUM_PORT;
if (envAppiumPort != null) {
    appiumPort = parseInt(envAppiumPort, 10);
}
const appiumOptions = {
    hostname: (_a = process.env.APPIUM_HOST) !== null && _a !== void 0 ? _a : "127.0.0.1",
    port: appiumPort,
    logLevel: "info",
    capabilities: {},
};
class AppiumHelper {
    init(capabilities) {
        return __awaiter(this, void 0, void 0, function* () {
            appiumOptions.capabilities = capabilities;
            this.driver = yield (0, webdriverio_1.remote)(appiumOptions);
        });
    }
    quit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.driver == null) {
                return;
            }
            yield this.driver.pause(1000);
            yield this.driver.deleteSession();
        });
    }
    findElement(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.driver == null) {
                throw new Error("Driver is not initialized");
            }
            return yield this.driver.$(selector);
        });
    }
}
exports.AppiumHelper = AppiumHelper;
//https://medium.com/meero-engineering/kickstarting-mobile-testing-a-journey-with-appium-and-typescript-89b62d311069
