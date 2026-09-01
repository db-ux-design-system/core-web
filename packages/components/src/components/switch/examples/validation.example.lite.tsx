import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Validation',
	storybookNames: ['(Default) No validation', 'Invalid', 'Valid'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchValidation() {
	return (
		<Fragment>
			<DBSwitch>(Default) No validation</DBSwitch>
			<DBSwitch validation="invalid" invalidMessage="Invalid Message">
				Invalid
			</DBSwitch>
			<DBSwitch
				validation="valid"
				validMessage="Valid message"
				checked={true}>
				Valid
			</DBSwitch>
		</Fragment>
	);
}
