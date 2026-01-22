import {
	Fragment,
	useMetadata,
	useStore,
	useTarget
} from '@builder.io/mitosis';
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
	const state = useStore({
		getTransformSelectedLabels: (selectedOptions?: any): string => {
			return selectedOptions
				.map((option: any) => option.value.at(-1))
				.join(', ');
		},
		getSearchFilter: (option: CustomSelectOptionType): boolean => {
			return option.value === 'Option 1';
		}
	});

	return (
		<Fragment>
			<div style={{ width: '200px' }}>
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
					id="id-10as4"
					label="Search Value"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '09nurdscsdao' },
						{ value: 'Option 2', id: '74n9ccsddc14' },
						{ value: 'Option 3', id: '73n9ccsddc14' },
						{ value: 'Option 4', id: '72n9ccsddc14' },
						{ value: 'Option 5', id: '71n9ccsddc14' }
					]}
					selectedLabels="Label controlled"
					id="id-10aasds4"
					label="Custom Selected Label"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '09nurdscsdao' },
						{ value: 'Option 2', id: '74n9ccsddc14' },
						{ value: 'Option 3', id: '73n9ccsddc14' },
						{ value: 'Option 4', id: '72n9ccsddc14' },
						{ value: 'Option 5', id: '71n9ccsddc14' }
					]}
					id="id-10aasds4"
					label="Transform Selected Label"
					{...useTarget({
						angular: { transformSelectedLabels: undefined },
						default: {
							transformSelectedLabels: (selectedOptions: any) =>
								state.getTransformSelectedLabels(
									selectedOptions
								)
						}
					})}></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '09nurdscsdao' },
						{ value: 'Option 2', id: '74n9ccsddc14' },
						{ value: 'Option 3', id: '73n9ccsddc14' },
						{ value: 'Option 4', id: '72n9ccsddc14' },
						{ value: 'Option 5', id: '71n9ccsddc14' }
					]}
					id="id-10aasds4"
					label="Custom Search Filter"
					{...useTarget({
						angular: { searchFilter: undefined },
						default: {
							searchFilter: (option: any) =>
								state.getSearchFilter(option)
						}
					})}></DBCustomSelect>
			</div>
		</Fragment>
	);
}
