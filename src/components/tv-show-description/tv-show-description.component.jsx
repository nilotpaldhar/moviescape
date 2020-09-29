import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MediaDescription from '../media-description/media-description.component';
import TvShowDescriptionSkeleton from './tv-show-description.skeleton';

import { getMovieTrailerUrl } from '../../utils/getMovieTrailers';

import {
	fetchTvDetailsStart,
	fetchTvVideosStart,
} from '../../redux/tv-show/tv-show.actions';
import {
	selectTvDetails,
	selectTvVideos,
} from '../../redux/tv-show/tv-show.selectors';

const TvShowDescription = ({
	id,
	fetchTvDetails,
	fetchTvVideos,
	details,
	videos,
}) => {
	useEffect(() => {
		fetchTvDetails(id);
		fetchTvVideos(id);
	}, [fetchTvDetails, fetchTvVideos, id]);

	const trailerUrl = getMovieTrailerUrl(videos);

	if (!details) {
		return <TvShowDescriptionSkeleton />;
	}

	return <MediaDescription details={details} trailerUrl={trailerUrl} />;
};

const mapStateToProps = createStructuredSelector({
	details: selectTvDetails,
	videos: selectTvVideos,
});

const mapDispatchToProps = (dispatch) => ({
	fetchTvDetails: (id) => dispatch(fetchTvDetailsStart(id)),
	fetchTvVideos: (id) => dispatch(fetchTvVideosStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TvShowDescription);
