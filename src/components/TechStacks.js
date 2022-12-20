import React from 'react'

import classes from './TechStacks.module.scss';

import HtmlSvg from '../assets/svg/HtmlIcon.svg';
import CSS3Svg from '../assets/svg/CSS3Icon.svg';
import SassSvg from '../assets/svg/SassIcon.svg';
import ReactSvg from '../assets/svg/ReactIcon.svg';
import JavascriptSvg from '../assets/svg/JavascriptIcon.svg';
import TypescriptSvg from '../assets/svg/TypescriptIcon.svg';
import ReduxSvg from '../assets/svg/ReduxIcon.svg';
import NodeJsSvg from '../assets/svg/NodeJsIcon.svg';
import MongoDBSvg from '../assets/svg/MongoDBIcon.svg';

import Tooltip from './UI/Tooltip';

const iconSize = 70;


const IconImg = (props) => (
	<Tooltip
		content={ props.tooltip }
		direction='bottom'
	>
		<img
			src={props.src}
			alt={props.alt}
			className={classes.icon}
			width={props.iconSize || iconSize}
			height={props.iconSize || iconSize}
			data-text={props.tooltip}
		/>
	</Tooltip>
)

function TechStacks() {
	return (
		<div className={classes.techstacks}>
			{/* <IconImg src={MongoDBSvg} alt='MongoDB Icon' tooltip='MongoDB' /> */}
			<IconImg src={NodeJsSvg} alt='Node.Js Icon' tooltip='Node.Js'/>
			<IconImg src={ReduxSvg} alt='Redux Icon' tooltip='Redux' />
			<IconImg src={ReactSvg} alt='React Icon' tooltip='React' />
			<IconImg src={JavascriptSvg} alt='Javascript Icon' tooltip='Javascript' />
			<IconImg src={TypescriptSvg} alt='Javascript Icon' tooltip='Javascript' />
			<IconImg src={SassSvg} alt='Sass Icon' tooltip='Sassy CSS' />
			<IconImg src={CSS3Svg} alt='CSS3 Icon' tooltip='CSS' />
			<IconImg src={HtmlSvg} alt='HTML5 Icon' tooltip='HTML 5' />
		</div>
	)
}

export default TechStacks