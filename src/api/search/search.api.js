import { get } from '../config.api';

export default {
	movie: (query) => get(`/search/movie?query=${query}&include_adult=false`),
};
