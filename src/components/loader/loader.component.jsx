import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './loader.styles.scss';

const Loader = () => {
	return (
		<div className='loader'>
			<Spinner className='loader__inner' animation='border' variant='light' />
		</div>
	);
};

export default Loader;
