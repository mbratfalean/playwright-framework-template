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
const apiHelper_1 = require("../../../helper/api/apiHelper");
let token;
let bookingId;
test_1.test.beforeAll(({ request }) => __awaiter(void 0, void 0, void 0, function* () {
    //1. Hit /Auth Api and provide username/password as body
    //2. fetch token value from JSON response
    //3. save in token variable
    const apiHelper = yield new apiHelper_1.ApiHelper(request);
    const responseMsg = yield apiHelper.invokePostApi("/auth", {
        username: "admin",
        password: "password123",
    });
    (0, test_1.expect)(responseMsg.token);
    token = responseMsg.token;
    console.log(token);
}));
(0, test_1.test)("Get booking list and verify response -- No Authentication Required ", ({ request, }) => __awaiter(void 0, void 0, void 0, function* () {
    /* Test Flow
      1. Hit API endpoint
      2. Verify API status code
      3. Verify JSON Response
      4. Verify JSON Schema
    */
    test_1.test.info().annotations.push({
        type: "purpose",
        description: "This will make GET call to https://restful-booker.herokuapp.com/booking with no authentication",
    });
    const apiHelper = yield new apiHelper_1.ApiHelper(request); //
    const responseMsg = yield apiHelper.invokeGetApi("/booking");
    console.log(JSON.stringify(responseMsg));
    for (let index = 0; index < responseMsg.length; index++) {
        test_1.test.info().annotations.push({
            type: "value",
            description: `BookingId : ${responseMsg[index].bookingid}`,
        });
        (0, test_1.expect)(responseMsg[index].bookingid).not.toBeNull();
    }
}));
(0, test_1.test)("Get Booking Details using BookingID --> 1914", ({ request }) => __awaiter(void 0, void 0, void 0, function* () {
    /* Test Flow
      1. Hit API endpoint
      2. Verify API status code
      3. Verify JSON Response
      4. Verify JSON Schema
    */
    test_1.test.info().annotations.push({
        type: "purpose",
        description: "This will make GET call to https://restful-booker.herokuapp.com/booking/:id and verify keys/values in response",
    });
    const apiHelper = yield new apiHelper_1.ApiHelper(request); //
    const bookingDetails = yield apiHelper.invokeGetApi("/booking/1914");
    console.log(JSON.stringify(bookingDetails));
    (0, test_1.expect)(bookingDetails.firstname).toBe("John");
    (0, test_1.expect)(bookingDetails.lastname).toBe("Allen");
    (0, test_1.expect)(bookingDetails.totalprice).toBe(111);
    (0, test_1.expect)(bookingDetails.depositpaid).toBeTruthy();
    (0, test_1.expect)(apiHelper.isValidDate(bookingDetails.bookingdates.checkin)).toBe(true);
    (0, test_1.expect)(apiHelper.isValidDate(bookingDetails.bookingdates.checkout)).toBe(true);
    (0, test_1.expect)(bookingDetails.additionalneeds).toBe("super bowls");
}));
(0, test_1.test)("Get booking list, pass to booking/:id API and verify response -- No Authentication Required ", ({ request, }) => __awaiter(void 0, void 0, void 0, function* () {
    /* Test Flow
      1. Hit API endpoint
      2. Verify API status code
      3. Verify JSON Response
      4. Verify JSON Schema
    */
    test_1.test.info().annotations.push({
        type: "purpose",
        description: "This will make GET call to https://restful-booker.herokuapp.com/booking with no authentication",
    });
    const apiHelper = yield new apiHelper_1.ApiHelper(request); //
    const responseMsg = yield apiHelper.invokeGetApi("/booking");
    console.log(JSON.stringify(responseMsg));
    for (let index = 0; index < responseMsg.length; index++) {
        test_1.test.info().annotations.push({
            type: "value",
            description: `BookingId : ${responseMsg[index].bookingid}`,
        });
        (0, test_1.expect)(responseMsg[index].bookingid).not.toBeNull();
        let bookingDetail = yield apiHelper.invokeGetApi(`/booking/${responseMsg[index].bookingid}`);
        console.log(JSON.stringify(bookingDetail));
    }
}));
//API used for writing test code - https://restful-booker.herokuapp.com/apidoc/index.html
