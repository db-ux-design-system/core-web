import { DBSwitch, DBInfotext } from '../../../../../output/react/src';
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
	variant,
	emphasis,
	size,
	icon,
	iconAfter
}: DBSwitchProps) => (
	<>
		<DBSwitch
			visualAid={visualAid}
			defaultChecked={checked}
			disabled={disabled}
			variant={variant}
			size={size}
			emphasis={emphasis}
			icon={icon}
			iconAfter={iconAfter}>
			{children}
		</DBSwitch>
		{variant === 'hidden' && (
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
