import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CastCollection from '../cast-collection/cast-collection.component';
import SkeletonLoader from '../skeleton-loader/skeleton-loader.component';

import { fetchMovieCastsStart } from '../../redux/movie/movie.actions';
import {
	selectIsFetchingCasts,
	selectMovieCasts,
} from '../../redux/movie/movie.selectors';

const MovieCastCollection = ({ id, fetchMovieCasts, name, isLoading,casts, }) => {
	useEffect(() => {
		fetchMovieCasts(id);
	}, [fetchMovieCasts, id]);

	if (isLoading) {
		return <SkeletonLoader />;
	}

	return <CastCollection name={name} casts={casts} />;
};

const mapStateToProps = createStructuredSelector({
	casts: selectMovieCasts,
	isLoading: selectIsFetchingCasts,
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovieCasts: (id) => dispatch(fetchMovieCastsStart(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieCastCollection);
