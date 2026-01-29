import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: ['Custom Icons', 'Required + Visual Aid'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchExamples() {
	return (
		<Fragment>
			<DBSwitch visualAid={true} icon="cross_circle" iconTrailing="clock">
				Custom Icons
			</DBSwitch>
			<DBSwitch visualAid={true} required={true} validMessage="Valid">
				Required + Visual Aid
			</DBSwitch>
		</Fragment>
	);
}
