import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { ReactComponent as Star } from '../../assets/images/icons/star.svg';
import placeholder from '../../assets/images/placeholder/image-palceholder.png';

import './search-result.styles.scss';

const SearchResult = ({ result }) => {
	const baseImageUrl = process.env.REACT_APP_MOVIEDB_IMAGE_BASE_URL;
	const { id, title, poster_path, vote_average, release_date } = result;
	const imageUrl = poster_path ? `${baseImageUrl}${poster_path}` : placeholder;

	return (
		<Link to={`/movies/${id}`} className='search-result'>
			<img src={imageUrl} alt='poster' className='search-result__img' />
			<div className='search-result__details'>
				<span className='search-result__name'>{title}</span>
				<span className='search-result__rating'>
					<Star />
					{vote_average}
				</span>
				{release_date && (
					<span className='search-result__date'>
						{format(new Date(release_date), 'MMM dd, yyyy')}
					</span>
				)}
			</div>
		</Link>
	);
};

export default SearchResult;
