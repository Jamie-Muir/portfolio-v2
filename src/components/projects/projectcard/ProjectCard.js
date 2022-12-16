import React from 'react';

import classes from './ProjectCard.module.scss';
import ProjectShowcase from './ProjectShowcase';
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
	const { title, subtitle, children, ...showcaseProps } = props;

	return (
		<Card className={`${classes.project} ${props.className}`}>
			<ProjectShowcase
				classes={classes}
				{...showcaseProps}
			/>
			<div className={classes.project__content} >
				<h1> {props.title} </h1>
				<h3> {props.subtitle} </h3>
				<div className={classes.content}>
					{props.children}
				</div>
				<Link to='/now' >
					<Button className={classes.goToProjectBtn} disabled>
						See More
					</Button>
				</Link>
			</div>
		</Card>
	)
}

export default ProjectCard;