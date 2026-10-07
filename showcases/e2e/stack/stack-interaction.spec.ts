import { expect, type Locator, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '01/stack';
const example = 'Focus Container';

/**
 Space the focus ring needs outside a child's border box: `outline-offset`
 (0.25rem) plus `outline-width` (0.125rem), see `helpers/_focus.scss`.
 */
const focusOutlineReach = 6;

/**
 Smallest amount a stack reserves inside its clip. Read from the stack itself
 rather than measured against a child, because the first flex child differs per
 output (the Stencil output nests a `db-button` host there), which makes child
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
		example,
		async run({ content }) {
			// A scroll container would clip the focus ring of its children.
			await expect(content.getByTestId('default-stack')).toHaveCSS(
				'overflow',
				'visible'
			);
		}
	});

	runInteractionTest({
		title: 'should not bring any spacing of its own while wrapping',
		path,
		example,
		async run({ content }) {
			const stack = content.getByTestId('wrap-stack');

			// A stack holds wrapped items but stays free of spacings itself.
			await expect(stack).toHaveCSS('overflow', 'auto');
			expect(await getReservedSpace(stack)).toBe(0);
		}
	});

	runInteractionTest({
		title: 'should reserve room for the focus ring as a focus container',
		path,
		example,
		async run({ content }) {
			const stack = content.getByTestId('focus-container-stack');

			// Opt-in for the clipping combination: a clip plus focusable children.
			await expect(stack).toHaveCSS('overflow', 'auto');
			expect(await getReservedSpace(stack)).toBeGreaterThanOrEqual(
				focusOutlineReach
			);
		}
	});
});
