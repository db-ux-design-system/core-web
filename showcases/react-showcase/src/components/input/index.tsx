import { useState } from 'react';
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
	children,
	message,
	labelVariant,
	readOnly,
	invalid
}: DBInputProps) => {
	const [dynamicValue, setDynamicValue] = useState<string>(value);
	return (
		<DBInput
			label={label}
			message={message}
			placeholder={children}
			labelVariant={labelVariant}
			variant={variant}
			value={dynamicValue}
			type={type}
			minLength={minLength}
			required={required}
			disabled={disabled}
			readOnly={readOnly}
			iconAfter={iconAfter}
			invalid={invalid}
			icon={icon}
			onChange={(event) => {
				setDynamicValue(event.target.value);
			}}
		/>
	);
};

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
