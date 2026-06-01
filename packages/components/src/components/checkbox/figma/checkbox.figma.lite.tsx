import { useMetadata } from '@builder.io/mitosis';
import { DBCheckbox } from '../index';
import { FigmaCheckboxProps, checkboxes } from './checkbox.figma';

useMetadata({
	figma: checkboxes
});

export default function CheckboxFigmaLite(props: FigmaCheckboxProps) {
	return <DBCheckbox name="checkbox">{props.label}</DBCheckbox>;
}
