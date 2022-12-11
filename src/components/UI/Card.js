import React from 'react';

const CardStyles = {
	// boxShadow: '0px 2px 4px rgba(0,0,0,0.3)',
	backgroundColor: 'var(--background-colour)',
	display: 'block',
	margin: 'auto',
	userSelect: 'none'
}

function Card(props) {
	return (
		<div style={CardStyles} className={props.className}>
			{props.children}
		</div>
	)
}

export default Card;