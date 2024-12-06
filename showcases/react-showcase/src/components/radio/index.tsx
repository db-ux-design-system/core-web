import { DBRadio } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import { getVariants } from '../data';
import defaultComponentVariants from '../../../../shared/radio.json';
import { type DBRadioProps } from '../../../../../output/react/src/components/radio/model';
import { type BaseComponentProps } from '../base-component-data';

const getRadio = ({
	label,
	size,
	name,
	checked,
	required,
	children,
	disabled,
	value,
	showLabel
}: DBRadioProps) => (
	<DBRadio
		label={label}
		size={size}
		name={name}
		defaultChecked={checked}
		required={required}
		disabled={disabled}
		showLabel={showLabel}
		value={value}>
		{children}
	</DBRadio>
);

const RadioComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBRadio'}
			variants={getVariants(
				defaultComponentVariants,
				getRadio,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default RadioComponent;
