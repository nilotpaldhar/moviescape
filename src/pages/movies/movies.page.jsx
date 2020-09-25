import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Hero from '../../components/hero/hero.compoent';
import MovieCollection from '../../components/movie-collection/movie-collection.component';

import {
	fetchPopularMoviesStart,
	fetchNowPlayingMoviesStart,
	fetchUpcommingMoviesStart,
} from '../../redux/movies/movies.actions';
import {
	selectPopularMovies,
	selectNowPlayingMovies,
	selectUpcommingMovies,
} from '../../redux/movies/movies.selectors';

import './movies.styles.scss';

const MoviesPage = ({
	fetchPopularMoviesStart,
	fetchNowPlayingMoviesStart,
	fetchUpcommingMoviesStart,
	popularMovies,
	nowPlayingMovies,
	upcommingMovies,
}) => {
	useEffect(() => {
		fetchPopularMoviesStart();
		fetchNowPlayingMoviesStart();
		fetchUpcommingMoviesStart();
	}, [
		fetchPopularMoviesStart,
		fetchNowPlayingMoviesStart,
		fetchUpcommingMoviesStart,
	]);

	return (
		<>
			<Hero>
				<MovieCollection
					name='Popular Movies'
					movies={popularMovies}
					limit={4}
				/>
			</Hero>
			<MovieCollection name='Now Playing' movies={nowPlayingMovies} limit={8} />
			<hr className='divider' />
			<MovieCollection
				name='Upcomming Movies'
				movies={upcommingMovies}
				limit={8}
			/>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	popularMovies: selectPopularMovies,
	nowPlayingMovies: selectNowPlayingMovies,
	upcommingMovies: selectUpcommingMovies,
});

const mapDispatchToProps = (dispatch) => ({
	fetchPopularMoviesStart: () => dispatch(fetchPopularMoviesStart()),
	fetchNowPlayingMoviesStart: () => dispatch(fetchNowPlayingMoviesStart()),
	fetchUpcommingMoviesStart: () => dispatch(fetchUpcommingMoviesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
