import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer';
import movieReducer from './movie/movie.reducer';
import tvShowsReducer from './tv-shows/tv-shows.reducer';

const rootReducer = combineReducers({
	movies: moviesReducer,
	movie: movieReducer,
	tvShows: tvShowsReducer,
});

export default rootReducer;
