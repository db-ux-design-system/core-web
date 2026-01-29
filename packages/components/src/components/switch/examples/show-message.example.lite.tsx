import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Show Message',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchShowMessage() {
	return (
		<Fragment>
			<DBSwitch>(Default) False</DBSwitch>
			<DBSwitch showMessage={true} message="Message">
				True
			</DBSwitch>
		</Fragment>
	);
}
