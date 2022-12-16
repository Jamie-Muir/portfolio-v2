import React from 'react';
import LinkButton from '../../UI/LinkButton';

function ProjectShowcase(props) {
	const classes = props.classes;

	return (
		<div className={classes.project__showcase}>
			<picture className={classes.project__image}>
				<img src={props.background} alt={props.alt} draggable='false'/>
			</picture>
			<div className={classes.project__controls} >

				<LinkButton
					src={props.live}
					name='live page'
					disabled={!props.live}
					target='_blank' 
				>
					See Live
				</LinkButton>

				<LinkButton
					src={props.github}
					name='github'
					disabled={!props.github}
					target='_blank' 
				>
					View Code
				</LinkButton>
			</div>
		</div>
	)
}

export default ProjectShowcase;