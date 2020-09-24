import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo/logo.svg';
import { ReactComponent as MovieDBLogo } from '../../assets/images/logo/moviedb-logo.svg';

import './footer.styles.scss';

function Footer() {
	return (
		<footer className='footer'>
			<Logo className='footer__logo' />
			<p className='footer__text'>
				Designed and developed by{' '}
				<a
					href='https://www.nilotpaldhar.com/'
					rel='noopener noreferrer'
					target='_blank'
					className='footer__link'>
					Nilotpal Dhar
				</a>
			</p>
			<p className='footer__text'>
				This product uses the
				<a
					href='https://www.themoviedb.org/'
					rel='noopener noreferrer'
					target='_blank'>
					<MovieDBLogo className='footer__moviedb-logo' />
				</a>
				API but is not endorsed or certified by
				<a
					href='https://www.themoviedb.org/'
					rel='noopener noreferrer'
					target='_blank'>
					<MovieDBLogo className='footer__moviedb-logo' />
				</a>
			</p>
		</footer>
	);
}

export default Footer;
