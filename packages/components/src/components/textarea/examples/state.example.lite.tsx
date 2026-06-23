import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'State',
	storybookNames: ['(Default) Empty', 'Filled'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaState() {
	return (
		<Fragment>
			<DBTextarea label="Label" placeholder="(Default) Empty" />
			<DBTextarea label="Label" value="Filled" placeholder="Filled" />
		</Fragment>
	);
}
