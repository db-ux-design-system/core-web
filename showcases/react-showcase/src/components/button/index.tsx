import { DBButton } from '../../../../../output/react/src';
import { type DBButtonProps } from '../../../../../output/react/src/components/button/model';
import defaultComponentVariants from '../../../../shared/button.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getButton = ({
	variant,
	size,
	noText,
	icon,
	width,
	disabled,
	children,
	type,
	showIcon,
	showIconTrailing,
	iconTrailing
}: DBButtonProps) => (
	<DBButton
		variant={variant}
		size={size}
		noText={noText}
		icon={icon}
		disabled={disabled}
		width={width}
		showIcon={showIcon}
		iconTrailing={iconTrailing}
		showIconTrailing={showIconTrailing}
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
