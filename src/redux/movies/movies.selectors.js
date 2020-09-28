import { createSelector } from 'reselect';

const selectMovies = (state) => state.movies;

export const selectIsFetchingPopular = createSelector(
	[selectMovies],
	(movies) => movies.isFetchingPopular
);

export const selectPopularMovies = createSelector(
	[selectMovies],
	(movies) => movies.popular
);

export const selectIsFetchingNowPlaying = createSelector(
	[selectMovies],
	(movies) => movies.isFetchingNowPlaying
);

export const selectNowPlayingMovies = createSelector(
	[selectMovies],
	(movies) => movies.nowPlaying
);

export const selectIsFetchingUpcomming = createSelector(
	[selectMovies],
	(movies) => movies.isFetchingUpcomming
);

export const selectUpcommingMovies = createSelector(
	[selectMovies],
	(movies) => movies.upcomming
);

export const selectGenres = createSelector(
	[selectMovies],
	(movies) => movies.genres
);
