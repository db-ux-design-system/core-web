import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Trailing', 'Leading'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchVariant() {
	return (
		<Fragment>
			<DBSwitch label="(Default) Trailing">(Default) Trailing</DBSwitch>
			<DBSwitch label="Leading" variant="leading">
				Leading
			</DBSwitch>
		</Fragment>
	);
}
