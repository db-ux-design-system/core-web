import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchSize() {
	return (
		<Fragment>
			<DBSwitch>(Default) Medium</DBSwitch>
			<DBSwitch size="small">Small</DBSwitch>
		</Fragment>
	);
}
