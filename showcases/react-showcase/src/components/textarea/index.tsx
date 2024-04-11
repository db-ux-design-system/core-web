import { useState } from 'react';
import { DBTextarea } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/textarea.json';
import type { DBTextareaProps } from '../../../../../output/react/src/components/textarea/model';
import { getVariants } from '../data';

const getTextarea = ({
	cols,
	disabled,
	message,
	label,
	placeholder,
	rows,
	value,
	readOnly,
	required,
	children,
	variant
}: DBTextareaProps) => {
	const [dynamicValue, setDynamicValue] = useState<string>(value);
	return (
		<DBTextarea
			cols={cols}
			disabled={disabled}
			message={message}
			label={label}
			variant={variant}
			readOnly={readOnly}
			onChange={(event) => {
				setDynamicValue(event.target.value);
			}}
			required={required}
			placeholder={placeholder ?? children}
			rows={rows}
			value={dynamicValue}
		/>
	);
};

const TextareaComponent = () => {
	return (
		<>
			<DefaultComponent
				title="DBTextarea"
				variants={getVariants(
					defaultComponentVariants,
					getTextarea
				)}></DefaultComponent>
		</>
	);
};

export default TextareaComponent;
