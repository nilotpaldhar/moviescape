import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './skeleton-loader.styles.scss';

const SkeletonLoader = () => {
	return (
		<div className='skeleton-loader'>
			<Container>
				<Row>
					<Col xs='12' md='6' lg='4'>
						<SkeletonTheme color='#202020' highlightColor='#444'>
							<h1 className='mb-1'>
								<Skeleton count={1} height={200} />
							</h1>
							<p>
								<Skeleton count={1} width={200} height={15} />
							</p>
						</SkeletonTheme>
					</Col>
					<Col xs='12' md='6' lg='4'>
						<SkeletonTheme color='#202020' highlightColor='#444'>
							<h1 className='mb-1'>
								<Skeleton count={1} height={200} />
							</h1>
							<p>
								<Skeleton count={1} width={200} height={15} />
							</p>
						</SkeletonTheme>
					</Col>
					<Col xs='12' md='6' lg='4' className='d-none d-lg-block'>
						<SkeletonTheme color='#202020' highlightColor='#444'>
							<h1 className='mb-1'>
								<Skeleton count={1} height={200} />
							</h1>
							<p>
								<Skeleton count={1} width={200} height={15} />
							</p>
						</SkeletonTheme>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SkeletonLoader;
