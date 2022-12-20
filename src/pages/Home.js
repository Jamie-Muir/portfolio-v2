import React from 'react';
import Projects from '../components/projects/Projects';
import Profile from '../components/Profile';
import TechStacks from '../components/TechStacks';

import classes from './Home.module.scss';
import Tech from '../components/Tech';

function Home() {
	return (
		<div className={classes.home}>
			<Profile />
			<Tech />
			<Projects />
		</div>
	)
}

export default Home;