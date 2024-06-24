import { useState } from 'react';
import { DBInput } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/input.json';
import { type DBInputProps } from '../../../../../output/react/src/components/input/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getInput = ({
	label,
	value,
	type,
	minLength,
	required,
	disabled,
	iconAfter,
	icon,
	children,
	message,
	variant,
	readOnly
}: DBInputProps) => {
	return (
		<DBInput
			label={label}
			message={message}
			placeholder={children}
			variant={variant}
			defaultValue={value}
			type={type}
			minLength={minLength}
			required={required}
			disabled={disabled}
			readOnly={readOnly}
			iconAfter={iconAfter}
			icon={icon}
		/>
	);
};

const InputComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBInput'}
			variants={getVariants(
				defaultComponentVariants,
				getInput,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default InputComponent;
