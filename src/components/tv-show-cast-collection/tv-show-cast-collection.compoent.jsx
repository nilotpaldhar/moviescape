import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CastCollection from '../cast-collection/cast-collection.component';
import SkeletonLoader from '../skeleton-loader/skeleton-loader.component';

import { fetchTvCastsStart } from '../../redux/tv-show/tv-show.actions';
import {
	selectIsFetchingCasts,
	selectTvCasts,
} from '../../redux/tv-show/tv-show.selectors';

const TvShowCastCollection = ({ id, fetchTvCasts, name, isLoading, casts }) => {
	useEffect(() => {
		fetchTvCasts(id);
	}, [fetchTvCasts, id]);

	if (isLoading) {
		return <SkeletonLoader />;
	}

	return <CastCollection name={name} casts={casts} />;
};

const mapStateToProps = createStructuredSelector({
	casts: selectTvCasts,
	isLoading: selectIsFetchingCasts,
});

const mapDispatchToProps = (dispatch) => ({
	fetchTvCasts: (id) => dispatch(fetchTvCastsStart(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TvShowCastCollection);
