import { useMetadata } from '@builder.io/mitosis';
import DBSwitch from '../switch.lite';
import { StorybookSwitchArgTypes } from './_switch.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookSwitchArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/switch/switch-interaction.spec.ts).
 * A plain, uncontrolled switch so keyboard toggling can be observed.
 */
export default function SwitchInteraction() {
	return <DBSwitch data-testid="switch">Test Switch</DBSwitch>;
}
