import { MoviesActionTypes } from './movies.types';

// Fetch Genre
export const fetchGenreStart = () => ({
	type: MoviesActionTypes.FETCH_GENRE_START,
});

export const fetchGenreSuccess = (data) => ({
	type: MoviesActionTypes.FETCH_GENRE_SUCCESS,
	payload: data,
});

export const fetchGenreFailure = (errorMessage) => ({
	type: MoviesActionTypes.FETCH_GENRE_FAILURE,
	payload: errorMessage,
});

// Fetch Pouplar Movies
export const fetchPopularMoviesStart = () => ({
	type: MoviesActionTypes.FETCH_POPULAR_MOVIES_START,
});

export const fetchPopularMoviesSuccess = (data) => ({
	type: MoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
	payload: data,
});

export const fetchPopularMoviesFailure = (errorMessage) => ({
	type: MoviesActionTypes.FETCH_POPULAR_MOVIES_FAILURE,
	payload: errorMessage,
});

// Fetch Now Playing Movies
export const fetchNowPlayingMoviesStart = () => ({
	type: MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_START,
});

export const fetchNowPlayingMoviesSuccess = (data) => ({
	type: MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS,
	payload: data,
});

export const fetchNowPlayingMoviesFailure = (errorMessage) => ({
	type: MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE,
	payload: errorMessage,
});

// Fetch Upcomming Movies
export const fetchUpcommingMoviesStart = () => ({
	type: MoviesActionTypes.FETCH_UPCOMMING_MOVIES_START,
});

export const fetchUpcommingMoviesSuccess = (data) => ({
	type: MoviesActionTypes.FETCH_UPCOMMING_MOVIES_SUCCESS,
	payload: data,
});

export const fetchUpcommingMoviesFailure = (errorMessage) => ({
	type: MoviesActionTypes.FETCH_UPCOMMING_MOVIES_FAILURE,
	payload: errorMessage,
});
