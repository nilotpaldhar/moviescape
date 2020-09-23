import React from 'react';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import './App.scss';

function App() {
	return (
		<div className='app'>
			<Header />
			<main className='app__content'>{/* Routes will go here */}</main>
			<Footer />
		</div>
	);
}

export default App;
