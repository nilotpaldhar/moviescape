// Get a list youtube movie trailers
export const getMovieTrailerUrl = (videos = null) => {
	if (!videos) return;

	// Get trailers where type is trailer and site is youtube
	const trailers = videos
		.filter(
			(video) =>
				video.type.toLowerCase() === 'trailer' &&
				video.site.toLowerCase() === 'youtube'
		)
		.map((video) => video.key);

	return trailers[0];
};
