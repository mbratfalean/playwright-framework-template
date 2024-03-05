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
(0, test_1.default)(`Generate HAR file`, ({ page: Page }, testInfo) => __awaiter(void 0, void 0, void 0, function* () {
    // To record HAR file, use "update:true", below code will create a directory named har and
    //store all the har related files in it
    yield Page.routeFromHAR("har/example.har", { update: true });
    /* The `await testInfo.attach(`HAR FILE`, { path: `../../../../har/example.har` });` line is
    attaching the generated HAR file to the test report. It allows the HAR file to be easily
    accessible and viewable alongside the test results. The `path` parameter specifies the location of
    the HAR file. */
    yield testInfo.attach(`HAR FILE`, { path: `../../../../har/example.har` });
}));
