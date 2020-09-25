// Get genre name in a string format
export const getGenreNames = (genres = [], ids = []) => {
	const genresArray = genres
		.filter((genre) => ids.includes(genre.id))
		.map((genre) => genre.name);

	return genresArray.join(', ');
};
