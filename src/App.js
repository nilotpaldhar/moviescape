import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import MoviesPage from './pages/movies/movies.page';

import './App.scss';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<main className='app__content'>
				<Switch>
					<Route path='/movies' component={MoviesPage} />
					<Route path='/' render={() => <h1>Home</h1>} />
				</Switch>
			</main>
			<Footer />
		</div>
	);
};

export default App;
