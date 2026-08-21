import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelPrimaryActions } from './index';
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
			primaryActions={
				<DBControlPanelPrimaryActions>
					<DBButton icon="magnifying_glass" variant="ghost" noText>
						Search
					</DBButton>
				</DBControlPanelPrimaryActions>
			}>
			{/*
				<template v-slot:brand>
					<DBControlPanelBrand data-logo="db-systel" />
				</template>
				<template v-slot:primary-actions>
					<DBControlPanelPrimaryActions>
						<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>
					</DBControlPanelPrimaryActions>
				</template>
				*/}
		</DBControlPanelDesktop>

		<DBShellContent mainLabel="Main">Content</DBShellContent>
	</DBShell>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Search');
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
			.include('.db-control-panel-primary-actions')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBControlPanelPrimaryActions', () => {
	test.use({ viewport: DESKTOP_VIEWPORT });
	testComponent();
	testA11y();
});
