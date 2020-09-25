import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Hero from '../../components/hero/hero.compoent';
import MovieCollection from '../../components/movie-collection/movie-collection.component';
import {
	selectPopularMovies,
	selectNowPlayingMovies,
	selectUpcommingMovies,
} from '../../redux/movies/movies.selectors';

import './movie-list.styles.scss';

const MovieListPage = ({
	popularMovies,
	nowPlayingMovies,
	upcommingMovies,
	match,
}) => {
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

export default connect(mapStateToProps)(MovieListPage);
