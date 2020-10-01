import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './pre-loader.styles.scss';

const PreLoader = () => {
	return (
		<div className='pre-loader'>
			<Spinner animation='grow' variant='primary' />
		</div>
	);
};

export default PreLoader;
