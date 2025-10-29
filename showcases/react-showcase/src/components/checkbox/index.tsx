import { DBCheckbox, DBInfotext, getBoolean } from '@components';
import { type DBCheckboxProps } from '@components/src/components/checkbox/model';
import defaultComponentVariants from '../../../../shared/checkbox.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getCheckbox = ({
	label,
	size,
	name,
	checked,
	required,
	children,
	disabled,
	indeterminate,
	variant,
	showLabel,
	validation,
	invalidMessage,
	validMessage,
	showRequiredAsterisk
}: DBCheckboxProps) => (
	<>
		<DBCheckbox
			label={label}
			size={size}
			name={name}
			defaultChecked={getBoolean(checked)}
			invalidMessage={invalidMessage}
			validMessage={validMessage}
			showRequiredAsterisk={showRequiredAsterisk}
			required={required}
			disabled={disabled}
			variant={variant}
			showLabel={showLabel}
			indeterminate={indeterminate}
			validation={validation}>
			{children}
		</DBCheckbox>
		{showLabel !== undefined && !showLabel && (
			<DBInfotext size="small" semantic="informational" showIcon={false}>
				{children}
			</DBInfotext>
		)}
	</>
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
