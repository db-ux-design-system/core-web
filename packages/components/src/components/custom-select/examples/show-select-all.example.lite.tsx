import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Show Select All',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectShowSelectAll() {
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'p6l2dpiea' },
					{ value: 'Option 2', id: 'jh7pczno4' },
					{ value: 'Option 3', id: 'jh7pczno5' },
					{ value: 'Option 4', id: 'jh7pczno6' },
					{ value: 'Option 5', id: 'jh7pczno7' },
					{ value: 'Option 6', id: 'jh7pczno8' }
				]}
				showSelectAll={false}
				multiple={true}
				id="id-10256">
				(Default) False
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'zcim85pqg' },
					{ value: 'Option 2', id: 'kg6gvbwru' },
					{ value: 'Option 3', id: 'kg5gvbwru' },
					{ value: 'Option 4', id: 'kg4gvbwru' },
					{ value: 'Option 5', id: 'kg3gvbwru' }
				]}
				showSelectAll={true}
				multiple={true}
				id="id-10257">
				True
			</DBCustomSelect>
		</Fragment>
	);
}
