import React from 'react'
import ProjectCard from './ProjectCard'
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
			js
		>
			Lobsang Bot is an application built in Javascript utilising the Discord API to provide moderation capabilities
			via text-line to Discord servers.
			<br />
			This project was developed as an exploration of text interfaces in javascript and provided a practice ground to
			utilise ES6 features and module exports in creating a highly scalable project.
			<br /><br />
			Exporting commands/functions as an object that contained meta data about the function was one of my favourite
			structural elements of this project and a great learning experience in moving data around in Javascript. How well
			the functions are related to the user and maintainer is something I consider a success of the project and was a
			good precursor to developing my skills in React.

			<br /><br />
			If I were to revisit this project, I would take what I've learned from React in compartmentalising file systems
			and focus on building a better overall file structure for the project as I feel that, along with function bloat
			in certain places, are the core areas to learn from with this project.

		</ProjectCard>
	)
}

export default LobsangBot