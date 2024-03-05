import BasePage from './basePage'
import {
	landingPageTitle
} from '../pageobjects/landingPage'

class LandingPage extends BasePage {
	

	async landinPageTitle() {
		return await this.isElementVisible(landingPageTitle, "Text not visible")
	}

}
export default LandingPage