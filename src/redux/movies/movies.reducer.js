import { MoviesActionTypes } from './movies.types';

const INITIAL_STATE = {
	isLoading: false,
	popular: [],
	nowPlaying: [],
	upcomming: [],
	error: null,
	genres: [],
};

const moviesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MoviesActionTypes.FETCH_GENRE_SUCCESS:
			return { ...state, genres: action.payload, error: null };

		case MoviesActionTypes.FETCH_GENRE_FAILURE:
			return { ...state, error: action.payload };

		case MoviesActionTypes.FETCH_POPULAR_MOVIES_START:
		case MoviesActionTypes.FETCH_UPCOMMING_MOVIES_START:
		case MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_START:
			return { ...state, isLoading: true };

		case MoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				popular: action.payload,
				error: null,
			};

		case MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				nowPlaying: action.payload,
				error: null,
			};

		case MoviesActionTypes.FETCH_UPCOMMING_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				upcomming: action.payload,
				error: null,
			};

		case MoviesActionTypes.FETCH_POPULAR_MOVIES_FAILURE:
		case MoviesActionTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE:
		case MoviesActionTypes.FETCH_UPCOMMING_MOVIES_FAILURE:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};

export default moviesReducer;
