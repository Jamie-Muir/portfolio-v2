import React from 'react';
import GrampianSecure from './GrampianSecure';
import LobsangBot from './LobsangBot';

import classes from './Projects.module.scss';

function Projects() {
	return (
		<div className={classes.projectgrid}>
			<GrampianSecure />
			<LobsangBot />
		</div>
	)
}

export default Projects;