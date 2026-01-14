import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'State',
	storybookNames: ['(Default) Empty', 'Filled'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectState() {
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
				placeholder="(Default) Empty"
			/>
			<DBSelect
				options={[
					{ value: 'Filled', selected: true },
					{ value: 'Option 2' }
				]}
				label="Label"
				value="Filled"
				placeholder="Filled"
			/>
		</Fragment>
	);
}
