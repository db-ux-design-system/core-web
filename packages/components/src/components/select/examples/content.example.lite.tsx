import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Content',
	storybookNames: ['(Default) Text', 'Text - Leading Icon'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectContent() {
	return (
		<Fragment>
			<DBSelect
				options={[
					{ value: 'Option 1' },
					{ value: 'Option 2' },
					{ value: 'Option 3' },
					{ value: 'Option 4' },
					{ value: 'Option 5' }
				]}
				label="Label"
				placeholder="(Default) Text"
			/>
			<DBSelect
				options={[
					{ value: 'Option 1' },
					{ value: 'Option 2' },
					{ value: 'Option 3' },
					{ value: 'Option 4' },
					{ value: 'Option 5' }
				]}
				label="Label"
				icon="x_placeholder"
				placeholder="Text - Leading Icon"
			/>
		</Fragment>
	);
}
