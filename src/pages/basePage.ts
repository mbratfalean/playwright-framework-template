import { Page, expect, webkit } from '@playwright/test'

class BasePage {
	page: Page;
	constructor(page: Page) {
		this.page = page
	}

	async open(url: string) {
		return await this.page.goto(url)
	}

	async getTitle() {
		return await this.page.title()
	}

	async pause() {
		return await this.page.pause()
	}

	async getUrl() {
		return this.page.url()
	}

	async wait() {
		return this.page.waitForTimeout(10000)
	}

	async waitForPageLoad() {
		return await this.page.waitForLoadState('domcontentloaded')
	}

	async waitAndClick(selector: string) {
		return await this.page.click(selector)
	}

	async waitAndHardClick(selector: any) {
		return await this.page.$eval(selector, element => element.click())
	}

	async waitAndFill(selector: string, text: string) {
		return await this.page.fill(selector, text)
	}

	async keyPress(selector: string, key: string) {
		return await this.page.press(selector, key)
	}

	async takeScreenShot() {
		return expect(await this.page.screenshot()).toMatchSnapshot(
			'MyScreenShot.png'
		)
	}

	async verifyElementContainsText(selector: string, text: string | RegExp | (string | RegExp)[]) {
		const locatorText = await this.page.locator(selector)
		return await expect(locatorText).toContainText(text)
	}

	async verifyJSElementValue(selector: any, text: unknown) {
		const textValue = await this.page.$eval(selector, element => element.value)
		return expect(textValue.trim()).toBe(text)
	}

	async selectValueFromDropdown(selector: string, text: any) {
		const dropdown = await this.page.locator(selector)
		return await dropdown.selectOption({ value: text })
	}
	async getFirstElementFromTheList(selector: string) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const firstItem = await rows.nth(0).textContent()
			return firstItem
		}
	}

	async getLastElementFromTheList(selector: string) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const lastItem = await rows.nth(5).textContent()
			return lastItem
		}
	}

	async clickAllElements(selector: string) {
		const rows = await this.page.locator(selector)
		const count = 2
		for (let i = 0; i < count; ++i) {
			await rows.nth(i).click()
		}
	}
 
	async isElementVisible(selector: string, errorMessage: any) {
		const element = this.page.locator(selector)
		try {
			const isVisible = await element.isVisible()
			expect(isVisible).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementNotVisible(selector: string) {
		const element = this.page.locator(selector)
		return expect(element).toBeHidden
	}

	async isElementEnabled(selector: string, errorMessage: any) {
		const element = this.page.locator(selector)
		try {
			const isEnabled = await element.isEnabled()
			expect(isEnabled).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async isElementChecked(selector: string, errorMessage: any) {
		const element = this.page.locator(selector)
		try {
			const isChecked = await element.isChecked()
			expect(isChecked).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}
}
export default BasePage
function range(count: any) {
	throw new Error('Function not implemented.');
}