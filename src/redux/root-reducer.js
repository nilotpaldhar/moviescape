import { combineReducers } from 'redux';

import moviesReducer from './movies/movies.reducer';
import movieReducer from './movie/movie.reducer';
import tvShowsReducer from './tv-shows/tv-shows.reducer';
import tvShowReducer from './tv-show/tv-show.reducer';
import searchReducer from './search/search.reducer';

const rootReducer = combineReducers({
	movies: moviesReducer,
	movie: movieReducer,
	tvShows: tvShowsReducer,
	tvShow: tvShowReducer,
	search: searchReducer,
});

export default rootReducer;
