import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.page';
import MoviesPage from './pages/movies/movies.page';
import AboutPage from './pages/about/about.page';

import './App.scss';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<main className='app__content'>
				<Switch>
					<Route exact path='/movies' component={MoviesPage} />
					<Route
						exact
						path='/movies/:id'
						render={() => <h1>Movies Description</h1>}
					/>
					<Route
						exact
						path='/tv-shows/:id'
						render={() => <h1>Tv Shows Description</h1>}
					/>
					<Route exact path='/about' component={AboutPage} />
					<Route exact path='/' component={HomePage} />
				</Switch>
			</main>
			<Footer />
		</div>
	);
};

export default App;
