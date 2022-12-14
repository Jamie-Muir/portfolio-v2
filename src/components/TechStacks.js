import React from 'react'

import classes from './TechStacks.module.scss';

import HtmlSvg from '../assets/svg/HtmlIcon.svg';
import CSS3Svg from '../assets/svg/CSS3Icon.svg';
import SassSvg from '../assets/svg/SassIcon.svg';
import ReactSvg from '../assets/svg/ReactIcon.svg';
import JavascriptSvg from '../assets/svg/JavascriptIcon.svg';
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
			width={iconSize}
			height={iconSize}
			data-text={props.tooltip}
		/>
	</Tooltip>
)

function TechStacks() {
	return (
		<div className={classes.techstacks}>
			<IconImg src={ReactSvg} alt='React Icon' tooltip='React' />
			<IconImg src={JavascriptSvg} alt='Javascript Icon' tooltip='Javascript' />
			<IconImg src={SassSvg} alt='Sass Icon' tooltip='Sassy CSS' />
			<IconImg src={HtmlSvg} alt='HTML5 Icon' tooltip='HTML 5' />
			<IconImg src={CSS3Svg} alt='CSS3 Icon' tooltip='CSS' />

			<IconImg src={ReactSvg} alt='React Icon' tooltip='React' />
			<IconImg src={JavascriptSvg} alt='Javascript Icon' tooltip='Javascript' />
			<IconImg src={SassSvg} alt='Sass Icon' tooltip='Sassy CSS' />
			<IconImg src={HtmlSvg} alt='HTML5 Icon' tooltip='HTML 5' />
			<IconImg src={CSS3Svg} alt='CSS3 Icon' tooltip='CSS' />
		</div>
	)
}

export default TechStacks