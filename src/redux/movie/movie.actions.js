import { MovieActionTypes } from './movie.types';

// Fetching single movie details
export const fetchMovieDetailsStart = (id) => ({
	type: MovieActionTypes.FETCHING_MOVIE_DETAILS_START,
	payload: id,
});

export const fetchMovieDetailsSuccess = (data) => ({
	type: MovieActionTypes.FETCHING_MOVIE_DETAILS_SUCCESS,
	payload: data,
});

export const fetchMovieDetailsFailure = (errorMessage) => ({
	type: MovieActionTypes.FETCHING_MOVIE_DETAILS_FAILURE,
	payload: errorMessage,
});

// Fetching movie videos
export const fetchMovieVideosStart = (id) => ({
	type: MovieActionTypes.FETCHING_MOVIE_VIDEOS_START,
	payload: id,
});

export const fetchMovieVideosSuccess = (data) => ({
	type: MovieActionTypes.FETCHING_MOVIE_VIDEOS_SUCCESS,
	payload: data,
});

export const fetchMovieVideosFailure = (errorMessage) => ({
	type: MovieActionTypes.FETCHING_MOVIE_VerrorMessageEOS_FAILURE,
	payload: errorMessage,
});

// Fetching movie casts
export const fetchMovieCastsStart = (id) => ({
	type: MovieActionTypes.FETCHING_MOVIE_CASTS_START,
	payload: id,
});

export const fetchMovieCastsSuccess = (data) => ({
	type: MovieActionTypes.FETCHING_MOVIE_CASTS_SUCCESS,
	payload: data,
});

export const fetchMovieCastsFailure = (errorMessage) => ({
	type: MovieActionTypes.FETCHING_MOVIE_CASTS_FAILURE,
	payload: errorMessage,
});
