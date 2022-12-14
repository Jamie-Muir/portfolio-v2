import React from 'react';
import { Link } from 'react-router-dom';
// import ColourSwitcher from './colourswitcher/ColourSwitcher';

import classes from './Navbar.module.scss';

const contactEmail = 'JamieMuirCS@gmail.com';

function Navbar() {
	return (
		<nav className={classes.navbar}>
			<div className={classes.navbar__brand}>
				<Link to='/' draggable='false'>
					<h1 className={classes.brand}> JM </h1>
				</Link>
			</div>
			<ul className={classes.navbar__links}>
				<li>
					<a
						href={`mailto:${contactEmail}`}
						className={classes.contact}
						// data-replace={contactEmail}
					>
						<span>Contact</span>
					</a>
				</li>
				{/* <li> <Link to='/projects'> Projects </Link> </li> */}
				{/* <li> <Link to='/now'> Now </Link> </li> */}

			</ul>
		</nav>
	)
}

export default Navbar;