import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import PreLoader from './components/pre-loader/pre-loader.component';

import './App.scss';

const HomePage = lazy(() => import('./pages/home/home.page'));
const MoviesPage = lazy(() => import('./pages/movies/movies.page'));
const MovieDetailsPage = lazy(() =>
	import('./pages/movie-details/movie-details.page')
);
const TvShowDetailsPage = lazy(() =>
	import('./pages/tv-show-details/tv-show-details.page')
);
const AboutPage = lazy(() => import('./pages/about/about.page'));
const NotFound = lazy(() =>
	import('./components/not-found/not-found.component')
);

const App = () => {
	return (
		<div className='app'>
			<ErrorBoundary>
				<Header />
				<Suspense fallback={<PreLoader />}>
					<main className='app__content'>
						<Switch>
							<Route exact path='/movies' component={MoviesPage} />
							<Route exact path='/movies/:id' component={MovieDetailsPage} />
							<Route exact path='/tv-shows/:id' component={TvShowDetailsPage} />
							<Route exact path='/about' component={AboutPage} />
							<Route exact path='/' component={HomePage} />
							{/* Fallback route */}
							<Route exact path='*' component={NotFound} />
						</Switch>
					</main>
				</Suspense>
				<Footer />
			</ErrorBoundary>
		</div>
	);
};

export default App;
