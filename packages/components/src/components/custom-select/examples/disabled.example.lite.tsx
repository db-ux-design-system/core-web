import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectDisabled() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'dlysh2quv' },
						{ value: 'Option 2', id: 'ygm3c9msn' },
						{ value: 'Option 3', id: 'ygm4c9msn' },
						{ value: 'Option 4', id: 'ygm5c9msn' },
						{ value: 'Option 5', id: 'ygm6c9msn' }
					]}
					multiple={true}
					disabled={false}
					label="(Default) False"
					listLabel="id-10221-(Default) False"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'z445a00hf' },
						{ value: 'Option 2', id: 'wji97jfsg' },
						{ value: 'Option 3', id: 'wji96jfsg' },
						{ value: 'Option 4', id: 'wji95jfsg' },
						{ value: 'Option 5', id: 'wji94jfsg' }
					]}
					disabled={true}
					multiple={true}
					label="True"
					listLabel="id-10222-True"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
