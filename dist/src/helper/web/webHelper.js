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
exports.WebHelper = void 0;
const test_1 = require("@playwright/test");
const fs_1 = __importDefault(require("fs"));
const Helper_1 = require("helper/Helper");
const path_1 = __importDefault(require("path"));
class WebHelper extends Helper_1.Helper {
    constructor(webPage, browserContext) {
        super();
        this.webPage = webPage;
        this.browserContext = browserContext;
    }
    /**
     * The `delay` function is an asynchronous function that waits for a specified amount of time before
     * resolving.
     * @param {number} time - The `time` parameter is a number that represents the duration of the delay
     * in seconds.
     * @returns a Promise that resolves to void.
     */
    delay(time) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve) {
                setTimeout(resolve, time * 1000);
            });
        });
    }
    /**
     * The function clicks on an element on a web page based on its text content.
     * @param {string} text - The text parameter is a string that represents the text content of an element
     * that you want to click on. It is used to locate the element on the web page.
     * @param {boolean} [exact=true] - The `exact` parameter is a boolean value that determines whether the
     * text should be matched exactly or not. If `exact` is set to `true`, the `clickByText` function will
     * only click on elements that have an exact match with the provided text. If `exact` is set to `
     */
    clickByText(text, exact = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.webPage.getByText(text, { exact: exact }).click();
        });
    }
    rightClickButton(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.webPage.locator(locator).click({ button: "right" });
        });
    }
    leftClickButton(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.webPage.locator(locator).click({ button: "left" });
        });
    }
    navigateToUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.webPage.goto(url);
        });
    }
    verifyDragAndDrop(source, target, verifyText) {
        return __awaiter(this, void 0, void 0, function* () {
            let draggable = yield this.webPage.locator(source);
            let droppable = yield this.webPage.locator(target);
            yield draggable.hover();
            yield this.webPage.mouse.down();
            yield droppable.hover();
            yield this.webPage.mouse.up();
            yield (0, test_1.expect)(droppable).toContainText(verifyText);
        });
    }
    verifyToolTip(locator, hoverText) {
        return __awaiter(this, void 0, void 0, function* () {
            let el = yield this.webPage.locator(locator);
            el.hover();
            yield (0, test_1.expect)(el).toContainText(hoverText);
        });
    }
    verifyFileDownload() {
        return __awaiter(this, void 0, void 0, function* () {
            //TBD
        });
    }
    verifyNewTab(newTabUrlExpected) {
        return __awaiter(this, void 0, void 0, function* () {
            //TBD
        });
    }
    verifyNewWindow(newWindowUrlExpected) {
        return __awaiter(this, void 0, void 0, function* () {
            //TBD
        });
    }
    verifyFrameText() {
        return __awaiter(this, void 0, void 0, function* () {
            //TBD
        });
    }
    verifyNestedFrame() {
        return __awaiter(this, void 0, void 0, function* () {
            //TBD
        });
    }
    /**
     * The function asserts that the current page URL matches the expected URL.
     * @param {string} url - The `url` parameter is a string that represents the expected URL of a web
     * page.
     */
    assertPageURL(url) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Asserts that page url is ${url}.`);
            yield (0, test_1.expect)(this.webPage).toHaveURL(url);
        });
    }
    /**
     * The function asserts that the page title matches the expected title.
     * @param {string} title - The title parameter is a string that represents the expected title of the
     * web page.
     */
    assertPageTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Asserts that page title is ${title}.`);
            yield (0, test_1.expect)(this.webPage).toHaveTitle(title);
        });
    }
    /**
     * The function opens a new tab in a browser context, navigates to a specified URL, and returns the
     * page object representing the new tab.
     * @param {string} url - A string representing the URL of the webpage that you want to open in a new
     * tab.
     * @returns a Promise that resolves to a Page object.
     */
    openNewTab(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const pageOne = yield this.browserContext.newPage();
            yield pageOne.goto(url);
            return pageOne;
        });
    }
    /**
     * The function takes a screenshot of a web page and saves it as an image file.
     * @param {string} imageName - The imageName parameter is a string that specifies the name of the
     * screenshot image file. If no value is provided, it defaults to "screenshot.png".
     */
    takeScreenshot(imageName = `screenshot.png`) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.webPage.screenshot({ path: `${imageName}`, fullPage: true });
        });
    }
    /**
     * The function takes a locator and an optional image name as parameters, finds the element on a web
     * page using the locator, and takes a screenshot of the element.
     * @param {string} locator - The `locator` parameter is a string that represents the element you want
     * to take a screenshot of. It can be a CSS selector, an XPath expression, or any other valid locator
     * strategy supported by the `this.webPage.locator` method.
     * @param {string} imageName - The `imageName` parameter is a string that specifies the name of the
     * screenshot image file. If no value is provided, it defaults to "screenshot.png".
     */
    takeScreenshotOfElement(locator, imageName = `screenshot.png`) {
        return __awaiter(this, void 0, void 0, function* () {
            const el = yield this.webPage.locator(locator);
            yield el.screenshot({ path: `${imageName}` });
        });
    }
    /**
     * The function checks if an element on a web page contains the expected text.
     * @param {string} target - A string representing the target element to locate on the web page.
     * @param {string} expectedText - The expected text that you want the element to contain.
     */
    elementContainText(target, expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Asserts that element ${target} contains text ${expectedText}.`);
            const el = yield this.webPage.locator(target);
            yield (0, test_1.expect)(el).toContainText(expectedText);
        });
    }
    /**
     * The function checks if an element on a web page has the expected text.
     * @param {string} target - The target parameter is a string that represents the locator for the
     * element you want to check for text. It could be a CSS selector, an XPath expression, or any other
     * valid locator strategy supported by the testing framework you are using.
     * @param {string} expectedText - The expected text that the element should have.
     */
    elementHasText(target, expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Asserts that element ${target} has expected text ${expectedText}.`);
            const el = yield this.webPage.locator(target);
            yield (0, test_1.expect)(el).toHaveText(expectedText);
        });
    }
    /**
     * The function asserts that a specified element is visible on a web page.
     * @param {string} target - The `target` parameter is a string that represents the locator of the
     * element you want to check for visibility. It could be a CSS selector, an XPath expression, or any
     * other valid locator that can be used to identify the element on the web page.
     */
    elementIsVisible(target) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Asserts that element ${target} is visible.`);
            (0, test_1.expect)(yield this.webPage.locator(target)).toBeVisible();
        });
    }
    /**
     * The function asserts that a specified element is not visible on a web page.
     * @param {string} target - The target parameter is a string that represents the locator or selector
     * for the element that you want to check for visibility. It can be a CSS selector, an XPath
     * expression, or any other valid locator that can be used to identify the element on the web page.
     */
    elementIsNotVisible(target) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Asserts that element ${target} is not visible.`);
            (0, test_1.expect)(yield this.webPage.locator(target)).toBeHidden();
        });
    }
    elementHasAttributeAndValue(target, attribute, attributeVal) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Asserts that '${target}' has a specific attribute '${attribute}' with the expected value '${attributeVal}'.`);
            //expect(await (target).toHaveAttribute(attribute, attributeVal));
        });
    }
    /**
     * The `blockRequest` function blocks all requests in a given browser context that do not start with a
     * specified request name.
     * @param {BrowserContext} context - The `context` parameter is an instance of a `BrowserContext`
     * object. It represents a browser context in Puppeteer, which is a container for a set of pages and
     * allows for fine-grained control over browser behavior.
     * @param {string} requestName - The `requestName` parameter is a string that represents the name of
     * the request you want to block.
     * Call this method in your tests
     */
    blockRequest(context, requestName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield context.route("**/*", (request) => {
                request.request().url().startsWith(`${requestName}`)
                    ? request.abort()
                    : request.continue();
                return;
            });
        });
    }
    /**
     * The function will setup a listener for alert box, if dialog appears during the test then automatically accepting them.
     * Alert box contains only Ok button
     */
    acceptAlertBox() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Handle Alert Box by clicking on Ok button`);
            this.webPage.on("dialog", (dialog) => __awaiter(this, void 0, void 0, function* () { return dialog.dismiss(); }));
        });
    }
    /**
     * The function will setup a listener for Confirm box, if dialog appears during the test then automatically call accept/dismiss method.
     * Confirm box contains Ok/Cancel button
     */
    acceptConfirmBox() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Accept Confirm Box by clicking on Ok button`);
            this.webPage.on("dialog", (dialog) => __awaiter(this, void 0, void 0, function* () { return dialog.accept(); }));
        });
    }
    dismissConfirmBox() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Dismiss Confirm Box by clicking on Cancel button`);
            this.webPage.on("dialog", (dialog) => __awaiter(this, void 0, void 0, function* () { return dialog.dismiss(); }));
        });
    }
    /**
     * The function will setup a listener for Prompt box, if dialog appears during the test then automatically call accept/dismiss method.
     * Prompt box contains text box where user can enter text and submit (using Ok/Cancel button) it.
     */
    handlePromptBox(txtVal) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Enter text message in Prompt Box and click on Ok button`);
            this.webPage.on("dialog", (dialog) => __awaiter(this, void 0, void 0, function* () { return dialog.accept(txtVal); }));
        });
    }
    waitForDialogMessage(page) {
        return new Promise((resolve) => {
            page.on("dialog", (dialog) => {
                resolve(dialog.message());
            });
        });
    }
    /**
     * The function will read text message from Alert and return.
     */
    getAlertText() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Read text message from Alert box`);
            let dialogMessage;
            dialogMessage = yield this.waitForDialogMessage(this.webPage).then.toString();
            console.log(dialogMessage);
            return dialogMessage;
        });
    }
    /**
     * The function `getFrame` takes a frame locator as input and calls a method on the `webPage` object
     * to locate the frame.
     * @param {string} frameLocator - The frameLocator parameter is a string that represents the locator
     * or identifier of the frame you want to retrieve.
     */
    getFrame(frameLocator) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.webPage.frameLocator(frameLocator);
        });
    }
    /**
     * The function `getStringFromShadowDom` retrieves the text content from a specified element within
     * the Shadow DOM.
     * @param {string} locator - The `locator` parameter is a string that represents a CSS selector used
     * to locate an element within the Shadow DOM.
     * @returns a Promise that resolves to a string.
     */
    getStringFromShadowDom(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.webPage.locator(locator).textContent());
        });
    }
    /**
     * The `downLoadFile` function downloads a file by clicking on a specified locator and waits for the
     * download event to occur.
     * @param {string} locator - The locator parameter is a string that represents the selector used to
     * locate the element on the web page that triggers the file download. It could be an ID, class name,
     * CSS selector, or any other valid selector that can be used with the `this.webPage.locator()`
     * method to locate the element
     * @param {string} expectedFileName - The expectedFileName parameter is a string that represents the
     * name of the file that is expected to be downloaded.
     * @param {string} savePath - The `savePath` parameter is a string that represents the path where the
     * downloaded file will be saved on the local machine.
     */
    downLoadFile(locator, expectedFileName, savePath) {
        return __awaiter(this, void 0, void 0, function* () {
            //start download
            const [download] = yield Promise.all([
                this.webPage.waitForEvent("download"),
                this.webPage.locator(locator).click(),
            ]);
            yield download.saveAs(savePath);
            return download;
        });
    }
    /**
     * The function uploads a file to a web page using the specified file path, file upload locator, and
     * upload button locator.
     * @param {string} filePath - The file path is the path to the file that you want to upload. It
     * should be a string that specifies the location of the file on your computer.
     * @param {string} fileUploadLocator - The fileUploadLocator parameter is a string that represents
     * the locator of the file upload input element on the web page. This locator is used to identify the
     * element where the file will be uploaded to.
     * @param {string} uploadBtnLocator - The `uploadBtnLocator` parameter is a string that represents
     * the locator of the upload button on the web page. It is used to locate and interact with the
     * upload button element on the page.
     */
    uploadFile(filePath, fileUploadLocator, uploadBtnLocator) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!fs_1.default.existsSync(filePath)) {
                console.log(`File ${filePath} does not exist`);
                throw new Error(`File not found :${filePath}`);
            }
            yield this.webPage.setInputFiles(`${fileUploadLocator}`, filePath);
            yield this.webPage.locator(`${uploadBtnLocator}`).click();
        });
    }
    /**
     * The function intercepts a specific route in a browser context, logs the request and response, and
     * continues with the intercepted request.
     * @param {string} interceptRoute - The interceptRoute parameter is a string that represents the route
     * that you want to intercept. It is used to match against the URL of incoming requests and determine
     * if the route should be intercepted.
     */
    interceptRouteAndContinue(interceptRoute) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browserContext.route(interceptRoute, (route) => __awaiter(this, void 0, void 0, function* () {
                //Arrange & Log the request
                const response = yield route.fetch();
                const json = yield response.json();
                console.log(JSON.stringify(json, null, 10));
                //continue with the intercepted request
                yield route.continue();
            }));
        });
    }
    /**
     * The function intercepts a specific route and aborts it.
     * @param {string} interceptRoute - The `interceptRoute` parameter is a string that represents the
     * URL pattern that you want to intercept and abort. It is used to match against the URLs of incoming
     * network requests.
     */
    interceptRouteAndAbort(interceptRoute) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browserContext.route(interceptRoute, (route) => __awaiter(this, void 0, void 0, function* () {
                route.abort(); //abort the route
            }));
        });
    }
    /**
     * The function intercepts a specified route and modifies the response data with the provided JSON
     * data.
     * @param {string} interceptRoute - The `interceptRoute` parameter is a string that represents the
     * route that you want to intercept. It is the URL or path that you want to intercept and modify the
     * response for. For example, if you want to intercept the route "/api/data", you would pass
     * "/api/data" as the
     * @param {string} modifiedJsonData - The `modifiedJsonData` parameter is a string representing the
     * modified JSON data that you want to use as the response body for the intercepted route.
     */
    interceptRouteAndChangeData(interceptRoute, modifiedJsonData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browserContext.route(interceptRoute, (route) => __awaiter(this, void 0, void 0, function* () {
                const modifiedResponse = [`${modifiedJsonData}`];
                return route.fulfill({
                    status: 200,
                    contentType: "application/json",
                    body: JSON.stringify(modifiedResponse),
                });
            }));
        });
    }
    changeElementValue() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    verifyValueFromUi() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getAttribute(locator, attributeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.webPage
                .locator(locator)
                .getAttribute(attributeName);
            return value !== null && value !== void 0 ? value : "";
        });
    }
    getText(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.webPage.locator(locator).textContent();
            return value !== null && value !== void 0 ? value : "";
        });
    }
    press(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.webPage.keyboard.press(key);
        });
    }
    attachScreenshot(locator, fileName, testInfo, webPage) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = testInfo.outputPath(fileName);
            const pathFile = path_1.default.dirname(file);
            const pathAttachments = path_1.default.join(pathFile, "attachments");
            const attachmentFile = path_1.default.join(pathAttachments, fileName);
            const screenshot = yield webPage
                .locator(locator)
                .screenshot({ path: file });
            yield fs_1.default.promises.writeFile(file, screenshot);
            if (!fs_1.default.existsSync(pathAttachments)) {
                fs_1.default.mkdirSync(pathAttachments, { recursive: true });
            }
            yield fs_1.default.promises.writeFile(attachmentFile, screenshot);
            yield testInfo.attach(fileName, { contentType: "image/png", path: file });
        });
    }
}
exports.WebHelper = WebHelper;
function isVisible() {
    throw new Error('Function not implemented.');
}
