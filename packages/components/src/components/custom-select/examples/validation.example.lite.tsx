import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Validation',
	storybookNames: ['(Default) No Validation', 'Invalid', 'Valid'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

export default function CustomSelectValidation() {
	return (
		<Fragment>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'miouzc0ec' },
					{ value: 'Option 2', id: '10dqnhil5' },
					{ value: 'Option 3', id: '10dqnhil4' },
					{ value: 'Option 4', id: '10dqnhil3' },
					{ value: 'Option 5', id: '10dqnhil2' }
				]}
				id="id-102061"
				validation="no-validation">
				(Default) No Validation
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'miouzc0ec' },
					{ value: 'Option 2', id: '10dqnhil5' },
					{ value: 'Option 3', id: '10dqnhil4' },
					{ value: 'Option 4', id: '10dqnhil3' },
					{ value: 'Option 5', id: '10dqnhil2' }
				]}
				id="id-102062"
				validation="invalid"
				invalidMessage="Invalid Message">
				Invalid
			</DBCustomSelect>
			<DBCustomSelect
				options={[
					{ value: 'Option 1', id: 'miouzc0ec' },
					{ value: 'Option 2', id: '10dqnhil5' },
					{ value: 'Option 3', id: '10dqnhil4' },
					{ value: 'Option 4', id: '10dqnhil3' },
					{ value: 'Option 5', id: '10dqnhil2' }
				]}
				id="id-102063"
				validation="valid"
				invalidMessage="Valid Message">
				Valid
			</DBCustomSelect>
		</Fragment>
	);
}
