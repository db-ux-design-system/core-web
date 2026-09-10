import { useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/checkbox/checkbox-interaction.spec.ts).
 * A plain, uncontrolled checkbox so check/uncheck can be observed on the DOM.
 */
export default function CheckboxInteraction() {
	return <DBCheckbox data-testid="checkbox">Test</DBCheckbox>;
}
