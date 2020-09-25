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
					{/* <Route path='/' component={Movies} /> */}
					<Route path='/movies' component={MoviesPage} />
					<Route path='/tv-shows' render={() => <h1>Tv Shows</h1>} />
				</Switch>
			</main>
			<Footer />
		</div>
	);
};

export default App;
