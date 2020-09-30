import React from 'react';
import ReactPlayer from 'react-player/youtube';

import placeholder from '../../assets/images/placeholder/video-palceholder.png';

const VideoPlayer = ({ url = '' }) => {
	const baseVideoUrl = process.env.REACT_APP_MOVIEDB_VIDEO_BASE_URL;

	if (!url) {
		return (
			<img
				src={placeholder}
				alt='No Trailer'
				style={{ width: '100%', height: '100%' }}
			/>
		);
	}

	return (
		<ReactPlayer url={`${baseVideoUrl}${url}`} controls={true} width='100%' />
	);
};

export default VideoPlayer;
