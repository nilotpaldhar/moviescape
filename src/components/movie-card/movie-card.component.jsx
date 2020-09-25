import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchGenreStart } from '../../redux/movies/movies.actions';
import { selectGenres } from '../../redux/movies/movies.selectors';

import MediaCard from '../media-card/media-card.component';

const MovieCard = ({ media, genres, fetchGenreStart }) => {
	useEffect(() => {
		fetchGenreStart();
	}, [fetchGenreStart]);

	return <MediaCard media={media} genres={genres} baseUrl='/movies' />;
};

const mapStateToProps = createStructuredSelector({
	genres: selectGenres,
});

const mapDispatchToProps = (dispatch) => ({
	fetchGenreStart: () => dispatch(fetchGenreStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
