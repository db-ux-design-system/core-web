import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Required',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaRequired() {
	return (
		<Fragment>
			<DBTextarea label="Label" required={false}>
				(Default) False
			</DBTextarea>
			<DBTextarea label="Label" required={true}>
				True
			</DBTextarea>
		</Fragment>
	);
}
