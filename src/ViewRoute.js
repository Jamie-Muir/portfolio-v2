import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Now from './pages/Now';
// import Projects from './pages/Projects';

function ViewRoute() {
	return (
		<div className='wrapper'>
			<Route path='/' exact>
				<Home />
			</Route>
			<Route path='/now'>
				<Now />
			</Route>
		</div>
	)
}

export default ViewRoute;