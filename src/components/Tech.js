import React from 'react';
import TechStacks from './TechStacks';
import Card from './UI/Card';
import classes from './Tech.module.scss';

function Tech() {
	return (
		<Card className={ classes.container } >
			<div className={ classes.flex } >
				<span className={classes.line} />
				<h3>Techstack</h3>
				<span className={classes.line} />
			</div>
			<TechStacks />
			<span className={classes.line} />
		</Card>
	)
}

export default Tech