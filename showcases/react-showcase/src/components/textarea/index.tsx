import { useState } from 'react';
import { DBTextarea } from '@components';
import type { DBTextareaProps } from '@components/src/components/textarea/model';
import defaultComponentVariants from '../../../../shared/textarea.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

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
	variant,
	showLabel,
	showMessage,
	validMessage,
	validation,
	invalidMessage,
	fieldSizing,
	showResizer,
	showRequiredAsterisk
}: DBTextareaProps) => {
	const [dynamicValue, setDynamicValue] = useState<string>(value);
	return (
		<DBTextarea
			cols={cols}
			showRequiredAsterisk={showRequiredAsterisk}
			disabled={disabled}
			showLabel={showLabel}
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
			showMessage={showMessage}
			invalidMessage={invalidMessage}
			validMessage={validMessage}
			validation={validation}
			showResizer={showResizer}
			fieldSizing={fieldSizing}
		/>
	);
};

const TextareaComponent = (props: BaseComponentProps) => {
	return (
		<>
			<DefaultComponent
				title="DBTextarea"
				variants={getVariants(
					defaultComponentVariants,
					getTextarea,
					props.slotCode
				)}></DefaultComponent>
		</>
	);
};

export default TextareaComponent;
