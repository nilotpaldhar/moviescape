import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MediaCollection from '../media-collection/media-collection.component';
import MovieCard from '../movie-card/movie-card.component';
import SkeletonLoader from '../skeleton-loader/skeleton-loader.component';

import { fetchNowPlayingMoviesStart } from '../../redux/movies/movies.actions';
import {
	selectNowPlayingMovies,
	selectIsFetchingNowPlaying,
} from '../../redux/movies/movies.selectors';

const NowPlayingMovies = ({
	name = 'Now Playing List',
	limit,
	movies,
	fetchNowPlayingMovies,
	isLoading,
}) => {
	useEffect(() => {
		fetchNowPlayingMovies();
	}, [fetchNowPlayingMovies]);

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
	movies: selectNowPlayingMovies,
	isLoading: selectIsFetchingNowPlaying,
});

const mapDispatchToProps = (dispatch) => ({
	fetchNowPlayingMovies: () => dispatch(fetchNowPlayingMoviesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlayingMovies);
