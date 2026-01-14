import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Show Icon',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectShowIcon() {
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '637sjglg5' },
					{ value: 'Option 2', id: 's529jnpj0' },
					{ value: 'Option 3', id: 's429jnpj0' },
					{ value: 'Option 4', id: 's329jnpj0' },
					{ value: 'Option 5', id: 's229jnpj0' }
				]}
				icon="x_placeholder"
				showIcon={false}
				id="id-10217">
				(Default) False
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '0b998bbgw' },
					{ value: 'Option 2', id: 'a37n10lfh' },
					{ value: 'Option 3', id: 'a47n10lfh' },
					{ value: 'Option 4', id: 'a57n10lfh' },
					{ value: 'Option 5', id: 'a67n10lfh' }
				]}
				icon="x_placeholder"
				showIcon={true}
				id="id-10218">
				True
			</DBCustomSelect>
		</Fragment>
	);
}
