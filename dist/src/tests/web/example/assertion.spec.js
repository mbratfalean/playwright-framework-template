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
const apiHelper_1 = require("helper/api/apiHelper");
/*
These assertions will retry until the assertion passes, or the assertion timeout is reached.
*/
(0, test_1.test)("Using playwright Auto-Retrying Assertion", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto("https://www.google.com");
    yield (0, test_1.expect)(page).toHaveTitle("Google");
    yield (0, test_1.expect)(page.getByTestId("status")).toHaveText("PASS");
    const locator = yield page.locator("selector");
    const apiContext = yield test_1.request.newContext();
    const apiHelper = new apiHelper_1.ApiHelper(apiContext);
    const response = apiHelper.invokeGetApi("url");
    yield (0, test_1.expect)(locator).toBeAttached(); //Element is attached
    yield (0, test_1.expect)(locator).toBeChecked(); //Checkbox is checked
    yield (0, test_1.expect)(locator).toBeDisabled(); //Element is disabled
    yield (0, test_1.expect)(locator).toBeEditable(); //Element is editable
    yield (0, test_1.expect)(locator).toBeEmpty(); //Container is empty
    yield (0, test_1.expect)(locator).toBeEnabled(); //Element is enabled
    yield (0, test_1.expect)(locator).toBeFocused(); //Element is focused
    yield (0, test_1.expect)(locator).toBeHidden(); //Element is not visible
    yield (0, test_1.expect)(locator).toBeInViewport(); //Element intersects viewport
    yield (0, test_1.expect)(locator).toBeVisible(); //Element is visible
    yield (0, test_1.expect)(locator).toContainText("xyz"); //Element contains text
    yield (0, test_1.expect)(locator).toHaveAttribute("class"); //Element has a DOM attribute
    yield (0, test_1.expect)(locator).toHaveClass("icon"); //Element has a class property
    yield (0, test_1.expect)(locator).toHaveCount(1); //List has exact number of children
    // await expect(locator).toHaveCSS()	//Element has CSS property
    yield (0, test_1.expect)(locator).toHaveId("id"); //Element has an ID
    // await expect(locator).toHaveJSProperty()	//Element has a JavaScript property
    yield (0, test_1.expect)(locator).toHaveScreenshot(); //Element has a screenshot
    yield (0, test_1.expect)(locator).toHaveText("ABC"); //Element matches text
    yield (0, test_1.expect)(locator).toHaveValue("ABC"); //Input has a value
    //await expect(locator).toHaveValues("ABC")	//Select has options selected
    yield (0, test_1.expect)(page).toHaveScreenshot(); //Page has a screenshot
    yield (0, test_1.expect)(page).toHaveTitle("ABC"); //Page has a title
    yield (0, test_1.expect)(page).toHaveURL("ABC"); //Page has a URL
    //await expect(response).toBeOK()	//Response has an OK status
}));
/*
These assertions will test any condition but do not auto-retry. Using these assertions can lead to a flaky test
 
*/
(0, test_1.test)("Using playwright Non-Retrying Assertion", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto("https://www.google.com");
    yield (0, test_1.expect)(page).toHaveTitle("Google");
    const value = "";
    (0, test_1.expect)(value).toBe("ABC"); //Value is the same
    (0, test_1.expect)(value).toBeCloseTo(100); //	Number is approximately equal
    (0, test_1.expect)(value).toBeDefined(); //Value is not undefined
    (0, test_1.expect)(value).toBeFalsy(); //Value is falsy, e.g. false, 0, null, etc.
    (0, test_1.expect)(value).toBeGreaterThan(5); //	Number is more than
    (0, test_1.expect)(value).toBeGreaterThanOrEqual(5); //	Number is more than or equal
    (0, test_1.expect)(value).toBeInstanceOf(Object); //Object is an instance of a class
    (0, test_1.expect)(value).toBeLessThan(19); //Number is less than
    (0, test_1.expect)(value).toBeLessThanOrEqual(19); //	Number is less than or equal
    (0, test_1.expect)(value).toBeNaN(); //Value is NaN
    (0, test_1.expect)(value).toBeNull(); //Value is null
    (0, test_1.expect)(value).toBeTruthy(); //	Value is truthy, i.e. not false, 0, null, etc.
    (0, test_1.expect)(value).toBeUndefined(); //	Value is undefined
    (0, test_1.expect)(value).toContain("ABC"); //String contains a substring
    (0, test_1.expect)(value).toContain("ABC"); //Array or set contains an element
    (0, test_1.expect)(value).toContainEqual("ABC"); //Array or set contains a similar element
    (0, test_1.expect)(value).toEqual(5); //Value is similar - deep equality and pattern matching
    (0, test_1.expect)(value).toHaveLength(10); //Array or string has length
    (0, test_1.expect)(value).toHaveProperty("name"); //	Object has a property
    (0, test_1.expect)(value).toMatch(/name/i); //String matches a regular expression
    // expect(value).toMatchObject(); //	Object contains specified properties
    // expect(value).toStrictEqual(); //Value is similar, including property types
    (0, test_1.expect)(value).toThrow(); //Function throws an error
    // expect(value).any(); //Matches any instance of a class/primitive
    // expect(value).anything(); //Matches anything
    // expect(value).arrayContaining(); //Array contains specific elements
    // expect(value).closeTo(); //Number is approximately equal
    // expect(value).objectContaining(); //	Object contains specific properties
    // expect(value).stringContaining(); //String contains a substring
    // expect(value).stringMatching(); //String matches a regular expression
}));
