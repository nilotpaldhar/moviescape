import { createSelector } from 'reselect';

const selectMovies = (state) => state.movies;

export const selectPopularMoviesFetching = createSelector(
	[selectMovies],
	(selectMovies) => selectMovies.isFetchingPopular
);

export const selectPopularMovies = createSelector(
	[selectMovies],
	(selectMovies) => selectMovies.popular
);

export const selectNowPlayingMovies = createSelector(
	[selectMovies],
	(selectMovies) => selectMovies.nowPlaying
);

export const selectUpcommingMovies = createSelector(
	[selectMovies],
	(selectMovies) => selectMovies.upcomming
);

export const selectGenres = createSelector(
	[selectMovies],
	(selectMovies) => selectMovies.genres
);

export const selectBaseUrl = createSelector(
	[selectMovies],
	(selectMovies) => selectMovies.baseUrl
);
