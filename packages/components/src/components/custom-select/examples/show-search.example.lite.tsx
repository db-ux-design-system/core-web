import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Show Search',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectShowSearch() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '09nure8co' },
						{ value: 'Option 2', id: '74n91hp14' },
						{ value: 'Option 3', id: '74n91hp15' },
						{ value: 'Option 4', id: '74n91hp16' },
						{ value: 'Option 5', id: '74n91hp17' },
						{ value: 'Option 6', id: '74n91hp18' },
						{ value: 'Option 7', id: '74n91hp19' },
						{ value: 'Option 8', id: '74n91hp24' },
						{ value: 'Option 9', id: '74n91hp34' },
						{ value: 'Option 10', id: '74n91hp44' }
					]}
					showSearch={false}
					multiple={true}
					label="(Default) False"
					selectAllLabel="Select all"
					searchLabel="Search"
					listLabel="id-10254-(Default) False"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'ktmbve0k2' },
						{ value: 'Option 2', id: 'uf9wakkc1' },
						{ value: 'Option 3', id: 'uf9wakkc2' },
						{ value: 'Option 4', id: 'uf9wakkc3' },
						{ value: 'Option 5', id: 'uf9wakkc4' }
					]}
					showSearch={true}
					multiple={true}
					selectAllLabel="Select all"
					searchLabel="Search"
					label="True"
					listLabel="id-10255-True"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
