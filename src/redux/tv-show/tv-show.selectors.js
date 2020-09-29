import { createSelector } from 'reselect';

const selectTvShow = (state) => state.tvShow;

// Selectors for tv show details
export const selectIsFetchingDetails = createSelector(
	[selectTvShow],
	(tvShow) => tvShow.isFetchingDetails
);

export const selectTvDetails = createSelector(
	[selectTvShow],
	(tvShow) => tvShow.details
);

// Selectors for tv show videos
export const selectIsFetchingVideos = createSelector(
	[selectTvShow],
	(tvShow) => tvShow.isFetchingVideos
);

export const selectTvVideos = createSelector(
	[selectTvShow],
	(tvShow) => tvShow.videos
);

// Selectors for tv show casts
export const selectIsFetchingCasts = createSelector(
	[selectTvShow],
	(tvShow) => tvShow.isFetchingCasts
);

export const selectTvCasts = createSelector(
	[selectTvShow],
	(tvShow) => tvShow.casts
);

// Selectors for tv show casts
export const selectError = createSelector(
	[selectTvShow],
	(tvShow) => tvShow.error
);
