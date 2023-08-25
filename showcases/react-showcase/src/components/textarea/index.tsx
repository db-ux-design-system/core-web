import { DBTextarea } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/textarea.json';
import type { DBTextareaProps } from '../../../../../output/react/src/components/textarea/model';
import { getVariants } from '../data';

const handleChange = (evt) => {
	const { debug } = console;
	debug(evt);
};

const getTextarea = ({
	cols,
	disabled,
	message,
	label,
	placeholder,
	rows,
	value,
	variant,
	readOnly,
	required,
	children
}: DBTextareaProps) => (
	<DBTextarea
		cols={cols}
		disabled={disabled}
		message={message}
		label={label}
		readOnly={readOnly}
		onChange={handleChange}
		required={required}
		placeholder={placeholder ?? children}
		rows={rows}
		defaultValue={value}
		variant={variant}></DBTextarea>
);

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
