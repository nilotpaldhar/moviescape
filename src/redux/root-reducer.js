import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer';
import movieReducer from './movie/movie.reducer';
import tvShowsReducer from './tv-shows/tv-shows.reducer';
import tvShowReducer from './tv-show/tv-show.reducer';

const rootReducer = combineReducers({
	movies: moviesReducer,
	movie: movieReducer,
	tvShows: tvShowsReducer,
	tvShow: tvShowReducer,
});

export default rootReducer;
