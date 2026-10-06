import { expect, type Locator, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '01/stack';

/**
 Space the focus ring needs outside a child's border box: `outline-offset`
 (0.25rem) plus `outline-width` (0.125rem), see `helpers/_focus.scss`.
 */
const focusOutlineReach = 6;

/**
 Smallest amount the stack reserves inside its clip. Read from the stack rather
 than measured against a child, because the first flex child differs per output
 (the Stencil output nests a `db-button` host there), which makes child
 geometry an unreliable yardstick across showcases.
 */
const getReservedSpace = async (stack: Locator) =>
	stack.evaluate((element: HTMLElement) => {
		const styles = getComputedStyle(element);
		return Math.min(
			Number.parseFloat(styles.paddingTop),
			Number.parseFloat(styles.paddingLeft)
		);
	});

test.describe('DBStack', () => {
	runInteractionTest({
		title: 'should not clip the focus ring of its children',
		path,
		example: 'Interaction',
		async run({ content }) {
			// Regression guard for
			// https://github.com/db-ux-design-system/core-web/issues/7964:
			// a plain stack must not become a scroll container, otherwise it
			// clips to its padding box and cuts off the focus ring of every
			// child flush with that edge.
			await expect(content.getByTestId('default-stack')).toHaveCSS(
				'overflow',
				'visible'
			);
		}
	});

	runInteractionTest({
		title: 'should keep room for the focus ring while wrapping',
		path,
		example: 'Interaction',
		async run({ content }) {
			const stack = content.getByTestId('wrap-stack');

			// Wrapping overflows along the cross axis by design, so `wrap`
			// keeps the scroll container that holds the wrapped content. A
			// scroll container clips to its padding box, so the stack has to
			// reserve the room the focus ring of its children needs outside
			// their border box - otherwise #7964 returns through `wrap`.
			await expect(stack).toHaveCSS('overflow', 'auto');
			expect(await getReservedSpace(stack)).toBeGreaterThanOrEqual(
				focusOutlineReach
			);
		}
	});
});
