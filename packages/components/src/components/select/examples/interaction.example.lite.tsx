import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Change', 'Required'],
	storybookArgTypes: StorybookSelectArgTypes
});

/**
 * Fixtures for the cross-framework interaction e2e tests
 * (see showcases/e2e/select/select-interaction.spec.ts).
 *
 * "Change" reflects the selected value into observable DOM so the change
 * handler can be verified. "Required" is an empty, required select used to
 * verify the selection survives validation on input (regression #7554).
 */
export default function SelectInteraction() {
	const state = useStore({
		selectedValue: '',
		handleInput(event: any) {
			state.selectedValue = (event.target as HTMLSelectElement).value;
		}
	});

	return (
		<Fragment>
			<DBSelect
				data-testid="select-change"
				label="Label"
				onInput={(event: any) => state.handleInput(event)}>
				<option value="test1">Test1</option>
				<option value="test2">Test2</option>
			</DBSelect>
			<span data-testid="select-result">{state.selectedValue}</span>

			<DBSelect
				data-testid="select-required"
				label="Label"
				required
				value=""
				placeholder="Choose an option">
				<option value="test1">Test1</option>
				<option value="test2">Test2</option>
			</DBSelect>
		</Fragment>
	);
}
