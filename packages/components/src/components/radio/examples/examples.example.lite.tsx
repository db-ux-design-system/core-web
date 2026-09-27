import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: [
		'Functional Small Checked',
		'Functional Medium Checked',
		'Regular Small Checked',
		'Regular Medium Checked',
		'Expressive Small Checked',
		'Expressive Medium Checked'
	],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioExamples() {
	return (
		<div>
			<DBRadio
				data-density="functional"
				size="small"
				name="Examples1"
				checked={true}>
				Functional Small Checked
			</DBRadio>
			<DBRadio data-density="functional" name="Examples2" checked={true}>
				Functional Medium Checked
			</DBRadio>
			<DBRadio
				data-density="regular"
				size="small"
				name="Examples3"
				checked={true}>
				Regular Small Checked
			</DBRadio>
			<DBRadio data-density="regular" name="Examples4" checked={true}>
				Regular Medium Checked
			</DBRadio>
			<DBRadio
				data-density="expressive"
				size="small"
				name="Examples5"
				checked={true}>
				Expressive Small Checked
			</DBRadio>
			<DBRadio data-density="expressive" name="Examples6" checked={true}>
				Expressive Medium Checked
			</DBRadio>
		</div>
	);
}
