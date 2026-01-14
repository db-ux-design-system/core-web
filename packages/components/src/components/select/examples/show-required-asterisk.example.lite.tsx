import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Show Required Asterisk',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectShowRequiredAsterisk() {
	return (
		<Fragment>
			<DBSelect
				options={[
					{ value: 'Option 1' },
					{ value: 'Option 2' },
					{ value: 'Option 3' },
					{ value: 'Option 4' },
					{ value: 'Option 5' }
				]}
				label="Label"
				required={true}
				showRequiredAsterisk={true}
				placeholder="(Default) True"
			/>
			<DBSelect
				options={[
					{ value: 'Option 1' },
					{ value: 'Option 2' },
					{ value: 'Option 3' },
					{ value: 'Option 4' },
					{ value: 'Option 5' }
				]}
				label="Label"
				required={true}
				showRequiredAsterisk={false}
				placeholder="False"
			/>
		</Fragment>
	);
}
