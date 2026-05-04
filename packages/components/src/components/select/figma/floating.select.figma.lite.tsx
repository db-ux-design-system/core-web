import { useMetadata } from '@builder.io/mitosis';
import { DBSelect } from '../index';
import { FigmaSelectProps, floatingSelects } from './select.figma';

useMetadata({
	figma: floatingSelects
});

export default function FloatingSelectFigmaLite(props: FigmaSelectProps) {
	return (
		<DBSelect
			label="Label"
			name="select"
			variant="floating"
			disabled={props.disabled}
			validation={props.validation}
			showIcon={props.showIcon}>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
		</DBSelect>
	);
}
