import { createSelector } from 'reselect';

const selectSearch = (state) => state.search;

export const selectIsLoading = createSelector(
	[selectSearch],
	(search) => search.isLoading
);

export const selectQuery = createSelector(
	[selectSearch],
	(search) => search.query
);

export const selectResults = createSelector(
	[selectSearch],
	(search) => search.results
);
