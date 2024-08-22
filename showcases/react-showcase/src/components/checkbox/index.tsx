import { DBCheckbox } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import { getVariants } from '../data';
import defaultComponentVariants from '../../../../shared/checkbox.json';
import { type DBCheckboxProps } from '../../../../../output/react/src/components/checkbox/model';
import { type BaseComponentProps } from '../base-component-data';

const getCheckbox = ({
	label,
	size,
	name,
	checked,
	required,
	children,
	disabled,
	indeterminate,
	variant
}: DBCheckboxProps) => (
	<DBCheckbox
		label={label}
		size={size}
		name={name}
		defaultChecked={checked}
		required={required}
		disabled={disabled}
		variant={variant}
		indeterminate={indeterminate}>
		{children}
	</DBCheckbox>
);

const CheckboxComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBCheckbox'}
			variants={getVariants(
				defaultComponentVariants,
				getCheckbox,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default CheckboxComponent;
