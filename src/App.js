import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.page';
import MoviesPage from './pages/movies/movies.page';
import MovieDetailsPage from './pages/movie-details/movie-details.page';
import TvShowDetailsPage from './pages/tv-show-details/tv-show-details.page';
import AboutPage from './pages/about/about.page';
import NotFound from './components/not-found/not-found.component';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './App.scss';

const App = () => {
	return (
		<div className='app'>
			<ErrorBoundary>
				<Header />
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
				<Footer />
			</ErrorBoundary>
		</div>
	);
};

export default App;
