import { DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/button.json';
import { type DBButtonProps } from '../../../../../output/react/src/components/button/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getButton = ({
	variant,
	state,
	size,
	noText,
	icon,
	width,
	disabled,
	children,
	type,
	showIcon
}: DBButtonProps) => (
	<DBButton
		variant={variant}
		state={state}
		size={size}
		noText={noText}
		icon={icon}
		disabled={disabled}
		width={width}
		showIcon={showIcon}
		onClick={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}
		type={type}>
		{children}
	</DBButton>
);

const ButtonComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBButton"
			variants={getVariants(
				defaultComponentVariants,
				getButton,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default ButtonComponent;
