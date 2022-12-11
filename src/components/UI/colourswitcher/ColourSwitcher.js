import React from 'react';
import ColourButton from './ColourButton';

import classes from './ColourSwitcher.module.scss';

function ColourSwitcher() {
	return (
		<div>
			<ColourButton colour='green' />
			<ColourButton colour='#f80' />
			<ColourButton colour='rgb(0, 61, 166)' />
		</div>
	)
}

export default ColourSwitcher;