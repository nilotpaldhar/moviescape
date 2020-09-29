import { takeLatest, put, all, call } from 'redux-saga/effects';
import movieApi from '../../api/movie/movie.api';
import { MovieActionTypes } from './movie.types';
import {
	fetchMovieDetailsSuccess,
	fetchMovieDetailsFailure,
	fetchMovieVideosSuccess,
	fetchMovieVideosFailure,
	fetchMovieCastsSuccess,
	fetchMovieCastsFailure,
} from './movie.actions';

export function* fetchMovieCastsAsync({ payload }) {
	try {
		const response = yield movieApi.casts(payload);
		yield put(fetchMovieCastsSuccess(response.data.cast));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchMovieCastsFailure(errorMessage));
	}
}

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

// Fetching movie casts
export function* fetchMovieCastsStart() {
	yield takeLatest(
		MovieActionTypes.FETCHING_MOVIE_CASTS_START,
		fetchMovieCastsAsync
	);
}

// Fetching movie videos
export function* fetchMovieVideosStart() {
	yield takeLatest(
		MovieActionTypes.FETCHING_MOVIE_VIDEOS_START,
		fetchMovieVideosAsync
	);
}

// Fetching single movie details
export function* fetchMovieDetailsStart() {
	yield takeLatest(
		MovieActionTypes.FETCHING_MOVIE_DETAILS_START,
		fetchMovieDetailsAsync
	);
}

export function* movieSagas() {
	yield all([
		call(fetchMovieDetailsStart),
		call(fetchMovieVideosStart),
		call(fetchMovieCastsStart),
	]);
}
