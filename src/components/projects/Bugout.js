import React from 'react';
import ProjectCard from './projectcard/ProjectCard';

import img from '../../assets/images/bugout-logo.webp'
import classes from './Projects.module.scss';

function Bugout() {
	return (
		<ProjectCard
			inProgress
			title='Bugout'
			subtitle='Ticket Tracker & Project Manager'
			className={classes.gridItem}
			background={img}
			alt='Bugout Logo'
			live='https://bugout-jm.netlify.app/'
			github='https://github.com/Jamie-Muir/bugout'
		>
			Write up coming soon!
			<div>
				<br />
				- 

				<br />
				-

				<br />
				-

			</div>

		</ProjectCard>

	)
}

export default Bugout;