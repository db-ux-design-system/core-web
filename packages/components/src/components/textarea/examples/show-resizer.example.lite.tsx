import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Show Resizer',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaShowResizer() {
	return (
		<Fragment>
			<DBTextarea
				label="Label"
				showResizer={true}
				placeholder="(Default) True"
			/>
			<DBTextarea label="Label" showResizer={false} placeholder="False" />
		</Fragment>
	);
}
