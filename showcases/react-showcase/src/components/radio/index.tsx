import { DBInfotext, DBRadio, getBoolean } from '@components';
import { type DBRadioProps } from '@components/src/components/radio/model';
import defaultComponentVariants from '../../../../shared/radio.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getRadio = ({
	label,
	size,
	name,
	checked,
	required,
	children,
	disabled,
	value,
	showLabel,
	validation,
	showRequiredAsterisk
}: DBRadioProps) => (
	<>
		<DBRadio
			showRequiredAsterisk={showRequiredAsterisk}
			label={label}
			size={size}
			name={name}
			defaultChecked={getBoolean(checked)}
			required={required}
			disabled={disabled}
			showLabel={showLabel}
			value={value}
			validation={validation}>
			{children}
		</DBRadio>
		{showLabel !== undefined && !showLabel && (
			<DBInfotext size="small" semantic="informational" showIcon={false}>
				{children}
			</DBInfotext>
		)}
	</>
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
