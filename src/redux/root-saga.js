import { all, call } from 'redux-saga/effects';

import { moviesSagas } from './movies/movies.sagas';
import { tvShowsSagas } from './tv-shows/tv-shows.sagas';

export default function* rootSaga() {
	yield all([call(moviesSagas), call(tvShowsSagas)]);
}
