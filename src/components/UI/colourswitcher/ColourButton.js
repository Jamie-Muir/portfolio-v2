import React from 'react';

import classes from './ColourSwitcher.module.scss';

function ColourButton(props) {

	const changeTheme = (e) => {
		document.documentElement.style.setProperty('--accent-colour', props.colour)
	}

	const styles = {
		backgroundColor: props.colour,
	}

	return (
		<button 
			className={classes.colourbtn}
			onClick={changeTheme}
			style={styles}
		/>
	)
}

export default ColourButton;