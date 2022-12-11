import React from 'react';
import Projects from '../components/projects/Projects';
import Profile from '../components/Profile';
import TechStacks from '../components/TechStacks';

import classes from './Home.module.scss';

function Home() {
	return (
		<div className={classes.home}>
			<Profile />
			<TechStacks />
			<Projects />
		</div>
	)
}

export default Home;