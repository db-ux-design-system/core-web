import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Required',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectRequired() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'drpx8im88' },
						{ value: 'Option 2', id: '211e6zox5' },
						{ value: 'Option 3', id: '211e6zox4' },
						{ value: 'Option 4', id: '211e6zox3' },
						{ value: 'Option 5', id: '211e6zox2' }
					]}
					multiple={true}
					required={false}
					id="id-10219"
					label="(Default) False"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '2v0zw8afc' },
						{ value: 'Option 2', id: '308308w5z' },
						{ value: 'Option 3', id: '308308w4z' },
						{ value: 'Option 4', id: '308308w3z' },
						{ value: 'Option 5', id: '308308w2z' }
					]}
					required={true}
					multiple={true}
					id="id-10220"
					label="True"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
