import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Show Label',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectShowLabel() {
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '09a47p13k' },
					{ value: 'Option 2', id: 'ya0ahf4od' },
					{ value: 'Option 3', id: 'ya0ahf3od' },
					{ value: 'Option 4', id: 'ya0ahf2od' },
					{ value: 'Option 5', id: 'ya0ahf1od' }
				]}
				showLabel={true}
				id="id-10213">
				(Default) True
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'h8apm2qse' },
					{ value: 'Option 2', id: 'vop8vkb8q' },
					{ value: 'Option 3', id: 'vop8vkb7q' },
					{ value: 'Option 4', id: 'vop8vkb6q' },
					{ value: 'Option 5', id: 'vop8vkb5q' }
				]}
				showLabel={false}
				id="id-10214">
				False
			</DBCustomSelect>
		</Fragment>
	);
}
