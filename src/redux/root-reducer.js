import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer';
import tvShowsReducer from './tv-shows/tv-shows.reducer';

const rootReducer = combineReducers({
	movies: moviesReducer,
	tvShows: tvShowsReducer,
});

export default rootReducer;
