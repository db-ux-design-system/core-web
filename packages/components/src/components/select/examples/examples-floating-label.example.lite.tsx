import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Examples Floating Label',
	storybookNames: ['(Default) Empty', 'Filled', 'Disabled', 'Invalid'],
	storybookArgTypes: StorybookSelectArgTypes
});

export default function SelectExamplesFloatingLabel() {
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
				variant="floating"
				placeholder="(Default) Empty"
			/>
			<DBSelect
				options={[
					{ value: 'Filled', selected: true },
					{ value: 'Option 2' }
				]}
				label="Label"
				value="Filled"
				variant="floating"
				placeholder="Filled"
			/>
			<DBSelect
				options={[
					{ value: 'Disabled', selected: true },
					{ value: 'Option 2' }
				]}
				label="Label"
				disabled={true}
				variant="floating"
				value="Disabled"
				placeholder="Disabled"
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
				placeholder="Invalid"
				variant="floating"
				validation="invalid"
				invalidMessage="Invalid Message"
			/>
		</Fragment>
	);
}
