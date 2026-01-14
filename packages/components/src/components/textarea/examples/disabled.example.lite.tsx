import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaDisabled() {
	return (
		<Fragment>
			<DBTextarea label="Label" disabled={false}>
				(Default) False
			</DBTextarea>
			<DBTextarea label="Label" disabled={true}>
				True
			</DBTextarea>
		</Fragment>
	);
}
