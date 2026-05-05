import { useMetadata } from '@builder.io/mitosis';
import { DBTextarea } from '../index';
import { FigmaTextareaProps, aboveTextareas } from './textarea.figma';

useMetadata({
	figma: aboveTextareas
});

export default function AboveTextareaFigmaLite(props: FigmaTextareaProps) {
	return (
		<DBTextarea
			label="Label"
			disabled={props.disabled}
			validation={props.validation}
		/>
	);
}
