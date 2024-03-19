import { DBRadio } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { getVariants } from '../data';
import defaultComponentVariants from '../../../../shared/radio.json';
import { type DBRadioProps } from '../../../../../output/react/src/components/radio/model';

const getRadio = ({
	label,
	size,
	name,
	checked,
	invalid,
	required,
	children,
	disabled,
	value,
	labelVariant
}: DBRadioProps) => (
	<DBRadio
		label={label}
		size={size}
		name={name}
		defaultChecked={checked}
		invalid={invalid}
		required={required}
		disabled={disabled}
		labelVariant={labelVariant}
		value={value}>
		{children}
	</DBRadio>
);

const RadioComponent = () => {
	return (
		<DefaultComponent
			title={'DBRadio'}
			variants={getVariants(
				defaultComponentVariants,
				getRadio
			)}></DefaultComponent>
	);
};

export default RadioComponent;
