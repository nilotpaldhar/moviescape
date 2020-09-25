import { TvShowsActionTypes } from './tv-shows.types';

// Fetch Genres
export const fetchTvGenreStart = () => ({
	type: TvShowsActionTypes.FETCH_TV_SHOWS_GENRE_START,
});

export const fetchTvGenreSuccess = (data) => ({
	type: TvShowsActionTypes.FETCH_TV_SHOWS_GENRE_SUCCESS,
	payload: data,
});

export const fetchTvGenreFailure = (errorMessage) => ({
	type: TvShowsActionTypes.FETCH_TV_SHOWS_GENRE_FAILURE,
	payload: errorMessage,
});

// Fetch Pouplar TV Shows
export const fetchPopularTvShowsStart = () => ({
	type: TvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_START,
});

export const fetchPopularTvShowsSuccess = (data) => ({
	type: TvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_SUCCESS,
	payload: data,
});

export const fetchPopularTvShowsFailure = (errorMessage) => ({
	type: TvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_FAILURE,
	payload: errorMessage,
});
