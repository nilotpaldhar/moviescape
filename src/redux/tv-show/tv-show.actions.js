import { TvShowActionTypes } from './tv-show.types';

// Fetching single tv show details
export const fetchTvDetailsStart = (id) => ({
	type: TvShowActionTypes.FETCHING_TV_DETAILS_START,
	payload: id,
});

export const fetchTvDetailsSuccess = (data) => ({
	type: TvShowActionTypes.FETCHING_TV_DETAILS_SUCCESS,
	payload: data,
});

export const fetchTvDetailsFailure = (errorMessage) => ({
	type: TvShowActionTypes.FETCHING_TV_DETAILS_FAILURE,
	payload: errorMessage,
});

// Fetching tv show videos
export const fetchTvVideosStart = (id) => ({
	type: TvShowActionTypes.FETCHING_TV_VIDEOS_START,
	payload: id,
});

export const fetchTvVideosSuccess = (data) => ({
	type: TvShowActionTypes.FETCHING_TV_VIDEOS_SUCCESS,
	payload: data,
});

export const fetchTvVideosFailure = (errorMessage) => ({
	type: TvShowActionTypes.FETCHING_TV_VIDEOS_FAILURE,
	payload: errorMessage,
});

// Fetching tv show casts
export const fetchTvCastsStart = (id) => ({
	type: TvShowActionTypes.FETCHING_TV_CASTS_START,
	payload: id,
});

export const fetchTvCastsSuccess = (data) => ({
	type: TvShowActionTypes.FETCHING_TV_CASTS_SUCCESS,
	payload: data,
});

export const fetchTvCastsFailure = (errorMessage) => ({
	type: TvShowActionTypes.FETCHING_TV_CASTS_FAILURE,
	payload: errorMessage,
});
