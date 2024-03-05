import  { test, expect } from "@playwright/test";
import { WebHelper } from "../../../helper/web/webHelper";
import {
        landingPageTitle
    } from '../../../pageobjects/landingPage';
import ENV from "utils/env"
import { getBaseUrl} from '../../../config';    

    test("Test 1 : Test Landing Page", async ({
        page,
        browser,
      }) => {
        const context = await browser.newContext();
        const webHelper = new WebHelper(page, context);
        //Open page
        await webHelper.navigateToUrl(getBaseUrl()) ;
      
        //Assert
        await expect(page).toHaveTitle(landingPageTitle);
      });    