import Button from "./Button";

function LinkButton(props) {
	return (
		<a
			href={props.src}
			target={props.target && '_blank'}
			rel='noreferrer'
		>
			<Button {...props} />
		</a>
	);
}

export default LinkButton;