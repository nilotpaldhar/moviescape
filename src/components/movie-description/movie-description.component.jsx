import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MediaDescription from '../media-description/media-description.component';

import { getMovieTrailerUrl } from '../../utils/getMovieTrailers';

import {
	fetchMovieDetailsStart,
	fetchMovieVideosStart,
} from '../../redux/movie/movie.actions';
import {
	selectMovieDetails,
	selectMovieVideos,
} from '../../redux/movie/movie.selectors';

const MovieDescription = ({
	match,
	fetchMovieDetails,
	fetchMovieVideos,
	details,
	videos,
}) => {
	const { id } = match.params;
	const trailerUrl = getMovieTrailerUrl(videos);

	useEffect(() => {
		fetchMovieDetails(id);
		fetchMovieVideos(id);
	}, [fetchMovieDetails, fetchMovieVideos, id]);

	if (!details) {
		return <h1>Loading...</h1>;
	}

	return <MediaDescription details={details} trailerUrl={trailerUrl} />;
};

const mapStateToProps = createStructuredSelector({
	details: selectMovieDetails,
	videos: selectMovieVideos,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovieDetails: (id) => dispatch(fetchMovieDetailsStart(id)),
	fetchMovieVideos: (id) => dispatch(fetchMovieVideosStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDescription);
