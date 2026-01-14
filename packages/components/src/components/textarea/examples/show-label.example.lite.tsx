import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Show Label',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaShowLabel() {
	return (
		<Fragment>
			<DBTextarea label="Label" showLabel={true}>
				(Default) True
			</DBTextarea>
			<DBTextarea label="Label" showLabel={false}>
				False
			</DBTextarea>
		</Fragment>
	);
}
