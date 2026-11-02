import { expect, test, type Page } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '01/divider';

/**
 * Renders a plain vertical `.db-divider` next to some text inside a container
 * and returns the heights of both. The markup is appended to the page instead
 * of mutating the showcase, so no framework re-render can interfere.
 */
const measureVerticalDivider = async (
	page: Page,
	containerStyle: string,
	dividerAttributes = ''
) =>
	page.evaluate(
		({ containerStyle, dividerAttributes }) => {
			/* eslint-disable unicorn/isolated-functions -- document is available in the browser context */
			const container = document.createElement('div');
			container.setAttribute('style', containerStyle);
			container.innerHTML = `<span>Text</span><div class="db-divider" data-variant="vertical" ${dividerAttributes}></div>`;
			document.body.append(container);
			/* eslint-enable unicorn/isolated-functions */
			const result = {
				container: container.getBoundingClientRect().height,
				divider: container
					.querySelector('.db-divider')!
					.getBoundingClientRect().height
			};
			container.remove();
			return result;
		},
		{ containerStyle, dividerAttributes }
	);

// Regression tests for #8613: a vertical divider takes the height of its
// flex container, but never exceeds it.
test.describe('DBDivider', () => {
	runInteractionTest({
		title: 'should stretch a vertical divider in a centered flex container',
		path,
		async run({ page }) {
			const { divider } = await measureVerticalDivider(
				page,
				'display: flex; align-items: center; height: 80px'
			);
			expect(divider).toBe(80);
		}
	});

	runInteractionTest({
		title: 'should stretch a full-width vertical divider in a flex container without height',
		path,
		async run({ page }) {
			const { container, divider } = await measureVerticalDivider(
				page,
				'display: flex',
				'data-width="full"'
			);
			expect(divider).toBeGreaterThan(0);
			expect(divider).toBe(container);
		}
	});

	runInteractionTest({
		title: 'should not exceed the height of a small container',
		path,
		async run({ page }) {
			const { divider } = await measureVerticalDivider(
				page,
				'display: flex; align-items: center; height: 16px'
			);
			expect(divider).toBe(16);
		}
	});
});
