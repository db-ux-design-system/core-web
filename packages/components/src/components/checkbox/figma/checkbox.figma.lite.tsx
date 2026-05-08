import { useMetadata } from '@builder.io/mitosis';
import { DBCheckbox } from '../index';
import { FigmaCheckboxProps, checkboxes } from './checkbox.figma';

useMetadata({
	figma: checkboxes
});

export default function CheckboxFigmaLite(props: FigmaCheckboxProps) {
	return (
		<DBCheckbox
			size={props.size}
			disabled={props.disabled}
			checked={props.checked}
			indeterminate={props.indeterminate}
			validation={props.validation}
			name="checkbox">
			{props.label}
		</DBCheckbox>
	);
}
