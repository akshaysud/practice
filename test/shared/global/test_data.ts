export interface ISearchData {
	pickupDate: string;
	dropoffDate: string;
	pickupLocation: string;
	dropoffLocation: string;
	driverLicense: string;

}

export class SearchData {

	static generateSearchData = (): ISearchData => {

		/// enter user credentials
		const data = {
			pickupDate: '11/12/2017',
			dropoffDate: '11/16/2017',
			pickupLocation: 'Auckland Airport',
			dropoffLocation: 'Auckland Airport',
			driverLicense: 'Canada'
			
		};

		console.log(`Test Data: ${JSON.stringify(data)}`);
		return data;
	}
}
