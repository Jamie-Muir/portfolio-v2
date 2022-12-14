import React from 'react';

import classes from './Profile.module.scss';

function Profile() {
	return (
		<div className={classes.profile}>
			<h1>Jamie Muir</h1>
			<h2> <span>Front-End</span> Developer </h2>
			<h3> Aberdeen // Scotland - Open to Relocation </h3>
			<p><br />
				Deeply curious and committed to the journey of life-long learning.
				<br /><br />
				I'm a front-end developer with experience in React, 
				and a familiarity with the core skills of <br />modern Javascript (ES2016+), CSS, and HTML gained through
				completing a Higher National Diploma course & attaining a Bachelors Degree in Computer Science,
				 with continuing skills development via Udemy courses & independent curiosity.
				<br /><br />
				Currently working as a freelance developer (since Oct 22) and developing my front-end skills
				towards the aim of landing a full-time position.
				<br />
				The expansive and ever changing landscape of web development, and a desire to learn it all,
				is what drives me to continue exploring. For now I'm focused on attaining a front-end position
				but I hope to progress towards AWS cloud practitioner in 2023 on the journey to full-stack understanding.
				<br /><br />
				When I'm not coding, I like to paint, meditate, and cycle, though not usually at the same time.
			</p>

		</div>
	)
}

export default Profile;