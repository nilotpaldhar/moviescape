import React from 'react';

import Hero from '../../components/hero/hero.compoent';
import PopularMovies from '../../components/popular-movies/popular-movies.component';
import NowPlayingMovies from '../../components/now-playing-movies/now-playing-movies.component';
import PopularTvShow from '../../components/popular-tv-show/popular-tv-show.component';

const HomePage = () => (
	<>
		<Hero>
			<NowPlayingMovies name='New Movies' limit={4} />
		</Hero>
		<PopularMovies limit={8} />
		<hr className='divider' />
		<PopularTvShow limit={8} />
	</>
);

export default HomePage;
