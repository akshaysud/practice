import { given, when, then, and } from '../../speclight';
import { BrowserHelper } from '../../shared/browser_helper';
import { SearchData } from '../../shared/global/test_data';
import { EnvironmentData } from '../../shared/global/environment_data';
import { Availability } from '../../pages/login/availability';
import { Search } from '../../pages/user/search';

const environmentData = new EnvironmentData();
const availability = new availability();
const search = new search();

describe('Login To Facebook', () => {

	const data = SearchData.generateSearchData();

	given`I navigate to the booking page`(() => BrowserHelper.navigate(login.loginUrl(), login.welcomePageElements.Email.selector));
	when`I enter required details ${data}`((user) => login.welcomePage.enterUserCredentials(user));
		and`I click search campers`(() => login.welcomePage.clickLogin(user.homePageElements.SearchBar.selector));
	then`I am on the result page`(() => user.homePageAssertions.verifyHomePage());

	browser.end();
});
