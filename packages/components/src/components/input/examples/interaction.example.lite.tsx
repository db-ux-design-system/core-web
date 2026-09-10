import { Fragment, useMetadata, useState, useStore } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookInputArgTypes
});

/**
 * Fixtures for the cross-framework interaction e2e tests
 * (see showcases/e2e/input/input-interaction.spec.ts).
 *
 * The first input reflects its onInput value into an observable DOM node so
 * the input handler can be verified without reading a JS callback. The
 * remaining inputs render the attributes under test (enterkeyhint, inputmode,
 * step, accept) plus a time input with a dataList so the attribute forwarding
 * and datalist behavior can be asserted on the rendered input.
 */
export default function InputInteraction() {
	const state = useStore({
		inputValue: '',
		handleInput(event: any) {
			state.inputValue = (event.target as HTMLInputElement).value;
		}
	});
	const [timeDataList] = useState(['00:00', '00:15']);

	return (
		<Fragment>
			<DBInput
				data-testid="input-change"
				label="Label"
				onInput={(event: any) => state.handleInput(event)}
			/>
			<span data-testid="input-result">{state.inputValue}</span>
			<DBInput
				data-testid="input-enterkeyhint"
				label="Label"
				enterkeyhint="done"
			/>
			<DBInput
				data-testid="input-inputmode"
				label="Label"
				inputmode="numeric"
			/>
			<DBInput data-testid="input-plain" label="Label" type="text" />
			<DBInput
				data-testid="input-number-step-any"
				label="Label"
				type="number"
				step="any"
			/>
			<DBInput
				data-testid="input-number-step"
				label="Label"
				type="number"
				step={0.01}
			/>
			<DBInput
				data-testid="input-file-accept"
				label="Label"
				type="file"
				accept=".pdf"
			/>
			<DBInput
				data-testid="input-file-accept-multiple"
				label="Label"
				type="file"
				accept=".pdf,.doc,.docx,image/*"
			/>
			<DBInput
				data-testid="input-time"
				label="Label"
				type="time"
				dataList={timeDataList}
			/>
		</Fragment>
	);
}
