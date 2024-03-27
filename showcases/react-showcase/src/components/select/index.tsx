import { DBSelect } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/select.json';
import type { DBSelectProps } from '../../../../../output/react/src/components/select/model';
import { getVariants } from '../data';

const getSelect = ({
	children,
	label,
	options,
	icon,
	message,
	disabled,
	value,
	required,
	variant,
	invalid
}: DBSelectProps) => (
	<DBSelect
		label={label}
		placeholder={children}
		options={options}
		disabled={disabled}
		variant={variant}
		icon={icon}
		value={value}
		message={message}
		invalid={invalid}
		required={required}
		invalidMessage={
			invalid !== undefined || required ? 'Invalid Message' : undefined
		}
		validMessage={
			invalid !== undefined || required ? 'Valid Message' : undefined
		}>
		{children}
	</DBSelect>
);

const SelectComponent = () => {
	return (
		<DefaultComponent
			title="DBSelect"
			variants={getVariants(
				defaultComponentVariants,
				getSelect
			)}></DefaultComponent>
	);
};

export default SelectComponent;
