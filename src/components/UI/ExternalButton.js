import Button from "./Button";

function ExternalButton(props) {
	return (
		<a
			href={props.src}
			target='_blank'
			rel='noreferrer'
		>
			<Button {...props} />
		</a>
	);
}

export default ExternalButton;