import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Show No Result',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectShowNoResult() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'wc5wcgjam' },
						{ value: 'Option 2', id: 'lx4cydggt' },
						{ value: 'Option 3', id: 'lx3cydggt' },
						{ value: 'Option 4', id: 'lx2cydggt' },
						{ value: 'Option 5', id: 'lx1cydggt' }
					]}
					showNoResults={false}
					noResultsText="Nothing found"
					multiple={true}
					id="id-10250"
					label="(Default) False"
					listLabel="id-10250-(Default) False"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'waa0gfjab' },
						{ value: 'Option 2', id: 'v48umf0qp' },
						{ value: 'Option 3', id: 'v58umf0qp' },
						{ value: 'Option 4', id: 'v68umf0qp' },
						{ value: 'Option 5', id: 'v78umf0qp' }
					]}
					showNoResults={true}
					noResultsText="Nothing found"
					multiple={true}
					id="id-10251"
					label="True"
					listLabel="id-10251-True"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
