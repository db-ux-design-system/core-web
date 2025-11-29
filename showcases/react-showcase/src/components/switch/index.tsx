import { DBInfotext, DBSwitch, getBoolean } from '@components';
import type { DBSwitchProps } from '@db-ux/react-core-components/src';
import defaultComponentVariants from '../../../../shared/switch.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getSwitch = ({
	children,
	checked,
	visualAid,
	disabled,
	showLabel,
	size,
	icon,
	iconTrailing,
	iconLeading,
	required,
	showRequiredAsterisk,
	validation,
	invalidMessage,
	validMessage,
	message,
	messageIcon,
	showMessage,
	variant
}: DBSwitchProps) => (
	<>
		<DBSwitch
			visualAid={visualAid}
			defaultChecked={getBoolean(checked)}
			disabled={disabled}
			showRequiredAsterisk={showRequiredAsterisk}
			showLabel={showLabel}
			variant={variant}
			size={size}
			icon={icon}
			iconTrailing={iconTrailing}
			iconLeading={iconLeading}
			required={required}
			validation={validation}
			invalidMessage={invalidMessage}
			validMessage={validMessage}
			message={message}
			messageIcon={messageIcon}
			showMessage={showMessage}>
			{children}
		</DBSwitch>
		{showLabel !== undefined && !showLabel && (
			<DBInfotext semantic="informational" icon="none">
				{children}
			</DBInfotext>
		)}
	</>
);

const SwitchComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBSwitch"
			variants={getVariants(
				defaultComponentVariants,
				getSwitch,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default SwitchComponent;
