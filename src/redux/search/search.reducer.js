import { SearchActionTypes } from './search.types';

const INITIAL_STATE = {
	query: '',
	isLoading: false,
	results: [],
	error: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SearchActionTypes.SET_QUERY:
			return { ...state, query: action.payload };

		case SearchActionTypes.CLEAR_QUERY:
			return { ...state, query: '' };

		case SearchActionTypes.FETCH_SEARCH_RESULTS_START:
			return { ...state, isLoading: true };

		case SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
			return { ...state, isLoading: false, results: action.payload };

		case SearchActionTypes.FETCH_SEARCH_RESULTS_FAILURE:
			return { ...state, isLoading: false, results: [], error: action.payload };

		case SearchActionTypes.CLEAR_SEARCH_RESULTS:
			return { ...state, isLoading: false, results: [] };

		default:
			return state;
	}
};

export default searchReducer;
