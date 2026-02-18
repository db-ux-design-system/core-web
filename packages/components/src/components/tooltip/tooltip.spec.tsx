import { expect, test } from '@playwright/experimental-ct-react';

import { DBTooltip } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBButton } from '../button';
import { DBPopover } from '../popover';
import { DBStack } from '../stack';

const comp: any = (
	<div className="padding-box">
		<DBButton aria-describedby="tooltip" data-testid="button">
			Button
			<DBTooltip animation="disabled" id="tooltip" data-testid="tooltip">
				Test
			</DBTooltip>
		</DBButton>
	</div>
);

const popoverTest: any = (
	<DBStack justifyContent="end" alignment="end">
		<DBPopover
			trigger={
				<DBButton
					data-testid="popover-button"
					icon="x_placeholder"
					type="button"
					noText
					variant="ghost"
				/>
			}>
			<DBButton aria-describedby="tooltip" data-testid="button">
				Button
				<DBTooltip
					animation="disabled"
					id="tooltip"
					data-testid="tooltip">
					Test
				</DBTooltip>
			</DBButton>
		</DBPopover>
		<p>Just for screenshot</p>
		<p>Just for screenshot</p>
		<p>Just for screenshot</p>
		<p>Just for screenshot</p>
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

	test('should open', async ({ mount }) => {
		const component = await mount(comp);
		await component.getByTestId('button').focus();
		await expect(component.getByTestId('tooltip')).toBeVisible();
	});

	test('after open should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await component.getByTestId('button').focus();
		await expect(component).toHaveScreenshot({
			maxDiffPixels: 200
		});
	});

	test('inside popover should match screenshot', async ({ mount }) => {
		const component = await mount(popoverTest);
		await component.getByTestId('popover-button').focus();
		await component.getByTestId('button').focus();
		await expect(component).toHaveScreenshot({
			maxDiffPixels: 200
		});
	});
};

test.describe('DBTooltip', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});
