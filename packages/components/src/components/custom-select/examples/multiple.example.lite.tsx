import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Multiple',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectMultiple() {
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'ykzqfs8oa' },
					{ value: 'Option 2', id: 'kcndx1xog' },
					{ value: 'Option 3', id: 'kcndx2xog' },
					{ value: 'Option 4', id: 'kcndx3xog' },
					{ value: 'Option 5', id: 'kcndx4xog' }
				]}
				multiple={false}
				id="id-10209">
				(Default) False
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: '34540enzm' },
					{ value: 'Option 2', id: '3a4ml34c8' },
					{ value: 'Option 3', id: '3a4ml34c7' },
					{ value: 'Option 4', id: '3a4ml34c6' },
					{ value: 'Option 5', id: '3a4ml34c5' }
				]}
				multiple={true}
				id="id-10210">
				True
			</DBCustomSelect>
		</Fragment>
	);
}
