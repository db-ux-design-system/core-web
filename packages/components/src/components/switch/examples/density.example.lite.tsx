import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['functional', 'regular (Default)', 'expressive'],
	storybookArgTypes: StorybookSwitchArgTypes
});

export default function SwitchDensity() {
	return (
		<Fragment>
			<DBSwitch data-density="functional">functional</DBSwitch>
			<DBSwitch data-density="regular">regular (Default)</DBSwitch>
			<DBSwitch data-density="expressive">expressive</DBSwitch>
		</Fragment>
	);
}
