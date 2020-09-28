// Get genre name in a string format from an array
export const getGenreNamesFromArray = (genres = [], ids = []) => {
	const genresArray = genres
		.filter((genre) => ids.includes(genre.id))
		.map((genre) => genre.name);

	return genresArray.join(', ');
};

// Get genre name in a string format from an object
export const getGenreNamesFromObj = (genres = null) => {
	// Check if genre is null
	if (!genres) return '';

	const genresLength = genres.length;
	return genres.map((genre, idx) => {
		if (genresLength === idx + 1) {
			return `${genre.name}`;
		} else {
			return `${genre.name}, `;
		}
	});
};
