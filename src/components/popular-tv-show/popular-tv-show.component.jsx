import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MediaCollection from '../media-collection/media-collection.component';
import TvShowsCard from '../tv-shows-card/tv-shows-card.component';
import SkeletonLoader from '../skeleton-loader/skeleton-loader.component';

import { fetchPopularTvShowsStart } from '../../redux/tv-shows/tv-shows.actions';
import {
	selectPopularTvShows,
	selectIsFetching,
} from '../../redux/tv-shows/tv-shows.selectors';

const PopularTvShow = ({
	name = 'Popular TV Shows',
	limit,
	tvShows,
	fetchPopularTvShows,
	isLoading,
}) => {
	useEffect(() => {
		fetchPopularTvShows();
	}, [fetchPopularTvShows]);

	if (isLoading) {
		return <SkeletonLoader />;
	}

	return (
		<MediaCollection
			name={name}
			limit={limit}
			mediaList={tvShows}
			Component={TvShowsCard}
		/>
	);
};

const mapStateToProps = createStructuredSelector({
	tvShows: selectPopularTvShows,
	isLoading: selectIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
	fetchPopularTvShows: () => dispatch(fetchPopularTvShowsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularTvShow);
