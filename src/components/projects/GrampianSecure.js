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
			A website redesign project for a local security company with the purpose of building a faster and smoother user
			experience than their current solution that could also be decoupled from their hosting service.
			<br /><br />
			The initial site had a speed index of up to 10.6s at worst, according to lightbox.

			My redesign dramatically improved the fluidity and speed of the site. I accomplished this by building it as a
			Single-Page Application with React, and utilising more advanced features such as lazy-loading to improve the
			initial load time.
			<br /><br />
			Along with other improvements like converting all images to the Webp format the resulting design had a reported
			speed index of under 1 second.

		</ProjectCard>

	)
}

export default GrampianSecure;