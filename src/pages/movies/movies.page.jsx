import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import {
	fetchPopularMoviesStart,
	fetchNowPlayingMoviesStart,
	fetchUpcommingMoviesStart,
	fetchGenreStart,
} from '../../redux/movies/movies.actions';

import MovieListPage from '../movie-list/movie-list.page';

import './movies.styles.scss';

const MoviesPage = ({
	fetchPopularMoviesStart,
	fetchNowPlayingMoviesStart,
	fetchUpcommingMoviesStart,
	fetchGenreStart,
	match,
}) => {
	useEffect(() => {
		fetchPopularMoviesStart();
		fetchNowPlayingMoviesStart();
		fetchUpcommingMoviesStart();
		fetchGenreStart();
	}, [
		fetchPopularMoviesStart,
		fetchNowPlayingMoviesStart,
		fetchUpcommingMoviesStart,
		fetchGenreStart,
	]);

	return (
		<Switch>
			<Route exact path={match.path} component={MovieListPage} />
			<Route
				path={`${match.path}/:movieId`}
				render={() => <h1>Movie Description</h1>}
			/>
		</Switch>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchPopularMoviesStart: () => dispatch(fetchPopularMoviesStart()),
	fetchNowPlayingMoviesStart: () => dispatch(fetchNowPlayingMoviesStart()),
	fetchUpcommingMoviesStart: () => dispatch(fetchUpcommingMoviesStart()),
	fetchGenreStart: () => dispatch(fetchGenreStart()),
});

export default connect(null, mapDispatchToProps)(MoviesPage);
