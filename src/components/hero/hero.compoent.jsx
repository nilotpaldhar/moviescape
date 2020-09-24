import React from 'react';
import './hero.styles.scss';

const Hero = ({ children }) => {
	return (
		<div className='hero'>
			<div className='hero__overlay'>{children}</div>
		</div>
	);
};

export default Hero;
