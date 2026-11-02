import { expect, test, type Locator } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '01/divider';

const getHeight = async (divider: Locator) =>
	divider.evaluate((element) => element.getBoundingClientRect().height);

// Regression tests for #8613: a vertical divider has no intrinsic height and
// collapsed to 0px outside of a stretching flex container.
test.describe('DBDivider', () => {
	runInteractionTest({
		title: 'should render a vertical divider with a height in block layout',
		path,
		example: 'Density',
		async run({ content }) {
			// The density example renders the divider inside a block wrapper
			// without height, same as switching the Storybook control.
			const divider = content.locator('.db-divider').first();
			await divider.evaluate((element) => {
				element.dataset.variant = 'vertical';
			});

			expect(await getHeight(divider)).toBeGreaterThan(0);
		}
	});

	runInteractionTest({
		title: 'should stretch a vertical divider in a centered flex container',
		path,
		example: 'Density',
		async run({ content }) {
			const divider = content.locator('.db-divider').first();
			await divider.evaluate((element) => {
				element.dataset.variant = 'vertical';
				// Without width="full" there is no block-size: 100%, so only
				// align-self: stretch can give the divider its height here.
				delete element.dataset.width;
				// Direct parent: the wrapper (React/Vue) or the host element
				// (Angular/Stencil), so the divider itself is the flex item.
				const parent = element.parentElement!;
				parent.style.display = 'flex';
				parent.style.alignItems = 'center';
				parent.style.height = '80px';
			});

			expect(await getHeight(divider)).toBe(80);
		}
	});
});
