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
			<div style={{ width: '300px' }}>
				<DBTextarea
					label="Label"
					fieldSizing="fixed"
					placeholder="(Default) Fixed"
				/>
			</div>
			<div style={{ width: '300px' }}>
				<DBTextarea
					label="Label"
					fieldSizing="content"
					placeholder="Content"
				/>
			</div>
		</Fragment>
	);
}
