import { TvShowsActionTypes } from './tv-shows.types';

const INITIAL_STATE = {
	isFetching: false,
	popular: [],
	genres: [],
	error: null,
};

const tvShowsReducer = (state = INITIAL_STATE, action) => {
	switch (action.types) {
		case TvShowsActionTypes.FETCH_TV_SHOWS_GENRE_SUCCESS:
			return { ...state, genres: action.payload, error: null };

		case TvShowsActionTypes.FETCH_GENRE_FAILURE:
			return { ...state, error: action.payload };

		case TvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_START:
			return { ...state, isFetching: true };

		case TvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_SUCCESS:
			return {
				...state,
				isFetching: false,
				popular: action.payload,
				error: null,
			};

		case TvShowsActionTypes.FETCH_POPULAR_TV_SHOWS_FAILURE:
			return { ...state, isFetching: false, error: action.payload };

		default:
			return state;
	}
};

export default tvShowsReducer;
