import React from 'react';

import MovieDescription from '../../components/movie-description/movie-description.component';
import MovieCastCollection from '../../components/movie-cast-collection/movie-cast-collection.component';

const MovieDetailsPage = ({ match }) => {
	const { id } = match.params;

	return (
		<>
			<MovieDescription id={id} />
			<hr className='divider' />
			<MovieCastCollection id={id} />
		</>
	);
};

export default MovieDetailsPage;
