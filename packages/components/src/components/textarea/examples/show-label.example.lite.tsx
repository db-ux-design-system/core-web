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
			<DBTextarea
				label="Label"
				showLabel={true}
				placeholder="(Default) True"
			/>
			<DBTextarea label="Label" showLabel={false} placeholder="False" />
		</Fragment>
	);
}
