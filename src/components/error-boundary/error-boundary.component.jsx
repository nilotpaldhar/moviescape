import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './error-boundary.styles.scss';

export class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasErrored: false,
		};
	}

	static getDerivedStateFromError(error) {
		// Process error
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		const { hasErrored } = this.state;
		const { children } = this.props;

		if (hasErrored) {
			return (
				<div className='error-boundary'>
					<Container>
						<h1 className='error-boundary__title'>This page is broken</h1>
						<p className='error-boundary__desc'>
							Oops! Something really bad happened. We will fix it soon.
						</p>
					</Container>
				</div>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
