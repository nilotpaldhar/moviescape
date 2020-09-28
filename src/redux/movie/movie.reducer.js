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
		case MovieActionTypes.FETCHING_MOVIE_DETAILS_START:
			return { ...state, isFetchingDetails: true, details: null };

		case MovieActionTypes.FETCHING_MOVIE_DETAILS_SUCCESS:
			return { ...state, isFetchingDetails: false, details: action.payload };

		case MovieActionTypes.FETCHING_MOVIE_DETAILS_FAILURE:
			return { ...state, isFetchingDetails: false, error: action.payload };

		case MovieActionTypes.FETCHING_MOVIE_VIDEOS_START:
			return { ...state, isFetchingVideos: true, videos: [] };

		case MovieActionTypes.FETCHING_MOVIE_VIDEOS_SUCCESS:
			return { ...state, isFetchingVideos: false, videos: action.payload };

		case MovieActionTypes.FETCHING_MOVIE_VIDEOS_FAILURE:
			return { ...state, isFetchingVideos: false, error: action.payload };

		default:
			return state;
	}
};

export default movieReducer;
