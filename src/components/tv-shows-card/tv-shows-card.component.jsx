import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTvGenres } from '../../redux/tv-shows/tv-shows.selectors';

import MediaCard from '../media-card/media-card.component';

const TvShowsCard = ({ media, genres }) => {
	return <MediaCard media={media} genres={genres} baseUrl='/tv-shows' />;
};

const mapStateToProps = createStructuredSelector({
	genres: selectTvGenres,
});

export default connect(mapStateToProps)(TvShowsCard);
