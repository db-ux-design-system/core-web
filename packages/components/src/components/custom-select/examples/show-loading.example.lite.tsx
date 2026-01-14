import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Show Loading',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectShowLoading() {
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'glkscvbn5' },
					{ value: 'Option 2', id: '13cmgddkr' },
					{ value: 'Option 3', id: '14cmgddkr' },
					{ value: 'Option 4', id: '15cmgddkr' },
					{ value: 'Option 5', id: '16cmgddkr' }
				]}
				showLoading={false}
				loadingText="Loading"
				multiple={true}
				id="id-10252">
				(Default) False
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'e6wvfkv27' },
					{ value: 'Option 2', id: 'afg1mqolj' },
					{ value: 'Option 3', id: 'afg2mqolj' },
					{ value: 'Option 4', id: 'afg3mqolj' },
					{ value: 'Option 5', id: 'afg4mqolj' }
				]}
				showLoading={true}
				loadingText="Loading"
				multiple={true}
				id="id-10253">
				True
			</DBCustomSelect>
		</Fragment>
	);
}
