import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Searchbar from '../searchbar/searchbar.component';
import { ReactComponent as Logo } from '../../assets/images/logo/logo.svg';

import './header.styles.scss';

const Navigation = () => {
	return (
		<Navbar
			bg='secondary'
			sticky='top'
			variant='dark'
			expand='lg'
			className='py-3'>
			<Container>
				<Navbar.Brand as={NavLink} to='/' aria-label='Home'>
					<Logo className='nav-logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbar-nav' />
				<Navbar.Collapse id='navbar-nav'>
					<Nav.Link as={NavLink} exact to='/' aria-label='Home'>
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} exact to='/movies' aria-label='Movies'>
						Movies
					</Nav.Link>
					<Nav.Link as={NavLink} exact to='/about' aria-label='About'>
						About
					</Nav.Link>
				</Navbar.Collapse>
				<Searchbar />
			</Container>
		</Navbar>
	);
};

export default Navigation;
