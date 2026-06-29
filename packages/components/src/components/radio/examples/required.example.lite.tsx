import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Required',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioRequired() {
	return (
		<div role="radiogroup" aria-label="Required">
			<DBRadio name="Requirement" required={false}>
				(Default) False
			</DBRadio>
			<DBRadio name="Requirement" required={true}>
				True
			</DBRadio>
		</div>
	);
}
