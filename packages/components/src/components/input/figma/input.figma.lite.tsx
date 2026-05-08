import { useMetadata } from '@builder.io/mitosis';
import { DBInput } from '../index';
import { FigmaInputProps, inputs } from './input.figma';

useMetadata({
	figma: inputs
});

export default function InputFigmaLite(props: FigmaInputProps) {
	return (
		<DBInput
			variant={props.variant}
			label={props.label}
			placeholder={props.placeholder}
			name="input"
			disabled={props.disabled}
			validation={props.validation}
			showIconLeading={props.showIconLeading}
			showIconTrailing={props.showIconTrailing}
		/>
	);
}
