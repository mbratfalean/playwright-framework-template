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
const test_1 = require("@playwright/test");
const webHelper_1 = require("../../../helper/web/webHelper");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
(0, test_1.test)("File Download Test ", ({ page, browser }) => __awaiter(void 0, void 0, void 0, function* () {
    const context = yield browser.newContext();
    const webHelper = new webHelper_1.WebHelper(page, context);
    //Arrange
    const expectedFileName = "fileToDownload.txt";
    const downloadFolderPath = path_1.default.resolve(__dirname, "../test-data"); // path to the folder where the downloaded file will be saved
    const savePath = path_1.default.join(downloadFolderPath, expectedFileName);
    //Action
    yield webHelper.downLoadFile(expectedFileName, downloadFolderPath, "locatorOfDownloadLink");
    //Assert
    (0, test_1.expect)(fs_1.default.existsSync(savePath)).toBeTruthy();
    //Clean up : remove downloaded file
    fs_1.default.unlinkSync(savePath);
}));
