import { get } from '../config.api';

export default {
	popularMovies: () => get('/movie/popular'),
	nowPlayingMovies: () => get('/movie/now_playing'),
	upcommingMovies: () => get('/movie/upcoming'),
	genre: () => get('/genre/movie/list'),
};
