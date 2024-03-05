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
/*  playwright built in locators
 example code is run on website -> https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
 In case you want to read more about role refer -> https://www.w3.org/TR/wai-aria-1.2/#role_definitions*/
(0, test_1.test)("test locator getByRole() @locator", ({ page: page }) => __awaiter(void 0, void 0, void 0, function* () {
    /*supported role in playwright:
    "alert"|"alertdialog"|"application"|"article"|"banner"|"blockquote"|"button"|
    "caption"|"cell"|"checkbox"|"code"|"columnheader"|"combobox"|"complementary"|"contentinfo"|"definition"|
    "deletion"|"dialog"|"directory"|"document"|"emphasis"|"feed"|"figure"|"form"|"generic"|"grid"|"gridcell"|
    "group"|"heading"|"img"|"insertion"|"link"|"list"|"listbox"|"listitem"|"log"|"main"|"marquee"|"math"|"meter"|
    "menu"|"menubar"|"menuitem"|"menuitemcheckbox"|"menuitemradio"|"navigation"|"none"|"note"|"option"|"paragraph"|
    "presentation"|"progressbar"|"radio"|"radiogroup"|"region"|"row"|"rowgroup"|"rowheader"|"scrollbar"|"search"|"
    "searchbox"|"separator"|"slider"|"spinbutton"|"status"|"strong"|"subscript"|"superscript"|"switch"|"tab"|"table"|
    "tablist"|"tabpanel"|"term"|"textbox"|"time"|"timer"|"toolbar"|"tooltip"|"tree"|"treegrid"|"treeitem"
    */
    yield page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    yield page.getByRole("textbox", { name: "username" }).fill("Admin");
    yield page.getByRole("textbox", { name: "password" }).fill("admin123");
    yield page.getByRole("button", { name: "Login" }).click({
        button: "left",
    });
}));
(0, test_1.test)("test locator getByPlaceholder() @locator", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    yield page.getByPlaceholder("Username").fill("Adminplaceholder");
    yield page.getByPlaceholder("Password").fill("admin123");
    yield page.getByPlaceholder(/Username/).fill("Adminregexp");
    yield page.getByPlaceholder(/Password/).fill("admin123");
    yield page.getByPlaceholder(/username/i).fill("Admin_reg_ex_ignorecase");
    yield page.getByPlaceholder(/Password/i).fill("admin123");
    yield page.getByRole("button", { name: "Login" }).click({
        button: "left",
    });
    yield page.getByText("Invalid credentials").click();
    (0, test_1.expect)(yield page.getByText("Invalid credentials").count()).toBe(1);
}));
(0, test_1.test)("test locator getByText() @locator", ({ page }) => __awaiter(void 0, void 0, void 0, function* () { }));
(0, test_1.test)("test locator getByLabel() @locator", ({ page }) => __awaiter(void 0, void 0, void 0, function* () { }));
(0, test_1.test)("test locator getByAltText() @locator", ({ page }) => __awaiter(void 0, void 0, void 0, function* () { }));
(0, test_1.test)("test locator getByTitle() @locator", ({ page }) => __awaiter(void 0, void 0, void 0, function* () { }));
(0, test_1.test)("test locator getByTestId() @locator", ({ page }) => __awaiter(void 0, void 0, void 0, function* () { }));
