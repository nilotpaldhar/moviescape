import { SearchActionTypes } from './search.types';

export const setQuery = (value) => ({
	type: SearchActionTypes.SET_QUERY,
	payload: value,
});

export const clearQuery = () => ({
	type: SearchActionTypes.CLEAR_QUERY,
});

export const fetchSearchResultsStart = (query) => ({
	type: SearchActionTypes.FETCH_SEARCH_RESULTS_START,
	payload: query,
});

export const fetchSearchResultsSuccess = (data) => ({
	type: SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
	payload: data,
});

export const fetchSearchResultsFailure = (errorMessage) => ({
	type: SearchActionTypes.FETCH_SEARCH_RESULTS_FAILURE,
	payload: errorMessage,
});

export const clearSearchResults = () => ({
	type: SearchActionTypes.CLEAR_SEARCH_RESULTS,
});
