import React from 'react';
import Container from 'react-bootstrap/Container';

import './about.styles.scss';

const AboutPage = () => {
	return (
		<div className='aboutpage'>
			<Container>
				<h1 className='aboutpage__title'>About This Application</h1>
				<p className='aboutpage__text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
					necessitatibus! Nihil ex non atque enim quis excepturi, asperiores,
					suscipit nisi modi consequuntur corporis voluptates et velit quae
					magni? Totam ipsum dolorum animi. Nisi aliquam officia ab! Eaque
					labore quaerat libero obcaecati, veritatis harum, molestiae, error
					consequatur sint non magnam tenetur.
				</p>
				<p className='aboutpage__text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
					suscipit voluptates nemo voluptatibus! Id ut exercitationem quis
					quidem sint at eveniet ipsam, quibusdam repudiandae commodi sunt
					porro, voluptatem ducimus delectus corporis ullam quos cupiditate
					minus quae velit veniam molestias distinctio.
				</p>

				{/* <p className='footer__text'>
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
				</p> */}
			</Container>
		</div>
	);
};

export default AboutPage;
