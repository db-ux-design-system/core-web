import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Checked',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchChecked() {
	const [checked, setChecked] = useState<boolean>(true);
	return (
		<Fragment>
			<DBSwitch checked={false}>(Default) False</DBSwitch>
			<DBSwitch
				checked={checked}
				onChange={(event) =>
					setChecked((event.target as HTMLInputElement).checked)
				}>
				True
			</DBSwitch>
		</Fragment>
	);
}
