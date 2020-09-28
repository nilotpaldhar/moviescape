import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MediaCollection from '../media-collection/media-collection.component';
import MovieCard from '../movie-card/movie-card.component';

import { fetchUpcommingMoviesStart } from '../../redux/movies/movies.actions';
import { selectUpcommingMovies } from '../../redux/movies/movies.selectors';

const UpcommingMovies = ({
	name = 'Upcomming Movies',
	limit,
	movies,
	fetchUpcommingMovies,
}) => {
	useEffect(() => {
		fetchUpcommingMovies();
	}, [fetchUpcommingMovies]);

	return (
		<MediaCollection
			name={name}
			limit={limit}
			mediaList={movies}
			Component={MovieCard}
		/>
	);
};

const mapStateToProps = createStructuredSelector({
	movies: selectUpcommingMovies,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUpcommingMovies: () => dispatch(fetchUpcommingMoviesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcommingMovies);
