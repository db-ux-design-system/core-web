import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Focus Container',
	storybookNames: ['(Default) No Clipping', 'Wrap', 'Wrap: Focus Container'],
	storybookArgTypes: StorybookStackArgTypes
});

/**
 * Shows what `data-focus-container` is for, and doubles as the fixture for the
 * cross-framework interaction e2e tests (see
 * showcases/e2e/stack/stack-interaction.spec.ts).
 *
 * `data-focus` renders the focus ring statically so the difference is visible
 * without interacting:
 * - "default-stack" is not a scroll container, so nothing clips the ring.
 * - "wrap-stack" keeps wrapped items inside the stack and therefore clips the
 *   ring of a child flush with its edge.
 * - "focus-container-stack" reserves the ring space, so it stays visible while
 *   the wrapped content is still held inside.
 *
 * The boxes are deliberately too small for the three items so wrapping and the
 * resulting overflow actually happen.
 */
export default function StackFocusContainer() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBStack data-testid="default-stack">
					<DBButton data-focus="default">Focusable</DBButton>
					<span class="dummy-component">Content 2</span>
				</DBStack>
			</div>

			<div
				class="fit-content-container"
				style={{ width: '160px', height: '88px' }}>
				<DBStack data-testid="wrap-stack" wrap={true}>
					<DBButton data-focus="default">Focusable</DBButton>
					<span class="dummy-component">Content 2</span>
					<span class="dummy-component">Content 3</span>
				</DBStack>
			</div>

			<div
				class="fit-content-container"
				style={{ width: '160px', height: '88px' }}>
				<DBStack
					data-testid="focus-container-stack"
					data-focus-container="true"
					wrap={true}>
					<DBButton data-focus="default">Focusable</DBButton>
					<span class="dummy-component">Content 2</span>
					<span class="dummy-component">Content 3</span>
				</DBStack>
			</div>
		</Fragment>
	);
}
