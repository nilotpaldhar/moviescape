import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.page';
import MoviesPage from './pages/movies/movies.page';
import AboutPage from './pages/about/about.page';

// Testing
import MediaDescription from './components/media-description/media-description.component';

import './App.scss';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<main className='app__content'>
				<Switch>
					<Route exact path='/movies' component={MoviesPage} />
					<Route exact path='/movies/:id' component={MediaDescription} />
					<Route exact path='/tv-shows/:id' component={MediaDescription} />
					<Route exact path='/about' component={AboutPage} />
					<Route exact path='/' component={HomePage} />
				</Switch>
			</main>
			<Footer />
		</div>
	);
};

export default App;
