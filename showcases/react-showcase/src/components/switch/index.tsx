import type { DBSwitchProps } from '@db-ux/react-core-components/src';
import {
	DBInfotext,
	DBSwitch,
	getBoolean
} from '../../../../../output/react/src';
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
	required,
	showRequiredAsterisk,
	validation,
	invalidMessage,
	validMessage,
	message,
	messageIcon,
	showMessage,
	labelPosition,
	accent
}: DBSwitchProps) => (
	<>
		<DBSwitch
			visualAid={visualAid}
			defaultChecked={getBoolean(checked)}
			disabled={disabled}
			showRequiredAsterisk={showRequiredAsterisk}
			showLabel={showLabel}
			labelPosition={labelPosition}
			accent={getBoolean(accent)}
			size={size}
			icon={icon}
			iconTrailing={iconTrailing}
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
