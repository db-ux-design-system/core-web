import { useMetadata } from '@builder.io/mitosis';
import { DBCustomSelect } from '../index';
import {
	FigmaCustomSelectProps,
	autoWidthCustomSelects
} from './custom-select.figma';

useMetadata({
	figma: autoWidthCustomSelects
});

export default function AutoWidthCustomSelectFigmaLite(
	props: FigmaCustomSelectProps
) {
	return (
		<DBCustomSelect
			label="Label"
			name="custom-select"
			formFieldWidth="auto"
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
