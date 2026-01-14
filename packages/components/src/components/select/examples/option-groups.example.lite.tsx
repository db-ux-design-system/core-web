import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Option Groups',
	storybookNames: ['Using optgroups', 'Mixed options and groups'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectOptionGroups() {
	return (
		<Fragment>
			<DBSelect
				options={[
					{
						label: 'Group 1',
						value: '',
						options: [{ value: 'Option 1' }, { value: 'Option 2' }]
					},
					{
						label: 'Group 2',
						value: '',
						options: [{ value: 'Option 3' }, { value: 'Option 4' }]
					}
				]}
				label="Label"
				placeholder="Using optgroups"
			/>
			<DBSelect
				options={[
					{ value: 'Single Option' },
					{
						label: 'Grouped Options',
						value: '',
						options: [
							{ value: 'Group Option 1' },
							{ value: 'Group Option 2' }
						]
					},
					{ value: 'Another Single Option' }
				]}
				label="Label"
				placeholder="Mixed options and groups"
			/>
		</Fragment>
	);
}
