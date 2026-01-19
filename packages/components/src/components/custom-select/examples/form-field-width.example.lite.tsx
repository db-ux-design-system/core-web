import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Form Field Width',
	storybookNames: ['(Default) Full', 'Auto'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectFormFieldWidth() {
	return (
		<Fragment>
			<div style={{ width: '400px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'z0ispy7ls' },
						{ value: 'Option 2', id: 'ngl1p4pxn' },
						{ value: 'Option 3', id: 'ngl1p3pxn' },
						{ value: 'Option 4', id: 'ngl1p2pxn' },
						{ value: 'Option 5', id: 'ngl1p1pxn' }
					]}
					label="Full"
					formFieldWidth="full"
					id="id-10223"></DBCustomSelect>
			</div>
			<div style={{ width: '400px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'klxyvobwn' },
						{ value: 'Option 2', id: '7oag2a4fj' },
						{ value: 'Option 3', id: '7oag2a3fj' },
						{ value: 'Option 4', id: '7oag2a2fj' },
						{ value: 'Option 5', id: '7oag2a1fj' }
					]}
					label="Auto"
					formFieldWidth="auto"
					id="id-10224"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
