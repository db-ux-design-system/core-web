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
	required,
	labelVariant
}: DBSelectProps) => (
	<DBSelect
		label={label}
		placeholder={children}
		variant={variant}
		options={options}
		disabled={disabled}
		labelVariant={labelVariant}
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
