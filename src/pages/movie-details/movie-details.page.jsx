import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MovieDescription from '../../components/movie-description/movie-description.component';
import MovieCastCollection from '../../components/movie-cast-collection/movie-cast-collection.component';
import NotFound from '../../components/not-found/not-found.component';

import { selectError } from '../../redux/movie/movie.selectors';

const MovieDetailsPage = ({ match, error }) => {
	const { id } = match.params;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Check to see if resourse is available
	if (
		error &&
		error.toLowerCase() === 'the resource you requested could not be found.'
	) {
		return <NotFound />;
	}

	return (
		<>
			<MovieDescription id={id} />
			<hr className='divider' />
			<MovieCastCollection id={id} />
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	error: selectError,
});

export default connect(mapStateToProps)(MovieDetailsPage);
