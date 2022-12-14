import React from 'react';

import classes from './ProjectCard.module.scss';
import Card from '../UI/Card';
import ExternalButton from '../UI/ExternalButton';

function ProjectCard(props) {

	return (
		<Card className={`${classes.project} ${props.className}` }>
			<div className={classes.project__showcase}>
				<picture className={classes.project__image}  >
					<img src={props.background} alt={props.alt} draggable='false'/>
				</picture>
				<div className={classes.project__controls} >

					<ExternalButton
						src={props.live}
						name='live page'
						disabled={!props.live}
					>
						See Live
					</ExternalButton>

					<ExternalButton
						src={props.github}
						name='github'
						disabled={!props.github}
					>
						View Code
					</ExternalButton>
				</div>
			</div>
			<div className={classes.project__content} >
				<h1> {props.title} </h1>
				<h3> {props.subtitle} </h3>
				<div className={classes.content}>
					{props.children}
				</div>
			</div>
		</Card>
	)
}

export default ProjectCard;