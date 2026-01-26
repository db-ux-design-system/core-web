import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Show Required Asterisk',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioShowRequiredAsterisk() {
	return (
		<Fragment>
			<div role="radiogroup">
				<DBRadio
					name="Asterisk"
					required={true}
					showRequiredAsterisk={true}>
					(Default) True
				</DBRadio>
				<DBRadio
					name="Asterisk"
					required={true}
					showRequiredAsterisk={false}>
					False
				</DBRadio>
			</div>
		</Fragment>
	);
}
