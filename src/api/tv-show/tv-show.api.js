import { get } from '../config.api';

export default {
	details: (id) => get(`/tv/${id}`),
	videos: (id) => get(`/tv/${id}/videos`),
	casts: (id) => get(`/tv/${id}/credits`),
};
