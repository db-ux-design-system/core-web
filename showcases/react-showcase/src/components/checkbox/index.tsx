import { DBCheckbox } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { getVariants } from '../data';
import defaultComponentVariants from '../../../../shared/checkbox.json';
import { type DBCheckboxProps } from '../../../../../output/react/src/components/checkbox/model';

const getCheckbox = ({
	label,
	size,
	name,
	checked,
	invalid,
	required,
	children,
	disabled,
	indeterminate,
	labelHidden
}: DBCheckboxProps) => (
	<DBCheckbox
		label={label}
		size={size}
		name={name}
		checked={checked}
		invalid={invalid}
		required={required}
		disabled={disabled}
		labelHidden={labelHidden}
		indeterminate={indeterminate}>
		{children}
	</DBCheckbox>
);

const CheckboxComponent = () => {
	return (
		<DefaultComponent
			title={'DBCheckbox'}
			variants={getVariants(
				defaultComponentVariants,
				getCheckbox
			)}></DefaultComponent>
	);
};

export default CheckboxComponent;
