import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Field Sizing',
	storybookNames: ['(Default) Fixed', 'Content'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaFieldSizing() {
	return (
		<Fragment>
			<DBTextarea label="Label" fieldSizing="fixed">
				(Default) Fixed
			</DBTextarea>
			<DBTextarea label="Label" fieldSizing="content">
				Content
			</DBTextarea>
		</Fragment>
	);
}
