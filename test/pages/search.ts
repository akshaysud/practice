import { SearchPageElements, SearchPage } from '../pages/user/search';

export class Search {

	public searchPageElements = new SearchPageElements();
	public searchPage = new SearchPage();

	loginUrl = (): string => {
		return 'search/';
	}
}
