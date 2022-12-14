import React from 'react'
import ProjectCard from './ProjectCard';

import img from '../../assets/images/title-black.webp'
import classes from './Projects.module.scss';

function GrampianSecure() {
	return (
		<ProjectCard
			title='Grampian Secure'
			subtitle='Website Redesign'
			className={classes.gridItem}
			background={img}
			alt='Grampian Secure Logo'
			live='https://www.grampiansecure.co.uk'
			// github='https://github.com/Jamie-Muir/grampian-secure'
			html css js react
		>
			A full recreation of the businesses site with aims of providing a faster and more responsive solution.
			<ul>
				<li>
					Reduced First Contentful Paint from 3.1s with the old solution down to 0.8s with the new, and
					eliminated all blocking time.
				</li>
				<li>
					Worked with Instagram’s API to provide a dynamic display of the clients social media.
				</li>
				<li>
					Worked from a software specification agreed with the client detailing their needs and the project
					timescale which was fully met and enabled an on-time delivery.
				</li>
			</ul>



		</ProjectCard>

	)
}

export default GrampianSecure;