import { useMetadata } from '@builder.io/mitosis';
import { DBSelect } from '../index';
import { FigmaSelectProps, selects } from './select.figma';

useMetadata({
	figma: selects
});

export default function SelectFigmaLite(props: FigmaSelectProps) {
	return (
		<DBSelect name="select">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
		</DBSelect>
	);
}
