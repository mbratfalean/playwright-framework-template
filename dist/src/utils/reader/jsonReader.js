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
exports.JsonReader = void 0;
const util_1 = require("util");
const fs_1 = __importDefault(require("fs"));
class JsonReader {
    constructor(fileName) {
        this.jsonData = "";
        this.fileName = fileName;
        this.readFile = (0, util_1.promisify)(fs_1.default.readFile);
        this.jsonData = this.readJson();
    }
    readJson() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield JSON.parse(this.readFile(this.fileName, "utf-8"));
        });
    }
    //function to read a given path and return the data
    getParamData(jsonPath) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    //function to return all element matching keyType & keyVal
    getTabName() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    //
    getParamLabels(jsonHierarchy) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getAllParamsInHierarchy(jsonHierarchy) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getEndPointNames() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.JsonReader = JsonReader;
