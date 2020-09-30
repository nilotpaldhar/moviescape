import { takeLatest, put, all, call } from 'redux-saga/effects';

import searchApi from '../../api/search/search.api';
import { SearchActionTypes } from './search.types';

import {
	fetchSearchResultsSuccess,
	fetchSearchResultsFailure,
} from './search.actions';

export function* fetchSearchResultsAsync({ payload }) {
	try {
		const response = yield searchApi.movie(payload);
		yield put(fetchSearchResultsSuccess(response.data.results));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchSearchResultsFailure(errorMessage));
	}
}

export function* fetchSearchResultsStart() {
	yield takeLatest(
		SearchActionTypes.FETCH_SEARCH_RESULTS_START,
		fetchSearchResultsAsync
	);
}

export function* searchSagas() {
	yield all([call(fetchSearchResultsStart)]);
}
