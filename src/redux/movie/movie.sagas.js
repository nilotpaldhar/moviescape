import { takeLatest, put, all, call } from 'redux-saga/effects';
import movieApi from '../../api/movie/movie.api';
import { MovieActionTypes } from './movie.types';
import {
	fetchMovieDetailsSuccess,
	fetchMovieDetailsFailure,
	fetchMovieVideosSuccess,
	fetchMovieVideosFailure,
} from './movie.actions';

export function* fetchMovieVideosAsync({ payload }) {
	try {
		const response = yield movieApi.videos(payload);
		yield put(fetchMovieVideosSuccess(response.data.results));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchMovieVideosFailure(errorMessage));
	}
}

export function* fetchMovieDetailsAsync({ payload }) {
	try {
		const response = yield movieApi.details(payload);
		yield put(fetchMovieDetailsSuccess(response.data));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchMovieDetailsFailure(errorMessage));
	}
}

export function* fetchMovieVideosStart() {
	yield takeLatest(
		MovieActionTypes.FETCHING_MOVIE_VIDEOS_START,
		fetchMovieVideosAsync
	);
}

export function* fetchMovieDetailsStart() {
	yield takeLatest(
		MovieActionTypes.FETCHING_MOVIE_DETAILS_START,
		fetchMovieDetailsAsync
	);
}

export function* movieSagas() {
	yield all([call(fetchMovieDetailsStart), call(fetchMovieVideosStart)]);
}
