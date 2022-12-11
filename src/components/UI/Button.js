import classes from './Button.module.scss';

function Button(props) {
	return (
		<button
			name={props.name}
			className={`${classes.button} ${props.className}`}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
}

export default Button;