import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioSize() {
	return (
		<div role="radiogroup" aria-label="Size">
			<DBRadio name="Size">(Default) Medium</DBRadio>
			<DBRadio name="Size" size="small">
				Small
			</DBRadio>
		</div>
	);
}
