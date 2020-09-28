import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MediaCollection from '../media-collection/media-collection.component';
import MovieCard from '../movie-card/movie-card.component';
import SkeletonLoader from '../skeleton-loader/skeleton-loader.component';

import { fetchUpcommingMoviesStart } from '../../redux/movies/movies.actions';
import {
	selectUpcommingMovies,
	selectIsFetchingUpcomming,
} from '../../redux/movies/movies.selectors';

const UpcommingMovies = ({
	name = 'Upcomming Movies',
	limit,
	movies,
	fetchUpcommingMovies,
	isLoading,
}) => {
	useEffect(() => {
		fetchUpcommingMovies();
	}, [fetchUpcommingMovies]);

	if (isLoading) {
		return <SkeletonLoader />;
	}

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
	isLoading: selectIsFetchingUpcomming,
});

const mapDispatchToProps = (dispatch) => ({
	fetchUpcommingMovies: () => dispatch(fetchUpcommingMoviesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcommingMovies);
