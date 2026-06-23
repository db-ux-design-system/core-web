import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Required',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchRequired() {
	return (
		<Fragment>
			<DBSwitch required={false}>(Default) False</DBSwitch>
			<DBSwitch required={true}>True</DBSwitch>
		</Fragment>
	);
}
