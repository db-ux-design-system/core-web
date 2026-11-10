import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Field Sizing',
	storybookNames: ['(Default) Fixed', 'Content', 'Content with min-height'],
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
			<div
				style={{
					width: '300px',
					'--db-textarea-min-block-size': '4lh'
				}}>
				<DBTextarea
					label="Label"
					fieldSizing="content"
					placeholder="Content with min-height"
				/>
			</div>
		</Fragment>
	);
}
