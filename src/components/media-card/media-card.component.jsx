import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { selectGenres } from '../../redux/movies/movies.selectors';
import { getGenreNames } from './media-card.utils';

import './media-card.styles.scss';

const MediaCard = ({ media, baseUrl, genres }) => {
	const baseImageUrl = process.env.REACT_APP_MOVIEDB_IMAGE_BASE_URL;
	return (
		<div className='mediacard'>
			<Link to={`${baseUrl}/${media.id}`}>
				<div className='mediacard__header'>
					<img
						src={baseImageUrl + media.poster_path}
						alt='poster'
						className='mediacard__img'
					/>
					<span className='mediacard__rating'>{media.vote_average}</span>
				</div>
			</Link>
			<div className='mediacard__body'>
				<Link to={`${baseUrl}/${media.id}`} className='mediacard__name'>
					{media.original_title}
				</Link>
				<div className='mediacard__desc'>
					<span className='mediacard__date'>
						{format(new Date(media.release_date), 'MMM dd, yyyy')}
					</span>
					<span className='mediacard__genre'>
						{getGenreNames(genres, media.genre_ids)}
					</span>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	genres: selectGenres,
});

export default connect(mapStateToProps)(MediaCard);
