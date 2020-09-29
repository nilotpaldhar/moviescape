import { TvShowActionTypes } from './tv-show.types';

const INITIAL_STATE = {
	isFetchingDetails: false,
	details: null,
	isFetchingVideos: false,
	videos: [],
	isFetchingCasts: false,
	casts: [],
	error: null,
};

const tvShowReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		// Fetching single tv show details
		case TvShowActionTypes.FETCHING_TV_DETAILS_START:
			return { ...state, isFetchingDetails: true, details: null };

		case TvShowActionTypes.FETCHING_TV_DETAILS_SUCCESS:
			return { ...state, isFetchingDetails: false, details: action.payload };

		case TvShowActionTypes.FETCHING_TV_DETAILS_FAILURE:
			return { ...state, isFetchingDetails: false, error: action.payload };

		// Fetching tv show videos
		case TvShowActionTypes.FETCHING_TV_VIDEOS_START:
			return { ...state, isFetchingVideos: true, videos: [] };

		case TvShowActionTypes.FETCHING_TV_VIDEOS_SUCCESS:
			return { ...state, isFetchingVideos: false, videos: action.payload };

		case TvShowActionTypes.FETCHING_TV_VIDEOS_FAILURE:
			return { ...state, isFetchingVideos: false, error: action.payload };

		// Fetching tv show casts
		case TvShowActionTypes.FETCHING_TV_CASTS_START:
			return { ...state, isFetchingCasts: true, casts: [] };

		case TvShowActionTypes.FETCHING_TV_CASTS_SUCCESS:
			return { ...state, isFetchingCasts: false, casts: action.payload };

		case TvShowActionTypes.FETCHING_TV_CASTS_FAILURE:
			return { ...state, isFetchingCasts: false, error: action.payload };

		default:
			return state;
	}
};

export default tvShowReducer;
