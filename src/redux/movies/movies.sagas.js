import { takeLatest, put, all, call } from 'redux-saga/effects';

import moviesApi from '../../api/movies/movies.api';
import { MoviesActionTypes } from './movies.types';
import {
	fetchGenreSuccess,
	fetchGenreFailure,
	fetchPopularMoviesSuccess,
	fetchPopularMoviesFailure,
	fetchNowPlayingMoviesSuccess,
	fetchNowPlayingMoviesFailure,
	fetchUpcommingMoviesSuccess,
	fetchUpcommingMoviesFailure,
} from './movies.actions';

export function* fetchGenreAsync() {
	try {
		const response = yield moviesApi.genre();
		yield put(fetchGenreSuccess(response.data.genres));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchGenreFailure(errorMessage));
	}
}

export function* fetchUpcommingMoviesAsync() {
	try {
		const response = yield moviesApi.upcommingMovies();
		yield put(fetchUpcommingMoviesSuccess(response.data.results));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchUpcommingMoviesFailure(errorMessage));
	}
}

export function* fetchNowPlayingMoviesAsync() {
	try {
		const response = yield moviesApi.nowPlayingMovies();
		yield put(fetchNowPlayingMoviesSuccess(response.data.results));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchNowPlayingMoviesFailure(errorMessage));
	}
}

export function* fetchPopularMoviesAsync() {
	try {
		const response = yield moviesApi.popularMovies();
		yield put(fetchPopularMoviesSuccess(response.data.results));
	} catch (error) {
		const errorMessage = yield error.response.data.status_message;
		yield put(fetchPopularMoviesFailure(errorMessage));
	}
}

export function* fetchPopularMoviesStart() {
	yield takeLatest(
		MoviesActionTypes.FETCH_POPULAR_MOVIES_START,
		fetchPopularMoviesAsync
	);
}

export function* fetchNowPlayingMoviesStart() {
	yield takeLatest(
		MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_START,
		fetchNowPlayingMoviesAsync
	);
}

export function* fetchUpcommingMoviesStart() {
	yield takeLatest(
		MoviesActionTypes.FETCH_UPCOMMING_MOVIES_START,
		fetchUpcommingMoviesAsync
	);
}

export function* fetchGenreStart() {
	yield takeLatest(MoviesActionTypes.FETCH_GENRE_START, fetchGenreAsync);
}

export function* moviesSagas() {
	yield all([
		call(fetchPopularMoviesStart),
		call(fetchNowPlayingMoviesStart),
		call(fetchUpcommingMoviesStart),
		call(fetchGenreStart),
	]);
}
