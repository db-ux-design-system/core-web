import { useMetadata } from '@builder.io/mitosis';
import { DBCustomSelect } from '../index';
import {
	FigmaCustomSelectProps,
	fullWidthCustomSelects
} from './custom-select.figma';

useMetadata({
	figma: fullWidthCustomSelects
});

export default function FullWidthCustomSelectFigmaLite(
	props: FigmaCustomSelectProps
) {
	return (
		<DBCustomSelect
			label="Label"
			name="custom-select"
			formFieldWidth="full"
			placement={props.placement}
			dropdownWidth={props.dropdownWidth}
			options={[
				{ value: '1', label: 'Option 1' },
				{ value: '2', label: 'Option 2' },
				{ value: '3', label: 'Option 3' }
			]}
		/>
	);
}
