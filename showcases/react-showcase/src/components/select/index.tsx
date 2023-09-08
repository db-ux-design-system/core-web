import { DBSelect } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/select.json';
import type { DBSelectProps } from '../../../../../output/react/src/components/select/model';
import { getVariants } from '../data';

const getSelect = ({
	children,
	label,
	variant,
	options,
	icon,
	message,
	disabled,
	value,
	required
}: DBSelectProps) => (
	<DBSelect
		label={label}
		variant={variant}
		options={options}
		disabled={disabled}
		icon={icon}
		value={value}
		message={message}
		required={required}>
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
