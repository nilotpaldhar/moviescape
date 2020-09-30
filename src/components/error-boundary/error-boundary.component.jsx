import React, { Component } from 'react';

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
			return <h1>This page is broken</h1>;
		}

		return children;
	}
}

export default ErrorBoundary;
