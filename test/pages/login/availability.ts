import { BrowserHelper, IElement } from '../../shared/browser_helper';

export interface IAvailabilityPageElements {
	searchCampers: IElement;
	pickupDate: IElement;
	dropoffDate: IElement;
	pickupLocation: IElement;
	dropoffLocation: IElement;
	driverLicense: IElement;
}

export class AvailabilityPageElements implements IAvailabilityPageElements {

	readonly pickupDate: IElement = {
		selector: 'input[data-testid="search_input"]'
	};
	readonly dropoffDate: IElement = {
		selector: 'input[data-testid="search_input"]'
	};
	readonly pickupLocation: IElement = {
		selector: 'input[data-testid="search_input"]'
	};
	readonly dropoffLocation: IElement = {
		selector: 'input[data-testid="search_input"]'
	};
	readonly driverLicense: IElement = {
		selector: 'input[data-testid="search_input"]'
	};
	readonly searchCampers: IElement = {
		selector: 'input[data-testid="search_input"]'
	};
}

export class AvailabilityPage {

	myPageElements: IAvailabilityPageElements = new AvailabilityPageElements();

	enterUserCredentials = (user): void => {
		const { myPageElements } = this;
		const { pickupDate, dropoffDate, pickupLocation, dropoffLocation, driverLicense, searchCampers} = user;

		BrowserHelper.setValue(myPageElements.pickupDate, pickupDate)
			.setValue(myPageElements.dropoffDate, dropoffDate)
			.setValue(myPageElements.pickupLocation, pickupLocation)
			.setValue(myPageElements.dropoffLocation, dropoffLocation)
			.setValue(myPageElements.driverLicense, driverLicense);
	};
}
	export class AvailabilityPageAssertions {
		myPageElements: IAvailabilityPageElements = new AvailabilityPageElements()
		;
	clickSearch = (nextPage): void => {
		BrowserHelper.click(this.myPageElements.searchCampers, nextPage);
	}
}

