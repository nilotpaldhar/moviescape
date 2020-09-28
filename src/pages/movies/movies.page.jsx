import React from 'react';

import Hero from '../../components/hero/hero.compoent';
import PopularMovies from '../../components/popular-movies/popular-movies.component';
import UpcommingMovies from '../../components/upcomming-movies/upcomming-movies.component';
import NowPlayingMovies from '../../components/now-playing-movies/now-playing-movies.component';

const MoviesPage = () => (
	<>
		<Hero>
			<PopularMovies limit={4} />
		</Hero>
		<NowPlayingMovies limit={8} />
		<hr className='divider' />
		<UpcommingMovies limit={8} />
	</>
);

export default MoviesPage;
