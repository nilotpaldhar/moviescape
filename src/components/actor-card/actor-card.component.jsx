import React from 'react';
import './actor-card.styles.scss';

// Testing
import imgSrc from '../../assets/images/actors/a3.jpg';

const ActorCard = () => {
	return (
		<div className='actorcard'>
			<img src={imgSrc} alt='image' className='actorcard__img' />
			<div className='actorcard__body'>
				<div className='actorcard__name'>Steve Williams</div>
				<div className='actorcard__desc'>
					<span className='actorcard__role'>Sandy</span>
				</div>
			</div>
		</div>
	);
};

export default ActorCard;
