import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioDisabled() {
	return (
		<Fragment>
			<div role="radiogroup">
				<DBRadio name="Disabled" disabled={false}>
					(Default) False
				</DBRadio>
				<DBRadio name="Disabled" disabled={true}>
					True
				</DBRadio>
			</div>
		</Fragment>
	);
}
