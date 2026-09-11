import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

/**
 Fixture for the cross-framework interaction e2e tests
 (see showcases/e2e/checkbox/checkbox-interaction.spec.ts).
 A plain, uncontrolled checkbox so check/uncheck can be observed on the DOM.

 Wrapped in a Fragment (even with a single child) because the Storybook
 plugin reads its top-level story nodes from the wrapper's children.
 */
export default function CheckboxInteraction() {
	return (
		<Fragment>
			<DBCheckbox data-testid="checkbox">Test</DBCheckbox>
		</Fragment>
	);
}
