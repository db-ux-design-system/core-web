import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Show Message',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectShowMessage() {
	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'm88qjifb3' },
						{ value: 'Option 2', id: '4et40d885' },
						{ value: 'Option 3', id: '4et40d884' },
						{ value: 'Option 4', id: '4et40d883' },
						{ value: 'Option 5', id: '4et40d882' }
					]}
					message="Helper Message"
					showMessage={false}
					label="(Default) False"
					listLabel="id-10215-(Default) False"></DBCustomSelect>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					options={[
						{ value: 'Option 1', id: 'tm65in30k' },
						{ value: 'Option 2', id: 'hujnrn5vk' },
						{ value: 'Option 3', id: 'hujnrn4vk' },
						{ value: 'Option 4', id: 'hujnrn3vk' },
						{ value: 'Option 5', id: 'hujnrn2vk' }
					]}
					message="Helper Message"
					showMessage={true}
					label="True"
					listLabel="id-10216-True"></DBCustomSelect>
			</div>
		</Fragment>
	);
}
