import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Show Message',
	storybookNames: ['(Default) False', 'true'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaShowMessage() {
	return (
		<Fragment>
			<DBTextarea label="Label" showMessage={false}>
				(Default) False
			</DBTextarea>
			<DBTextarea label="Label" message="Message" showMessage={true}>
				true
			</DBTextarea>
		</Fragment>
	);
}
