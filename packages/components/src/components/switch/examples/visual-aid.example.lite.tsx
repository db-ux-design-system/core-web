import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Visual Aid',
	storybookNames: [
		'(Default) False (Unchecked)',
		'(Default) False (Checked)',
		'True (Unchecked)',
		'True (Checked)'
	],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchVisualAid() {
	return (
		<Fragment>
			<DBSwitch visualAid={false}>(Default) False (Unchecked)</DBSwitch>
			<DBSwitch visualAid={false} checked={true}>
				(Default) False (Checked)
			</DBSwitch>
			<DBSwitch visualAid={true} iconLeading="moon" iconTrailing="sun">
				True (Unchecked)
			</DBSwitch>
			<DBSwitch
				visualAid={true}
				checked={true}
				iconLeading="moon"
				iconTrailing="sun">
				True (Checked)
			</DBSwitch>
		</Fragment>
	);
}
