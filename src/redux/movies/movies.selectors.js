import { createSelector } from 'reselect';

const selectMovies = (state) => state.movies;

export const selectIsLoading = createSelector(
	[selectMovies],
	(movies) => movies.isLoading
);

export const selectPopularMovies = createSelector(
	[selectMovies],
	(movies) => movies.popular
);

export const selectNowPlayingMovies = createSelector(
	[selectMovies],
	(movies) => movies.nowPlaying
);

export const selectUpcommingMovies = createSelector(
	[selectMovies],
	(movies) => movies.upcomming
);

export const selectGenres = createSelector(
	[selectMovies],
	(movies) => movies.genres
);
