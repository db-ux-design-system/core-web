import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBStack from '../stack.lite';
import { StorybookStackArgTypes } from './_stack.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookStackArgTypes
});

/**
 * Fixtures for the cross-framework interaction e2e tests
 * (see showcases/e2e/stack/stack-interaction.spec.ts).
 *
 * Both blocks guard the focus-ring regression from
 * https://github.com/db-ux-design-system/core-web/issues/7964:
 * - "default-stack" must not be a scroll container, because clipping to the
 *   padding box cuts off the focus ring of its children.
 * - "wrap-stack" keeps the clip, because wrapping overflows along the cross
 *   axis by design, and therefore has to leave room for the ring instead.
 *   The box is deliberately too small for the three items so wrapping and the
 *   resulting overflow actually happen.
 */
export default function StackInteraction() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBStack data-testid="default-stack">
					<DBButton>Focusable</DBButton>
					<span class="dummy-component">Content 2</span>
				</DBStack>
			</div>

			<div
				class="fit-content-container"
				style={{ width: '160px', height: '88px' }}>
				<DBStack data-testid="wrap-stack" wrap={true}>
					<DBButton>Focusable</DBButton>
					<span class="dummy-component">Content 2</span>
					<span class="dummy-component">Content 3</span>
				</DBStack>
			</div>
		</Fragment>
	);
}
