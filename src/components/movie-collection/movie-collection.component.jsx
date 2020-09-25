import React from 'react';

import MediaCollection from '../media-collection/media-collection.component';
import MovieCard from '../movie-card/movie-card.component';

const MovieCollection = ({ name, limit, movies }) => {
	return (
		<MediaCollection
			name={name}
			limit={limit}
			mediaList={movies}
			Component={MovieCard}
		/>
	);
};

export default MovieCollection;
