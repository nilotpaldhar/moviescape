import { get } from '../config.api';

export default {
	popularTvShows: () => get('/tv/popular'),
	genre: () => get('/genre/tv/list'),
};
