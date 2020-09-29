import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TvShowDescription from '../../components/tv-show-description/tv-show-description.component';
import TvShowCastCollection from '../../components/tv-show-cast-collection/tv-show-cast-collection.compoent';
import NotFound from '../../components/not-found/not-found.component';

import { selectError } from '../../redux/tv-show/tv-show.selectors';

const TvShowDetailsPage = ({ match, error }) => {
	const { id } = match.params;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Check to see if resourse is available
	if (
		error &&
		error.toLowerCase() === 'the resource you requested could not be found.'
	) {
		return <NotFound />;
	}

	return (
		<>
			<TvShowDescription id={id} />
			<hr className='divider' />
			<TvShowCastCollection id={id} />
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	error: selectError,
});

export default connect(mapStateToProps)(TvShowDetailsPage);
