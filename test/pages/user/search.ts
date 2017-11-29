import { BrowserHelper, IElement } from '../../shared/browser_helper';

export interface ISearchPageElements {

}

export class SearchPageElements implements ISearchPageElements {

}

export class SearchPage {

	myPageElements: ISearchPageElements = new SearchPageElements();

}

export class SearchPageAssertions {

	myPageElements: ISearchPageElements = new SearchPageElements();
	BrowserHelper.setValue(myPageElements.pickupDate, pickupDate)
	;


	verifyHomePage = (): void => {
		const { myPageElements } = this;
		expect(BrowserHelper.isVisible(myPageElements.searchCampers)).toBeTruthy();
	}
}

