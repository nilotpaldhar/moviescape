import React from 'react';

import TvShowDescription from '../../components/tv-show-description/tv-show-description.component';
import TvShowCastCollection from '../../components/tv-show-cast-collection/tv-show-cast-collection.compoent';
const TvShowDetailsPage = ({ match }) => {
	const { id } = match.params;

	return (
		<>
			<TvShowDescription id={id} />
			<hr className='divider' />
			<TvShowCastCollection id={id} />
		</>
	);
};

export default TvShowDetailsPage;
