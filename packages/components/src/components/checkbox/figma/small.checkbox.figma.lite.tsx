import { useMetadata } from '@builder.io/mitosis';
import { DBCheckbox } from '../index';
import { FigmaCheckboxProps, smallCheckboxes } from './checkbox.figma';

useMetadata({
	figma: smallCheckboxes
});

export default function SmallCheckboxFigmaLite(props: FigmaCheckboxProps) {
	return (
		<DBCheckbox
			size="small"
			disabled={props.disabled}
			checked={props.checked}
			indeterminate={props.indeterminate}
			validation={props.validation}
			name="checkbox">
			{props.label}
		</DBCheckbox>
	);
}
