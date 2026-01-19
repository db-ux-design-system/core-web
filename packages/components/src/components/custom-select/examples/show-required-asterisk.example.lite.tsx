import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Show Required Asterisk',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectShowRequiredAsterisk() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'drpxs8im88' },
						{ value: 'Option 2', id: '211ed6zox5' },
						{ value: 'Option 3', id: '211ed6zox4' },
						{ value: 'Option 4', id: '211ed6zox3' },
						{ value: 'Option 5', id: '211ed6zox2' }
					]}
					multiple={true}
					required={true}
					showRequiredAsterisk={true}
					id="id-1021s9"
					label="(Default) True"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: '2v0zfw8afc' },
						{ value: 'Option 2', id: '30830f8w5z' },
						{ value: 'Option 3', id: '30830f8w4z' },
						{ value: 'Option 4', id: '30830f8w3z' },
						{ value: 'Option 5', id: '30830f8w2z' }
					]}
					required={true}
					showRequiredAsterisk={false}
					multiple={true}
					id="id-10s220"
					label="False"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
