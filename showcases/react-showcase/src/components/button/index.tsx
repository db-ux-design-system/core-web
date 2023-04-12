import { DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/button.json';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import { type DBButtonProps } from '../../../../../output/react/src/components/button/model';
import { getVariants } from '../data';

const getButton = ({
	variant,
	state,
	size,
	icntxt,
	icon,
	width,
	children
}: DBButtonProps) => (
	<DBButton
		variant={variant}
		state={state}
		size={size}
		icntxt={icntxt}
		icon={icon}
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
