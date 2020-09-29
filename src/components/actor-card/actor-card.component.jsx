import React from 'react';
import './actor-card.styles.scss';

const ActorCard = ({ cast }) => {
	const baseImageUrl = process.env.REACT_APP_MOVIEDB_IMAGE_BASE_URL;

	return (
		<div className='actorcard'>
			<img
				src={baseImageUrl + cast.profile_path}
				alt={cast.name}
				className='actorcard__img'
			/>
			<div className='actorcard__body'>
				<div className='actorcard__name'>{cast.name}</div>
				<div className='actorcard__desc'>
					<span className='actorcard__role'>{cast.character}</span>
				</div>
			</div>
		</div>
	);
};

export default ActorCard;
