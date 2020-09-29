import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MovieDescriptionSkeleton = () => {
	return (
		<Container style={style}>
			<Row>
				<Col xs='12' lg='7'>
					<SkeletonTheme color='#202020' highlightColor='#444'>
						<Skeleton count={1} height={360} />
					</SkeletonTheme>
				</Col>
				<Col xs='12' lg='5' className='mt-4 mt-lg-0'>
					<SkeletonTheme color='#202020' highlightColor='#444'>
						<h1>
							<Skeleton count={1} height={40} />
						</h1>
						<p className='mb-0'>
							<Skeleton count={1} height={15} />
						</p>
						<p className='mb-0'>
							<Skeleton count={1} height={15} width={200} />
						</p>
						<p className='mb-0'>
							<Skeleton count={1} height={15} width={150} />
						</p>
					</SkeletonTheme>
				</Col>
			</Row>
		</Container>
	);
};

const style = {
	paddingTop: '4.3rem',
};

export default MovieDescriptionSkeleton;
