import axios from 'axios';

const apiClient = axios.create({
	baseURL: process.env.REACT_APP_MOVIEDB_BASE_URL,
});

apiClient.interceptors.request.use(
	(config) => {
		return {
			...config,
			headers: {
				'content-type': 'application/json',
				Accept: 'application/json',
				Authorization: process.env.REACT_APP_MOVIEDB_API_ACCESS_TOKEN,
			},
		};
	},
	(error) => Promise.reject(error)
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
