import { takeLatest, put, all, call } from 'redux-saga/effects';

import tvShowsApi from '../../api/tv-shows/tv-shows.api';
import { TvShowsActionTypes } from './tv-shows.types';
import {
	fetchTvGenreSuccess,
	fetchTvGenreFailure,
	fetchPopularTvShowsSuccess,
	fetchPopularTvShowsFailure,
} from './tv-shows.actions';

export function* fetchGenreAsync() {
	try {
		const response = yield tvShowsApi.genre();
		yield put(fetchTvGenreSuccess(response.data.genres));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchTvGenreFailure(errorMessage));
	}
}

export function* fetchPopularTvShowsAsync() {
	try {
		const response = yield tvShowsApi.popularTvShows();
		yield put(fetchPopularTvShowsSuccess(response.data.genres));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchPopularTvShowsFailure(errorMessage));
	}
}

export function* fetchGenreStart() {
	yield takeLatest(
		TvShowsActionTypes.FETCH_TV_SHOWS_GENRE_START,
		fetchGenreAsync
	);
}

export function* fetchPopularTvShowsStart() {
	yield takeLatest(
		TvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_START,
		fetchPopularTvShowsAsync
	);
}

export function* tvShowsSagas() {
	yield all([call(fetchGenreStart), call(fetchPopularTvShowsStart)]);
}
