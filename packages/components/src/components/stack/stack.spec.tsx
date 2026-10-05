import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBStack } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<DBStack>
		<span>Test</span>
		<span>Test 2</span>
		<span>Test 3</span>
	</DBStack>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testFocusRingNotClipped = () => {
	/*
	 * The focus ring sits 5-6px outside a child's border box
	 * (`outline-offset` + `outline-width`) and outlines are not part of the
	 * scrollable overflow region. The stack has no padding, so every child is
	 * flush with its content edge: as soon as the stack becomes a scroll
	 * container it clips the ring of its own children - completely, if the stack
	 * is sized to its content. Asserting the computed value keeps this from
	 * being reintroduced. See #7964.
	 */
	test('should not clip the focus ring of its children', async ({
		mount
	}) => {
		const component = await mount(
			<DBStack>
				<button type="button">Test</button>
			</DBStack>
		);

		await expect(component).toHaveCSS('overflow', 'visible');
	});
};

const testA11y = () => {
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-stack')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBStack', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testFocusRingNotClipped();
	testA11y();
});
