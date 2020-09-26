import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import VideoPlayer from '../video-player/video-player.component';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';

import './media-description.styles.scss';

const MediaDescription = () => {
	return (
		<div className='media-description'>
			<Container>
				<Row>
					<Col xs='12' lg='7'>
						<VideoPlayer url='' />
					</Col>
					<Col xs='12' lg='5' className='mt-4 mt-lg-0'>
						<h1 className='media-description__name'>
							The Hustle: The Complete Season
						</h1>
						<div className='media-description__details'>
							<span className='media-description__rating'>
								<Star />
								9.5 / 10
							</span>
							<span className='media-description__date'>Aug 24, 2020</span>
							<span className='media-description__genre'>
								Drama, Thriller, Action
							</span>
						</div>
						<p className='media-description__text'>
							The work of billionaire tech CEO Donovan Chalmers is so valuable
							that he hires mercenaries to protect it, and a terrorist group
							kidnaps his daughter just to get it.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MediaDescription;
