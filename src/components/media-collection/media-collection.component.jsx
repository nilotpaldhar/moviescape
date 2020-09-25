import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MediaCard from '../media-card/media-card.component';

import './media-collection.styles.scss';

const MediaCollection = ({ name, limit, mediaList, baseUrl }) => {
	return (
		<div className='media-collection'>
			<Container>
				<h1 className='media-collection__name'>{name}</h1>
				<Row>
					{limit
						? mediaList
								.filter((media, idx) => idx < limit)
								.map((media) => (
									<Col key={media.id} xs='12' md='6' lg='3'>
										<MediaCard media={media} baseUrl={baseUrl} />
									</Col>
								))
						: mediaList.map((media) => (
								<Col key={media.id} xs='12' md='6' lg='3'>
									<MediaCard media={media} baseUrl={baseUrl} />
								</Col>
						  ))}
				</Row>
			</Container>
		</div>
	);
};

export default MediaCollection;
