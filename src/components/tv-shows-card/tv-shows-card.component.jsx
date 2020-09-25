import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchTvGenreStart } from '../../redux/tv-shows/tv-shows.actions';
import { selectTvGenres } from '../../redux/tv-shows/tv-shows.selectors';

import MediaCard from '../media-card/media-card.component';

const TvShowsCard = ({ media, genres, fetchTvGenreStart }) => {
	useEffect(() => {
		fetchTvGenreStart();
	}, [fetchTvGenreStart]);
	return <MediaCard media={media} genres={genres} baseUrl='/tv-shows' />;
};

const mapStateToProps = createStructuredSelector({
	genres: selectTvGenres,
});

const mapDispatchToProps = (dispatch) => ({
	fetchTvGenreStart: () => dispatch(fetchTvGenreStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TvShowsCard);
