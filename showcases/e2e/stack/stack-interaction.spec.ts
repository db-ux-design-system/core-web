import { expect, type Locator, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '01/stack';

/**
 Space the focus ring needs outside a child's border box: `outline-offset`
 (0.25rem) plus `outline-width` (0.125rem), see `helpers/_focus.scss`.
 */
const focusOutlineReach = 6;

/**
 Measures the smallest distance between the first child's border box and the
 edge the stack would clip at. A scroll container clips to its padding box, so
 anything less than the ring reach cuts the focus ring off.
 */
const getRoomForFocusRing = async (stack: Locator) =>
	stack.evaluate((element: HTMLElement) => {
		const child = element.firstElementChild;
		if (!(child instanceof HTMLElement)) {
			return -1;
		}

		const stackRect = element.getBoundingClientRect();
		const childRect = child.getBoundingClientRect();
		const styles = getComputedStyle(element);
		return Math.min(
			childRect.top -
				(stackRect.top + Number.parseFloat(styles.borderTopWidth)),
			childRect.left -
				(stackRect.left + Number.parseFloat(styles.borderLeftWidth))
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
			// keeps the scroll container that holds the wrapped content - and
			// has to reserve the ring space the clip would otherwise eat.
			await expect(stack).toHaveCSS('overflow', 'auto');
			expect(await getRoomForFocusRing(stack)).toBeGreaterThanOrEqual(
				focusOutlineReach
			);
		}
	});
});
