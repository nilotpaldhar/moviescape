import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectGenres } from '../../redux/movies/movies.selectors';

import MediaCard from '../media-card/media-card.component';

const MovieCard = ({ media, genres }) => {
	return <MediaCard media={media} genres={genres} baseUrl='/movies' />;
};

const mapStateToProps = createStructuredSelector({
	genres: selectGenres,
});

export default connect(mapStateToProps)(MovieCard);
