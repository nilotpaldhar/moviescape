import { createSelector } from 'reselect';

const selectMovie = (state) => state.movie;

// Selectors for movie details
export const selectIsFetchingDetails = createSelector(
	[selectMovie],
	(movie) => movie.isFetchingDetails
);

export const selectMovieDetails = createSelector(
	[selectMovie],
	(movie) => movie.details
);

// Selectors for movie videos
export const selectIsFetchingVideos = createSelector(
	[selectMovie],
	(movie) => movie.isFetchingVideos
);

export const selectMovieVideos = createSelector(
	[selectMovie],
	(movie) => movie.videos
);

// Selectors for movie casts
export const selectIsFetchingCasts = createSelector(
	[selectMovie],
	(movie) => movie.isFetchingCasts
);

export const selectMovieCasts = createSelector(
	[selectMovie],
	(movie) => movie.casts
);

// Selector for error
export const selectError = createSelector(
	[selectMovie],
	(movie) => movie.error
);
