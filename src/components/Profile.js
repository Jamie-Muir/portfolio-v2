import React from 'react';

import classes from './Profile.module.scss';

function Profile() {
	return (
		<div className={classes.profile}>
			<h1>Jamie Muir</h1>
			<h2> <span>Front-End</span> Developer </h2>
			<p><br />
				Deeply curious and committed to the journey of life-long learning.
				<br /><br />
				I'm a front-end developer with experience in React and an ongoing exploration of Angular,
				grounded in a familiarity with <br />Javascript (ES16), CSS, and HTML gained through
				a Higher National Diploma course & attaining a Bachelors in Computer Science,
				 with additional skills continually built since via Udemy courses & independant curiousity.
				<br />
				The shifting and ever changing landscape of web development and a desire to learn it all
				is what drives me to continue exploring.
				<br /><br />
				When I'm not coding, I like to paint, meditate, and cycle, though not usually at the same time.
			</p>

		</div>
	)
}

export default Profile;