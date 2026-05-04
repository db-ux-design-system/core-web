import { useMetadata } from '@builder.io/mitosis';
import { DBInput } from '../index';
import { FigmaInputProps, aboveInputs } from './input.figma';

useMetadata({
	figma: aboveInputs
});

export default function AboveInputFigmaLite(props: FigmaInputProps) {
	return (
		<DBInput
			label="Label"
			name="input"
			disabled={props.disabled}
			validation={props.validation}
			showIconLeading={props.showIconLeading}
			showIconTrailing={props.showIconTrailing}
		/>
	);
}
