import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Validation',
	storybookNames: ['(Default) No validation', 'Invalid', 'Valid'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectValidation() {
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
				validation="no-validation"
				placeholder="(Default) No validation"
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
				validation="invalid"
				invalidMessage="Invalid Message"
				placeholder="Invalid"
			/>
			<DBSelect
				options={[
					{ value: 'Valid', selected: true },
					{ value: 'Option 2' }
				]}
				label="Label"
				validation="valid"
				validMessage="Valid message"
				placeholder="Valid"
			/>
		</Fragment>
	);
}
