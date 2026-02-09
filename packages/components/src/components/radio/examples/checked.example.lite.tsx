import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Checked',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioChecked() {
	return (
		<div role="radiogroup" aria-label="Checked">
			<DBRadio name="Checked">(Default) False</DBRadio>
			<DBRadio name="Checked" checked={true}>
				True
			</DBRadio>
		</div>
	);
}
