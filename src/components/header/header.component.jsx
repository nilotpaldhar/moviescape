import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { ReactComponent as Logo } from '../../assets/images/logo/logo.svg';

import './header.styles.scss';

const Navigation = () => {
	return (
		<Navbar
			bg='secondary'
			sticky='top'
			variant='dark'
			expand='md'
			className='py-3'>
			<Container>
				<Navbar.Brand href='!#'>
					<Logo className='nav-logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbar-nav' />
				<Navbar.Collapse id='navbar-nav'>
					<Nav.Link href='#movies'>Movies</Nav.Link>
					<Nav.Link href='#tv-shows'>TV Shows</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
