import { Fragment, Show, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookTagArgTypes
});

/**
 * Fixtures for the cross-framework interaction e2e tests
 * (see showcases/e2e/tag/tag-interaction.spec.ts).
 *
 * A tag wrapping a button reflects a click into observable DOM, and a
 * removable tag reflects its onRemove into observable DOM, so both handlers
 * can be verified without reading a JS callback.
 */
export default function TagInteraction() {
	const state = useStore({
		clicked: false,
		removed: false,
		handleClick() {
			state.clicked = true;
		},
		handleRemove() {
			state.removed = true;
		}
	});

	return (
		<Fragment>
			<DBTag data-testid="button-tag">
				<DBButton onClick={() => state.handleClick()}>Test</DBButton>
			</DBTag>
			<Show when={state.clicked}>
				<span data-testid="tag-clicked">clicked</span>
			</Show>

			<Show when={!state.removed}>
				<DBTag
					data-testid="removable-tag"
					behavior="removable"
					onRemove={() => state.handleRemove()}>
					Remove me
				</DBTag>
			</Show>
			<Show when={state.removed}>
				<span data-testid="tag-removed">removed</span>
			</Show>
		</Fragment>
	);
}
