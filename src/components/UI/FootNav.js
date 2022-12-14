import React from 'react'
// import { Link } from 'react-router-dom'
import ColourSwitcher from './colourswitcher/ColourSwitcher';

import classes from './FootNav.module.scss';

function FootNav() {
	return (
		<div className={classes.footnav}>
			<ul className={classes.footnav__links}>
				{/* <li> <Link to='/'> Home </Link> </li>
				<li> <Link to='/projects'> Projects </Link> </li>
				<li> <Link to='/now'> Now </Link> </li> */}
				<li> 
					<ColourSwitcher />
				</li>
			</ul>
			<p>Jamie Muir @2022</p>
		</div>
	)
}

export default FootNav