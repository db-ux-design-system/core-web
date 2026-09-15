import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookRadioArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/radio/radio-interaction.spec.ts).
 * Two radios sharing a name so exclusive selection can be observed.
 */
export default function RadioInteraction() {
	return (
		<Fragment>
			<DBRadio data-testid="radio1" name="interaction">
				Test
			</DBRadio>
			<DBRadio data-testid="radio2" name="interaction">
				Test 2
			</DBRadio>
		</Fragment>
	);
}
