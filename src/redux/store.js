import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './root-reducer';

const composeEnhancer =
	(process.env.NODE_ENV === 'development' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const middlewares = [];

export const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(...middlewares))
);
