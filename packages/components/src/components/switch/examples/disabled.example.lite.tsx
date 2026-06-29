import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchDisabled() {
	return (
		<Fragment>
			<DBSwitch disabled={false}>(Default) False</DBSwitch>
			<DBSwitch disabled={true}>True</DBSwitch>
		</Fragment>
	);
}
