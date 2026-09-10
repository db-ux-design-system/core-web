import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookTextareaArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/textarea/textarea-interaction.spec.ts).
 * Reflects the onInput value into an observable DOM node so the input handler
 * can be verified without reading a JS callback.
 */
export default function TextareaInteraction() {
	const state = useStore({
		inputValue: '',
		handleInput(event: any) {
			state.inputValue = (event.target as HTMLTextAreaElement).value;
		}
	});

	return (
		<Fragment>
			<DBTextarea
				data-testid="textarea"
				label="Label"
				onInput={(event: any) => state.handleInput(event)}
			/>
			<span data-testid="textarea-result">{state.inputValue}</span>
		</Fragment>
	);
}
