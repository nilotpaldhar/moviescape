import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo/logo.svg';

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
		</footer>
	);
}

export default Footer;
