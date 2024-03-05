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
(0, test_1.default)("Take Screenshot of Page", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    //Take screenshot of full page
    yield page.screenshot({ path: "screenshot.png" });
}));
(0, test_1.default)("Take Screenshot of Element", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    //Take screenshot of an element
    yield page.goto("http://xxx.com");
    yield page.getByTestId("todo-item").screenshot({ path: "screenshot.png" });
}));
