import { createSelector } from 'reselect';

const selectTvShows = (state) => state.tvShows;

export const selectIsFetching = createSelector(
	[selectTvShows],
	(tvShows) => tvShows.isFetching
);

export const selectPopularTvShows = createSelector(
	[selectTvShows],
	(tvShows) => tvShows.popular
);

export const selectTvGenres = createSelector(
	[selectTvShows],
	(tvShows) => tvShows.genres
);
