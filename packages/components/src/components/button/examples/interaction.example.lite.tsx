import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookButtonArgTypes
});

/**
 Fixtures for the cross-framework interaction e2e tests
 (see showcases/e2e/button/button-interaction.spec.ts).

 The first button reflects its click into an observable DOM node so the
 click handler can be verified without reading a JS callback. The remaining
 buttons render the invoker command attributes (present / absent) so the
 attribute forwarding can be asserted on the rendered button.
 */
export default function ButtonInteraction() {
	const state = useStore({
		clickResult: 'not clicked',
		handleClick() {
			state.clickResult = 'clicked';
		}
	});

	return (
		<Fragment>
			<DBButton
				data-testid="click-button"
				onClick={() => {
					state.handleClick();
				}}>
				Click me
			</DBButton>
			{/* Storybook only generates one story ('Interaction') for this
			 * example - the readout and the extra buttons below are test-only
			 * siblings, so they are excluded from story generation via
			 * data-sb-ignore (they still render in the showcase/e2e output). */}
			<span data-testid="click-result" data-sb-ignore="true">
				{state.clickResult}
			</span>
			<DBButton
				data-sb-ignore="true"
				data-testid="command-button"
				command="show-modal"
				commandfor="dialog">
				Command
			</DBButton>
			<DBButton data-sb-ignore="true" data-testid="default-button">
				Default
			</DBButton>
		</Fragment>
	);
}
