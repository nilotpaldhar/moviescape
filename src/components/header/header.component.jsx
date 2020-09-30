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
				<Navbar.Brand as={NavLink} to='/'>
					<Logo className='nav-logo' />
				</Navbar.Brand>
				<Navbar.Collapse id='navbar-nav'>
					<Nav.Link as={NavLink} exact to='/'>
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} exact to='/movies'>
						Movies
					</Nav.Link>
					<Nav.Link as={NavLink} exact to='/about'>
						About
					</Nav.Link>
				</Navbar.Collapse>
				<Searchbar />
				<Navbar.Toggle aria-controls='navbar-nav' />
			</Container>
		</Navbar>
	);
};

export default Navigation;
