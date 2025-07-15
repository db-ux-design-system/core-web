import {
	DBInfotext,
	DBSwitch,
	getBoolean
} from '../../../../../output/react/src';
import type { DBSwitchProps } from '../../../../../output/react/src/components/switch/model';
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
	emphasis,
	size,
	icon,
	iconAfter,
	required,
	showRequiredAsterisk
}: DBSwitchProps) => (
	<>
		<DBSwitch
			visualAid={visualAid}
			defaultChecked={getBoolean(checked)}
			disabled={disabled}
			showRequiredAsterisk={showRequiredAsterisk}
			showLabel={showLabel}
			size={size}
			emphasis={emphasis}
			icon={icon}
			iconAfter={iconAfter}
			required={required}>
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
