import React from 'react';

import MediaCollection from '../media-collection/media-collection.component';

const MovieCollection = ({ name, limit, movies }) => {
	return <MediaCollection name={name} limit={limit} mediaList={movies} />;
};

export default MovieCollection;
