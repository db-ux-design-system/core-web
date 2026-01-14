import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import type { CustomSelectOptionType } from '../model';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Example: Other configuration',
	storybookNames: [
		'Search Value',
		'Custom Selected Label',
		'Transform Selected Label',
		'Custom Search Filter'
	],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectExampleOtherConfiguration() {
	const getTransformSelectedLabels = (selectedOptions?: any): string => {
		return selectedOptions
			.map((option: any) => option.value.at(-1))
			.join(', ');
	};

	const getSearchFilter = (
		option: CustomSelectOptionType,
		_: string
	): boolean => option.value === 'Option 1';
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '09nursdao' },
					{ value: 'Option 2', id: '74n9csdc14' },
					{ value: 'Option 3', id: '64n9csdc14' },
					{ value: 'Option 4', id: '54n9csdc14' },
					{ value: 'Option 5', id: '44n9csdc14' }
				]}
				searchValue="1"
				showSearch={true}
				multiple={true}
				id="id-10as4">
				Search Value
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '09nurdscsdao' },
					{ value: 'Option 2', id: '74n9ccsddc14' },
					{ value: 'Option 3', id: '73n9ccsddc14' },
					{ value: 'Option 4', id: '72n9ccsddc14' },
					{ value: 'Option 5', id: '71n9ccsddc14' }
				]}
				selectedLabels="Label controlled"
				id="id-10aasds4">
				Custom Selected Label
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '09nurdscsdao' },
					{ value: 'Option 2', id: '74n9ccsddc14' },
					{ value: 'Option 3', id: '73n9ccsddc14' },
					{ value: 'Option 4', id: '72n9ccsddc14' },
					{ value: 'Option 5', id: '71n9ccsddc14' }
				]}
				transformSelectedLabels={getTransformSelectedLabels}
				id="id-10aasds4">
				Transform Selected Label
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '09nurdscsdao' },
					{ value: 'Option 2', id: '74n9ccsddc14' },
					{ value: 'Option 3', id: '73n9ccsddc14' },
					{ value: 'Option 4', id: '72n9ccsddc14' },
					{ value: 'Option 5', id: '71n9ccsddc14' }
				]}
				searchFilter={getSearchFilter}
				showSearch={true}
				id="id-10aasds4">
				Custom Search Filter
			</DBCustomSelect>
		</Fragment>
	);
}
