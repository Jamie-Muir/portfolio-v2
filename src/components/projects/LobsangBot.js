import React from 'react'
import ProjectCard from './projectcard/ProjectCard'
import classes from './Projects.module.scss';
import code from '../../assets/images/code.webp'

function LobsangBot() {
	return (
		<ProjectCard
			showTitle
			title='Lobsang Discord Bot'
			subtitle='Moderation Application'
			className={classes.gridItem}
			background={code}
			alt='Lobsang Discord Bot Image'
			github='https://github.com/Jamie-Muir/LobsangBot'
		>
			An application built in Javascript utilising the Discord API to provide moderation capabilities
			via text command input to Discord servers.
			<div>
				<br />
				- Modularity & scalability as the core design principles, with the ability to plug in any module logic
				and support it with a library of error-reporting, permission-checking, and utility functions.

				<br />
				- Each module contained a meta-data object to fill helper functions or to report feedback to the user.
				<br />
			</div>
			If I were to revisit this project or attempt one similar in the future, the biggest areas of improvement for me
			would be
			<div>
				<br />
				- Utilising what I've learned in writing clean code since, but particularly focusing on separation of concerns
				& DRY code. In most modules I check permissions, or report errors; With what I know from modularity in React,
				this is an area that could be improved & extracted.

				<br />
				- Implementing a standard for file structures; As one of my earliest modular Javascript programs I experimented with
				different formats, particularly for utilities, most don't hold up to the test of time.
			</div>
		</ProjectCard>
	)
}

export default LobsangBot