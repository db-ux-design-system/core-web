import { useMetadata } from '@builder.io/mitosis';
import { DBTextarea } from '../index';
import { FigmaTextareaProps, textareas } from './textarea.figma';

useMetadata({
	figma: textareas
});

export default function TextareaFigmaLite(props: FigmaTextareaProps) {
	return (
		<DBTextarea
			variant={props.variant}
			label={props.label}
			placeholder={props.placeholder}
			name="textarea"
			disabled={props.disabled}
			validation={props.validation}
		/>
	);
}
