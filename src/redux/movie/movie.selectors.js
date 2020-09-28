import { createSelector } from 'reselect';

const selectMovie = (state) => state.movie;

export const selectIsFetchingDetails = createSelector(
	[selectMovie],
	(movie) => movie.isFetchingDetails
);

export const selectMovieDetails = createSelector(
	[selectMovie],
	(movie) => movie.details
);

export const selectIsFetchingVideos = createSelector(
	[selectMovie],
	(movie) => movie.isFetchingVideos
);

export const selectMovieVideos = createSelector(
	[selectMovie],
	(movie) => movie.videos
);
