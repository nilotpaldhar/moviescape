import React from 'react';
import { Link } from 'react-router-dom';
import './media-card.styles.scss';

// Testing
import imgSrc from '../../assets/images/movies/m3.jpg';

const MediaCard = () => {
	return (
		<div className='mediacard'>
			<Link to='/'>
				<div className='mediacard__header'>
					<img src={imgSrc} alt='image' className='mediacard__img' />
					<span className='mediacard__rating'>8.6</span>
				</div>
			</Link>
			<div className='mediacard__body'>
				<Link to='/' className='mediacard__name'>
					Knives Out
				</Link>
				<div className='mediacard__desc'>
					<span className='mediacard__date'>Sep 29, 2020</span>
					<span className='mediacard__genre'>Drama, Comedy</span>
				</div>
			</div>
		</div>
	);
};

export default MediaCard;
