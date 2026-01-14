import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Required',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectRequired() {
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
				required={false}
				placeholder="(Default) False"
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
				required={true}
				placeholder="True"
			/>
		</Fragment>
	);
}
