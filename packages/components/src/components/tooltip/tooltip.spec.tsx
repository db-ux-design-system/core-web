import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTooltip } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBButton } from '../button';

const comp = (
	<DBButton describedbyid="tooltip-01">
		Button
		<DBTooltip animation="disabled" id="tooltip-01">
			Test
		</DBTooltip>
	</DBButton>
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

test.describe('DBTooltip', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});
