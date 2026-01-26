import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Selected type',
	storybookNames: ['(Default) Text', 'Amount', 'Tag'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectSelectedtype() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'd9n3d2z13' },
						{ value: 'Option 2', id: 'vq1c6xw05' },
						{ value: 'Option 3', id: '73eppj8rp' },
						{ value: 'Option 4', id: 'yy82mda4v' },
						{ value: 'Option 5', id: 'yy82mda5v' }
					]}
					multiple={true}
					id="id-10247"
					label="(Default) Text"
					listLabel="id-10247-(Default) Text"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'la3wbcr7z' },
						{ value: 'Option 2', id: 'wz2u3a4q1' },
						{ value: 'Option 3', id: 'fcd4tiqlr' },
						{ value: 'Option 4', id: 'riz9ea0ox' },
						{ value: 'Option 5', id: 'riz9ea1ox' }
					]}
					selectedType="amount"
					multiple={true}
					id="id-10248"
					label="Amount"
					listLabel="id-10248-Amount"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'q23x2uflo' },
						{ value: 'Option 2', id: 'au07iy2il' },
						{ value: 'Option 3', id: 'ig0l3rruj' },
						{ value: 'Option 4', id: '4m2gbzu2q' },
						{ value: 'Option 5', id: '4m2gbzu3q' }
					]}
					selectedType="tag"
					multiple={true}
					id="id-10249"
					label="Tag"
					listLabel="id-10249-Tag"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
