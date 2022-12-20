import React from 'react';
import Bugout from './Bugout';
import GrampianSecure from './GrampianSecure';
import JustReact from './JustReact';
import LobsangBot from './LobsangBot';

import classes from './Projects.module.scss';

function Projects() {
	return (
		<div className={classes.projectgrid}>
			<Bugout />
			<GrampianSecure />
			<LobsangBot />
			<JustReact />
		</div>
	)
}

export default Projects;