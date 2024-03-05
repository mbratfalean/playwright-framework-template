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
exports.ApiHelper = void 0;
const test_1 = require("@playwright/test");
const Helper_1 = require("helper/Helper");
const BASE_URL = "https://restful-booker.herokuapp.com";
class ApiHelper extends Helper_1.Helper {
    /**
     * The constructor function initializes a new context for the API.
     * @param {any} apiContext - The `apiContext` parameter is an object that represents the context of an
     * API. It is used to store and manage information related to the API, such as authentication
     * credentials, request headers, and other configuration settings.
     */
    constructor(apiContext) {
        super();
        this.apiContext = apiContext;
        // this.apiContext = apiContext({
        //   extraHTTPHeaders: {
        //     Authorization: `Bearer 12345`,
        //     "Content-Type": `application/json`,
        //   },
        // });
    }
    /**
     * The function `hitApiEndPoint` is an asynchronous function that takes in an operation type, an
     * endpoint, a payload, and a status code, and then invokes the corresponding API method based on the
     * operation type.
     * @param {string} operationType - The `operationType` parameter is a string that specifies the type of
     * operation to be performed on the API endpoint. It can have one of the following values: "get",
     * "post", "delete", or "put".
     * @param {string} endPoint - The `endPoint` parameter is a string that represents the URL or endpoint
     * of the API that you want to hit. It specifies the location where the API is hosted and the specific
     * resource or action you want to perform.
     * @param {object} payload - The `payload` parameter is an object that contains the data to be sent in
     * the request body for POST and PUT operations. It can include any relevant information that needs to
     * be sent to the API endpoint.
     * @param {number} statusCode - The `statusCode` parameter is the expected HTTP status code that the
     * API endpoint should return.
     */
    hitApiEndPoint(operationType, endPoint, payload, statusCode) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (operationType.toLowerCase()) {
                case "get":
                    yield this.invokeGetApi(endPoint, statusCode);
                    break;
                case "post":
                    yield this.invokePostApi(endPoint, payload, statusCode);
                    break;
                case "delete":
                    yield this.invokeDeleteApi(endPoint, statusCode);
                    break;
                case "put":
                    yield this.invokePutApi(endPoint, payload, statusCode);
                    break;
                default:
                    break;
            }
        });
    }
    invokeGetApi(endPoint, statusCode = 200) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                console.log(`Making GET request to  endPoint:  ${BASE_URL}${endPoint}`);
                response = yield this.apiContext.get(`${BASE_URL}${endPoint}`);
                (0, test_1.expect)(response.status(), `API : ${BASE_URL}${endPoint} , Expected status : ${statusCode}, Actual status : ${response.status()}`).toBe(statusCode);
                return yield response.json();
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
    }
    invokeDeleteApi(endPoint, statusCode = 200) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                console.log(`Making DELETE request to  endPoint:  ${BASE_URL}${endPoint}`);
                response = yield this.apiContext.delete(`${BASE_URL}${endPoint}`);
                (0, test_1.expect)(response.status(), `API : ${BASE_URL}${endPoint} , Expected status : ${statusCode}, Actual status : ${response.status()}`).toBe(statusCode);
                return yield response.json();
            }
            catch (error) {
                return error;
            }
        });
    }
    /**
     * The function `invokePostApi` is an asynchronous function that sends a POST request to an API
     * endpoint with a payload and returns the response data.
     * @param {string} endPoint - The `endPoint` parameter is a string that represents the URL or endpoint
     * of the API you want to call.
     * @param {object} payload - The `payload` parameter is an object that contains the data to be sent in
     * the request body. It is typically used to send data to the server for processing or to update a
     * resource.
     * @returns the response data as a JSON object if the response status is 200. If there is an error, it
     * will return the error object.
     */
    invokePostApi(endPoint, payload, statusCode = 200) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                let tempPayload = JSON.stringify(payload);
                console.log(`Making POST request to  endPoint:  ${BASE_URL}${endPoint} payload :${tempPayload} `);
                response = yield this.apiContext.post(`${BASE_URL}${endPoint}`, {
                    data: payload,
                });
                (0, test_1.expect)(response.status(), `API : ${BASE_URL}${endPoint} , Expected status : ${statusCode}, Actual status : ${response.status()}`).toBe(statusCode);
                return yield response.json();
            }
            catch (error) {
                return error;
            }
        });
    }
    invokePutApi(endPoint, payload, statusCode = 200) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                console.log(`Making PUT request to  endPoint:  ${BASE_URL}${endPoint} payload :${payload} `);
                response = yield this.apiContext.put(`${BASE_URL}${endPoint}`, {
                    data: payload,
                });
                (0, test_1.expect)(response.status(), `API : ${BASE_URL}${endPoint} , Expected status : ${statusCode}, Actual status : ${response.status()}`).toBe(statusCode);
                return yield response.json();
            }
            catch (error) {
                return error;
            }
        });
    }
    verifyStatusCode(response, statusCode = 200) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, test_1.expect)(response, `${statusCode} status code was not displayed`).toBeOK();
        });
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return "tokenvalue";
        });
    }
}
exports.ApiHelper = ApiHelper;
