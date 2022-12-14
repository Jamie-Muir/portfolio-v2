import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import classes from './Navbar.module.scss';

const contactEmail = 'JamieMuirCS@gmail.com';
const iconSize = 20;

function Navbar() {
	return (
		<nav className={classes.navbar}>
			<div className={`${classes.navbar__brand}`}>
				<Link to='/' draggable='false'>
					<h1 className={classes.brand}> JM </h1>
				</Link>
			</div>
			<ul className={`${classes.navbar__links}`}>
				<li >
					<a
						href={`mailto:${contactEmail}`}
						className={classes.contact}
					>
						<FaEnvelope size={ iconSize } /> <span>Contact</span>
					</a>
				</li>
				<li>
					<a href='https://www.linkedin.com/in/jamie-muir-cs/' aria-label='LinkedIn' target='_blank' rel='noreferrer'>
						<FaLinkedin size={ iconSize } /> <span>LinkedIn</span>
					</a>
				</li>
				<li>
					<a href='https://github.com/jamie-muir' aria-label='Github' target='_blank' rel='noreferrer'>
						<FaGithub size={ iconSize } /> <span>Github</span>
					</a>
				</li>
				{/* <li> <Link to='/projects'> Projects </Link> </li> */}
				{/* <li> <Link to='/now'> Now </Link> </li> */}

			</ul>
		</nav>
	)
}

export default Navbar;