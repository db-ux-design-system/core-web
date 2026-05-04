import { useMetadata } from '@builder.io/mitosis';
import { DBInput } from '../index';
import { FigmaInputProps, floatingInputs } from './input.figma';

useMetadata({
	figma: floatingInputs
});

export default function FloatingInputFigmaLite(props: FigmaInputProps) {
	return (
		<DBInput
			label="Label"
			name="input"
			variant="floating"
			disabled={props.disabled}
			validation={props.validation}
			showIconLeading={props.showIconLeading}
			showIconTrailing={props.showIconTrailing}
		/>
	);
}
