import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Show Label',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchShowLabel() {
	return (
		<Fragment>
			<DBSwitch showLabel={true}>(Default) True</DBSwitch>
			<DBSwitch showLabel={false}>False</DBSwitch>
		</Fragment>
	);
}
