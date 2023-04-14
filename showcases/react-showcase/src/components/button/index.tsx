import { DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/button.json';
import { type DBButtonProps } from '../../../../../output/react/src/components/button/model';
import { getVariants } from '../data';

const getButton = ({
	variant,
	state,
	size,
	noText,
	icon,
	width,
	disabled,
	children
}: DBButtonProps) => (
	<DBButton
		variant={variant}
		state={state}
		size={size}
		noText={noText}
		icon={icon}
		disabled={disabled}
		width={width}
		onClick={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}>
		{children}
	</DBButton>
);

const ButtonComponent = () => {
	return (
		<DefaultComponent
			title="DBButton"
			variants={getVariants(
				defaultComponentVariants,
				getButton
			)}></DefaultComponent>
	);
};

export default ButtonComponent;
