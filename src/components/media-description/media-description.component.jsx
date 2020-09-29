import React from 'react';
import { format } from 'date-fns';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getGenreNamesFromObj } from '../../utils/getGenreNames';

import VideoPlayer from '../video-player/video-player.component';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';

import './media-description.styles.scss';

const MediaDescription = ({ details, trailerUrl }) => {
	return (
		<div className='media-description'>
			<Container>
				<Row>
					<Col xs='12' lg='7'>
						<VideoPlayer url={trailerUrl} />
					</Col>
					<Col xs='12' lg='5' className='mt-4 mt-lg-0'>
						<h1 className='media-description__name'>
							{details.original_title || details.original_name}
						</h1>
						<div className='media-description__details'>
							<span className='media-description__rating'>
								<Star />
								<span>{details.vote_average} / 10</span>
							</span>
							{/* {details.release_date ? ( */}
							<span className='media-description__date'>
								{format(
									new Date(details.release_date || details.first_air_date),
									'MMM dd, yyyy'
								)}
							</span>
							{/* ) : ( */}
							{/* '' */}
							{/* )} */}
							<span className='media-description__genre'>
								{getGenreNamesFromObj(details.genres)}
							</span>
						</div>
						<p className='media-description__text'>{details.overview}</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MediaDescription;
