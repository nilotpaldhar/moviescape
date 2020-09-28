import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MediaCollection from '../media-collection/media-collection.component';
import MovieCard from '../movie-card/movie-card.component';

import { fetchPopularMoviesStart } from '../../redux/movies/movies.actions';
import { selectPopularMovies } from '../../redux/movies/movies.selectors';

const PopularMovies = ({
	name = 'Popular Movies',
	limit,
	movies,
	fetchPopularMovies,
}) => {
	useEffect(() => {
		fetchPopularMovies();
	}, [fetchPopularMovies]);

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
	movies: selectPopularMovies,
});

const mapDispatchToProps = (dispatch) => ({
	fetchPopularMovies: () => dispatch(fetchPopularMoviesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
