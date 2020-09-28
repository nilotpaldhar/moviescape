import { get } from '../config.api';

export default {
	details: (id) => get(`/movie/${id}`),
	videos: (id) => get(`/movie/${id}/videos`),
	casts: (id) => get(`/movie/${id}/credits`),
	related: (id) => get(`/movie/${id}/similar`),
};
