import { DBInput } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/input.json';
import { type DBInputProps } from '../../../../../output/react/src/components/input/model';
import { getVariants } from '../data';

const getInput = ({
	label,
	variant,
	value,
	type,
	minLength,
	required,
	disabled,
	iconAfter,
	icon,
	children
}: DBInputProps) => (
	<DBInput
		label={label}
		message={children}
		placeholder={children}
		variant={variant}
		value={value}
		type={type}
		minLength={minLength}
		required={required}
		disabled={disabled}
		iconAfter={iconAfter}
		icon={icon}
	/>
);

const InputComponent = () => {
	return (
		<DefaultComponent
			title={'DBInput'}
			variants={getVariants(
				defaultComponentVariants,
				getInput
			)}></DefaultComponent>
	);
};

export default InputComponent;
