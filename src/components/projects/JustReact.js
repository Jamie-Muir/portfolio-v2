import React from 'react'
import ProjectCard from './projectcard/ProjectCard';
import classes from './Projects.module.scss';

import img from '../../assets/images/just-eat.webp';

function JustReact() {
	return (
		<ProjectCard
			inProgress
			title='Just React'
			subtitle="React clone of Just Eat"
			className={`${classes.gridItem} ${classes.dimimage}`}
			background={img}
			alt='Just Eat Current Splash Image'
			bgShadow
			live='https://jamie-muir.github.io/just-react/'
			github='https://github.com/Jamie-Muir/just-react'
		>
			A front-end replication of the Just Eat website to reinforce skills in building an application to the 
			specification of a design and maintaining a similar standard of speed and responsiveness.
			{/* <div>
				<br />
				- 

				<br />
				-

				<br />
				- 

			</div> */}

		</ProjectCard>
	)
}

export default JustReact