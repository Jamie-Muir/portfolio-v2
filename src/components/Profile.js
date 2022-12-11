import React from 'react';

import classes from './Profile.module.scss';

function Profile() {
	return (
		<div className={classes.profile}>
			<h1>Jamie Muir</h1>
			<h2> <span>Front-End</span> Developer </h2>
			<p>
				A work in progress. <br /><br />
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
				in culpa qui officia deserunt mollit anim id est laborum."
			</p>

		</div>
	)
}

export default Profile;