import Button from "./Button";

function LinkButton(props) {
	return (
		<a
			href={props.src}
			target={props.target}
			rel='noreferrer'
		>
			<Button {...props} />
		</a>
	);
}

export default LinkButton;