import React, { useEffect } from 'react';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { get } from './api/config.api';

import './App.scss';

const App = () => {
	useEffect(() => {
		get('/movie/popular')
			.then((res) => console.log(res.data))
			.catch((error) => console.log(error));
	});
	return (
		<div className='app'>
			<Header />
			<main className='app__content'>{/* Routes will go here */}</main>
			<Footer />
		</div>
	);
};

export default App;
