import {
	DBSwitch,
	DBInfotext,
	getBoolean
} from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/switch.json';
import type { DBSwitchProps } from '../../../../../output/react/src/components/switch/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

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
	required
}: DBSwitchProps) => (
	<>
		<DBSwitch
			visualAid={visualAid}
			defaultChecked={getBoolean(checked)}
			disabled={disabled}
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
