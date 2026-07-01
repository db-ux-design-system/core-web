import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelSecondaryActions } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DESKTOP_VIEWPORT } from '../../shared/constants.ts';
import { DBButton } from '../button';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelDesktop } from '../control-panel-desktop';
import { DBShell } from '../shell';
import { DBShellContent } from '../shell-content';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell controlPanelDesktopPosition="top">
		<DBControlPanelDesktop
			orientation="horizontal"
			brand={<DBControlPanelBrand data-logo="db-systel" />}
			secondaryActions={
				<DBControlPanelSecondaryActions>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Profile
					</DBButton>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Notification
					</DBButton>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Help
					</DBButton>
				</DBControlPanelSecondaryActions>
			}>
			{/*
				<template v-slot:brand>
					<DBControlPanelBrand data-logo="db-systel" />
				</template>
				<template v-slot:secondary-actions>
					<DBControlPanelSecondaryActions>
						<DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton>
						<DBButton icon="x_placeholder" variant="ghost" noText>Notification</DBButton>
						<DBButton icon="x_placeholder" variant="ghost" noText>Help</DBButton>
					</DBControlPanelSecondaryActions>
				</template>
				*/}
		</DBControlPanelDesktop>

		<DBShellContent mainLabel="Main">Content</DBShellContent>
	</DBShell>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Profile');
		await expect(component).toContainText('Notification');
		await expect(component).toContainText('Help');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-control-panel-secondary-actions')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBControlPanelSecondaryActions', () => {
	test.use({ viewport: DESKTOP_VIEWPORT });
	testComponent();
	testA11y();
});
