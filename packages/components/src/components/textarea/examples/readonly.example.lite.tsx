import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Readonly',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaReadonly() {
	return (
		<Fragment>
			<DBTextarea
				label="Label"
				value="(Default) False"
				readOnly={false}
				placeholder="(Default) False"
			/>
			<DBTextarea
				label="Label"
				value="True"
				readOnly={true}
				placeholder="True"
			/>
		</Fragment>
	);
}
