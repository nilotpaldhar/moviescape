import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = ({ url = '' }) => {
	const baseVideoUrl = process.env.REACT_APP_MOVIEDB_VIDEO_BASE_URL;

	return (
		<ReactPlayer url={`${baseVideoUrl}${url}`} controls={true} width='100%' />
	);
};

export default VideoPlayer;
