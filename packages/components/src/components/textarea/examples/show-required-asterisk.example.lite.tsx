import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Show Required Asterisk',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaShowRequiredAsterisk() {
	return (
		<Fragment>
			<DBTextarea
				label="Label"
				required={true}
				showRequiredAsterisk={true}
				placeholder="(Default) True"
			/>
			<DBTextarea
				label="Label"
				required={true}
				showRequiredAsterisk={false}
				placeholder="False"
			/>
		</Fragment>
	);
}
