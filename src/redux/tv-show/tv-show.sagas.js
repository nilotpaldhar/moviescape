import { takeLatest, put, all, call } from 'redux-saga/effects';
import tvShowApi from '../../api/tv-show/tv-show.api';
import { TvShowActionTypes } from './tv-show.types';
import {
	fetchTvDetailsSuccess,
	fetchTvDetailsFailure,
	fetchTvVideosSuccess,
	fetchTvVideosFailure,
	fetchTvCastsSuccess,
	fetchTvCastsFailure,
} from './tv-show.actions';

export function* fetchTvCastsAsync({ payload }) {
	try {
		const response = yield tvShowApi.casts(payload);
		yield put(fetchTvCastsSuccess(response.data.cast));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchTvCastsFailure(errorMessage));
	}
}

export function* fetchTvVideosAsync({ payload }) {
	try {
		const response = yield tvShowApi.videos(payload);
		yield put(fetchTvVideosSuccess(response.data.results));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchTvVideosFailure(errorMessage));
	}
}

export function* fetchTvDetailsAsync({ payload }) {
	try {
		const response = yield tvShowApi.details(payload);
		yield put(fetchTvDetailsSuccess(response.data));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchTvDetailsFailure(errorMessage));
	}
}

// Fetching tv show casts
export function* fetchTvCastsStart() {
	yield takeLatest(
		TvShowActionTypes.FETCHING_TV_CASTS_START,
		fetchTvCastsAsync
	);
}

// Fetching tv show videos
export function* fetchTvVideosStart() {
	yield takeLatest(
		TvShowActionTypes.FETCHING_TV_VIDEOS_START,
		fetchTvVideosAsync
	);
}

// Fetching single tv show details
export function* fetchTvDetailsStart() {
	yield takeLatest(
		TvShowActionTypes.FETCHING_TV_DETAILS_START,
		fetchTvDetailsAsync
	);
}

export function* tvShowSagas() {
	yield all([
		call(fetchTvDetailsStart),
		call(fetchTvVideosStart),
		call(fetchTvCastsStart),
	]);
}
