import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './not-found.styles.scss';

const NotFound = () => {
	return (
		<div className='not-found'>
			<Container>
				<h1 className='not-found__title'>404 Not Found</h1>
				<p className='not-found__desc'>
					This is not the page you are looking for!
				</p>
				<Link to='/' className='btn btn-primary'>
					Back to Home
				</Link>
			</Container>
		</div>
	);
};

export default NotFound;
