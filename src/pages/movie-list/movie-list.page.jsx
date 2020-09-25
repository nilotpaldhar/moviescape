import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Hero from '../../components/hero/hero.compoent';
import MediaCollection from '../../components/media-collection/media-collection.component';
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
				<MediaCollection
					name='Popular Movies'
					mediaList={popularMovies}
					limit={4}
					baseUrl={match.path}
				/>
			</Hero>
			<MediaCollection
				name='Now Playing'
				mediaList={nowPlayingMovies}
				limit={8}
				baseUrl={match.path}
			/>
			<hr className='divider' />
			<MediaCollection
				name='Upcomming Movies'
				mediaList={upcommingMovies}
				limit={8}
				baseUrl={match.path}
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
