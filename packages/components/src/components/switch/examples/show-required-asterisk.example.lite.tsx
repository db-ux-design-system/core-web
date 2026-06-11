import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Show Required Asterisk',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchShowRequiredAsterisk() {
	return (
		<Fragment>
			<DBSwitch required={true} showRequiredAsterisk={true}>
				(Default) True
			</DBSwitch>
			<DBSwitch required={true} showRequiredAsterisk={false}>
				False
			</DBSwitch>
		</Fragment>
	);
}
