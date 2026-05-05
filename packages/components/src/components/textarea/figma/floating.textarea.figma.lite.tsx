import { useMetadata } from '@builder.io/mitosis';
import { DBTextarea } from '../index';
import { FigmaTextareaProps, floatingTextareas } from './textarea.figma';

useMetadata({
	figma: floatingTextareas
});

export default function FloatingTextareaFigmaLite(props: FigmaTextareaProps) {
	return (
		<DBTextarea
			label="Label"
			variant="floating"
			disabled={props.disabled}
			validation={props.validation}
		/>
	);
}
