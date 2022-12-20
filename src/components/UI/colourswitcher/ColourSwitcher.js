import React from 'react';
import ColourButton from './ColourButton';

// import classes from './ColourSwitcher.module.scss';

function ColourSwitcher() {
	return (
		<div>
			<ColourButton colour='#f80' />
			<ColourButton colour='rgb(72, 255, 0)' />
			<ColourButton colour='rgb(0, 140, 255)' />
		</div>
	)
}

export default ColourSwitcher;