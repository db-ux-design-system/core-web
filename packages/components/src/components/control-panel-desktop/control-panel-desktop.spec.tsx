import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelDesktop } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS } from '../../shared/constants.ts';
import { DBButton } from '../button';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelNavigation } from '../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBControlPanelPrimaryActions } from '../control-panel-primary-actions';
import { DBControlPanelSecondaryActions } from '../control-panel-secondary-actions';
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
			}
			secondaryActions={
				<DBControlPanelSecondaryActions>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Profile
					</DBButton>
				</DBControlPanelSecondaryActions>
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
				<template v-slot:secondary-actions>
					<DBControlPanelSecondaryActions>
						<DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton>
					</DBControlPanelSecondaryActions>
				</template>
		*/}
			<DBControlPanelNavigation aria-label="Main Navigation">
				<DBControlPanelNavigationItem icon="x_placeholder">
					<a href="#">Home</a>
				</DBControlPanelNavigationItem>
				<DBControlPanelNavigationItem icon="x_placeholder" disabled>
					<a href="#">Disabled</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelDesktop>

		<DBShellContent mainLabel="Main">Content</DBShellContent>
	</DBShell>
);

// Vertical sidebar fixture for expand/collapse testing
const verticalComp: any = (
	<DBShell controlPanelDesktopPosition="left">
		<DBControlPanelDesktop
			brand={<DBControlPanelBrand data-logo="db-systel" />}>
			<DBControlPanelNavigation aria-label="Main Navigation">
				<DBControlPanelNavigationItem icon="x_placeholder">
					<a href="#">Home</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelDesktop>
		<DBShellContent mainLabel="Main">Content</DBShellContent>
	</DBShell>
);

const testComponent = (viewport: any) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: viewport.width,
			height: viewport.height
		});
		const component = await mount(comp);
		await expect(component).toContainText('Home');
	});

	test(`should match screenshot for device ${viewport.name}`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: viewport.width,
			height: viewport.height
		});
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
	test('should not have any A11y issues on desktop', async ({
		page,
		mount
	}) => {
		await page.setViewportSize({ width: 1920, height: 1280 });
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-control-panel-desktop')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testExpandCollapse = () => {
	test('should have a collapse/expand toggle button in vertical mode', async ({
		page,
		mount
	}) => {
		await page.setViewportSize({ width: 1920, height: 1280 });
		await mount(verticalComp);
		const toggleButton = page.locator(
			'.db-control-panel-desktop-toggle-button'
		);
		await expect(toggleButton).toBeVisible();
		await expect(toggleButton).toHaveAttribute('aria-expanded');
	});
};

test.describe('DBControlPanelDesktop', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		testComponent(viewport);
	});
	testA11y();
	testExpandCollapse();
});
