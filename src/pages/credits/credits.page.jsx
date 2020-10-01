import React from 'react';
import Container from 'react-bootstrap/Container';
import { ReactComponent as MovieDBLogo } from '../../assets/images/logo/moviedb-logo.svg';
import './credits.styles.scss';

const CreditsPage = () => {
	return (
		<div className='aboutpage'>
			<Container>
				<p className='aboutpage__text'>
					All film-related metadata used in MovieScape, including actor,
					director and studio names, rating, release dates, trailers and poster
					art is supplied by{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.themoviedb.org/'>
						The Movie Database
					</a>{' '}
					(TMDb).
				</p>
				<p className='aboutpage__text'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.themoviedb.org/'>
						<MovieDBLogo className='footer__moviedb-logo' />
					</a>
				</p>
				<p className='aboutpage__text'>
					MovieScape uses the TMDb API but is not endorsed or certified by TMDb.
				</p>

				<p className='aboutpage__text'>
					To add missing films or correct inaccuracies for existing films,
					please use TMDb’s interface (you’ll need to create an account there
					too).
				</p>
			</Container>
		</div>
	);
};

export default CreditsPage;
