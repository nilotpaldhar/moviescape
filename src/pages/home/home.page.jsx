import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Hero from '../../components/hero/hero.compoent';
import MovieCollection from '../../components/movie-collection/movie-collection.component';
import TvShowCollection from '../../components/tv-show-collection/tv-show-collection.component';

import {
	fetchPopularMoviesStart,
	fetchNowPlayingMoviesStart,
} from '../../redux/movies/movies.actions';
import { fetchPopularTvShowsStart } from '../../redux/tv-shows/tv-shows.actions';
import {
	selectPopularMovies,
	selectNowPlayingMovies,
} from '../../redux/movies/movies.selectors';
import { selectPopularTvShows } from '../../redux/tv-shows/tv-shows.selectors';

const HomePage = ({
	fetchPopularMoviesStart,
	fetchNowPlayingMoviesStart,
	fetchPopularTvShowsStart,
	newMovies,
	popularMovies,
	popularTvShows,
}) => {
	useEffect(() => {
		fetchPopularMoviesStart();
		fetchNowPlayingMoviesStart();
		fetchPopularTvShowsStart();
	}, [
		fetchPopularMoviesStart,
		fetchNowPlayingMoviesStart,
		fetchPopularTvShowsStart,
	]);
	return (
		<>
			<Hero>
				<MovieCollection name='New Movies' movies={newMovies} limit={4} />
			</Hero>
			<MovieCollection name='Popular Movies' movies={popularMovies} limit={8} />
			<hr className='divider' />
			<TvShowCollection
				name='Popular TV Shows'
				tvShows={popularTvShows}
				limit={8}
			/>
		</>
	);
};
const mapStateToProps = createStructuredSelector({
	newMovies: selectNowPlayingMovies,
	popularMovies: selectPopularMovies,
	popularTvShows: selectPopularTvShows,
});

const mapDispatchToProps = (dispatch) => ({
	fetchPopularMoviesStart: () => dispatch(fetchPopularMoviesStart()),
	fetchNowPlayingMoviesStart: () => dispatch(fetchNowPlayingMoviesStart()),
	fetchPopularTvShowsStart: () => dispatch(fetchPopularTvShowsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
