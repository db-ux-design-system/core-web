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
	icon,
	infomsg,
	label,
	placeholder,
	rows,
	value,
	variant
}: DBTextareaProps) => (
	<DBTextarea
		cols={cols}
		disabled={disabled}
		icon={icon}
		infomsg={infomsg}
		label={label}
		onChange={handleChange}
		placeholder={placeholder}
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
