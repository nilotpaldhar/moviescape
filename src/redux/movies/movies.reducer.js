import { MoviesActionTypes } from './movies.types';

const INITIAL_STATE = {
	isFetchingPopular: false,
	popular: [],
	isFetchingNowPlaying: false,
	nowPlaying: [],
	isFetchingUpcomming: false,
	upcomming: [],
	error: null,
	genres: [],
	baseUrl: '/movies',
};

const moviesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MoviesActionTypes.FETCH_GENRE_SUCCESS:
			return { ...state, genres: action.payload, error: null };

		case MoviesActionTypes.FETCH_GENRE_FAILURE:
			return { ...state, error: action.payload };

		case MoviesActionTypes.FETCH_POPULAR_MOVIES_START:
			return { ...state, isFetchingPopular: true };

		case MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_START:
			return { ...state, isFetchingNowPlaying: true };

		case MoviesActionTypes.FETCH_UPCOMMING_MOVIES_START:
			return { ...state, isFetchingUpcomming: true };

		case MoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
			return {
				...state,
				isFetchingPopular: false,
				popular: action.payload,
				error: null,
			};

		case MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS:
			return {
				...state,
				isFetchingNowPlaying: false,
				nowPlaying: action.payload,
				error: null,
			};

		case MoviesActionTypes.FETCH_UPCOMMING_MOVIES_SUCCESS:
			return {
				...state,
				isFetchingUpcomming: false,
				upcomming: action.payload,
				error: null,
			};

		case MoviesActionTypes.FETCH_POPULAR_MOVIES_FAILURE:
			return { ...state, isFetchingPopular: false, error: action.payload };

		case MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE:
			return { ...state, isFetchingNowPlaying: false, error: action.payload };

		case MoviesActionTypes.FETCH_UPCOMMING_MOVIES_FAILURE:
			return { ...state, isFetchingUpcomming: false, error: action.payload };

		default:
			return state;
	}
};

export default moviesReducer;
