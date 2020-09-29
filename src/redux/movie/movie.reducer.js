import { MovieActionTypes } from './movie.types';

const INITIAL_STATE = {
	isFetchingDetails: false,
	details: null,
	isFetchingVideos: false,
	videos: [],
	isFetchingCasts: false,
	casts: [],
	isFetchingRelated: false,
	related: [],
	error: null,
};

const movieReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		// Fetching single movie details
		case MovieActionTypes.FETCHING_MOVIE_DETAILS_START:
			return { ...state, isFetchingDetails: true, details: null };

		case MovieActionTypes.FETCHING_MOVIE_DETAILS_SUCCESS:
			return { ...state, isFetchingDetails: false, details: action.payload };

		case MovieActionTypes.FETCHING_MOVIE_DETAILS_FAILURE:
			return { ...state, isFetchingDetails: false, error: action.payload };

		// Fetching movie videos
		case MovieActionTypes.FETCHING_MOVIE_VIDEOS_START:
			return { ...state, isFetchingVideos: true, videos: [] };

		case MovieActionTypes.FETCHING_MOVIE_VIDEOS_SUCCESS:
			return { ...state, isFetchingVideos: false, videos: action.payload };

		case MovieActionTypes.FETCHING_MOVIE_VIDEOS_FAILURE:
			return { ...state, isFetchingVideos: false, error: action.payload };

		// Fetching movie casts
		case MovieActionTypes.FETCHING_MOVIE_CASTS_START:
			return { ...state, isFetchingCasts: true, casts: [] };

		case MovieActionTypes.FETCHING_MOVIE_CASTS_SUCCESS:
			return { ...state, isFetchingCasts: false, casts: action.payload };

		case MovieActionTypes.FETCHING_MOVIE_CASTS_FAILURE:
			return { ...state, isFetchingCasts: false, error: action.payload };

		default:
			return state;
	}
};

export default movieReducer;
