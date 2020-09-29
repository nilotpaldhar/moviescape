import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ActorCard from '../actor-card/actor-card.component';

import './cast-collection.styles.scss';

const CastCollection = ({ name = 'Casts', casts }) => {
	return (
		<div className='cast-collection'>
			<Container>
				<h1 className='cast-collection__name'>{name}</h1>
				<Row>
					{casts
						.filter((cast, idx) => idx < 8 && cast.profile_path)
						.map((cast) => (
							<Col key={cast.id} xs='6' md='4' lg='3'>
								<ActorCard cast={cast} />
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
};

export default CastCollection;
