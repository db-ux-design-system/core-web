import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Checked',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchChecked() {
	return (
		<Fragment>
			<DBSwitch checked={false}>(Default) False</DBSwitch>
			<DBSwitch checked={true}>True</DBSwitch>
		</Fragment>
	);
}
