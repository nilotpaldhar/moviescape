import React from 'react';

import MediaCollection from '../media-collection/media-collection.component';
import TvShowsCard from '../tv-shows-card/tv-shows-card.component';

const TvShowCollection = ({ name, limit, tvShows }) => {
	return (
		<MediaCollection
			name={name}
			limit={limit}
			mediaList={tvShows}
			Component={TvShowsCard}
		/>
	);
};

export default TvShowCollection;
