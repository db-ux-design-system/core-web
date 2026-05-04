import { useMetadata } from '@builder.io/mitosis';
import { DBCheckbox } from '../index';
import { FigmaCheckboxProps, mediumCheckboxes } from './checkbox.figma';

useMetadata({
	figma: mediumCheckboxes
});

export default function MediumCheckboxFigmaLite(props: FigmaCheckboxProps) {
	return (
		<DBCheckbox
			size="medium"
			disabled={props.disabled}
			checked={props.checked}
			indeterminate={props.indeterminate}
			validation={props.validation}
			name="checkbox">
			{props.label}
		</DBCheckbox>
	);
}
