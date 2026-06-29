import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBShell } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS } from '../../shared/constants.ts';
import { DBButton } from '../button';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelDesktop } from '../control-panel-desktop';
import { DBControlPanelMeta } from '../control-panel-meta';
import { DBControlPanelMobile } from '../control-panel-mobile';
import { DBControlPanelNavigation } from '../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBControlPanelPrimaryActions } from '../control-panel-primary-actions';
import { DBControlPanelSecondaryActions } from '../control-panel-secondary-actions';
import { DBShellContent } from '../shell-content';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell controlPanelDesktopPosition="top">
		<DBControlPanelDesktop
			brand={<DBControlPanelBrand data-logo="db-systel" />}
			metaNavigation={
				<DBControlPanelMeta>
					<a href="#">Imprint</a>
					<a href="#">Help</a>
				</DBControlPanelMeta>
			}
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
			{/*<template v-slot:brand>
				<DBControlPanelBrand data-logo="db-systel" />
			</template>*/}
			{/*<template v-slot:meta-navigation>
				<DBControlPanelMeta>
					<a href="#">Imprint</a>
					<a href="#">Help</a>
				</DBControlPanelMeta>
			</template>*/}
			{/*<template v-slot:primary-actions>
				<DBControlPanelPrimaryActions>
					<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>
				</DBControlPanelPrimaryActions>
			</template>*/}
			{/*<template v-slot:secondary-actions>
				<DBControlPanelSecondaryActions>
					<DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton>
				</DBControlPanelSecondaryActions>
			</template>*/}
			<DBControlPanelNavigation aria-label="Main Navigation">
				<DBControlPanelNavigationItem
					icon="x_placeholder"
					tooltip="Item">
					<a href="#">Item</a>
				</DBControlPanelNavigationItem>
				<DBControlPanelNavigationItem
					disabled
					icon="x_placeholder"
					tooltip="Disabled">
					<a href="#">Disabled</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelDesktop>
		<DBControlPanelMobile
			drawerHeaderText="Shell Test"
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
			{/*<template v-slot:brand>
				<DBControlPanelBrand data-logo="db-systel" />
			</template>*/}
			{/*<template v-slot:primary-actions>
				<DBControlPanelPrimaryActions>
					<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>
				</DBControlPanelPrimaryActions>
			</template>*/}
			{/*<template v-slot:secondary-actions>
				<DBControlPanelSecondaryActions>
					<DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton>
				</DBControlPanelSecondaryActions>
			</template>*/}
			<DBControlPanelNavigation aria-label="Mobile Navigation">
				<DBControlPanelNavigationItem icon="x_placeholder">
					<a href="#">Item</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelMobile>
		<DBShellContent mainLabel="Main Content">Shell content</DBShellContent>
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
		await expect(component).toContainText('Shell content');
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
	test('should not have any A11y issues on mobile', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-shell')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
	test('should not have any A11y issues on desktop', async ({
		page,
		mount
	}) => {
		await page.setViewportSize({ width: 1920, height: 1280 });
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-shell')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const skipLinkComp: any = (
	<DBShell skipNavigationLinkText="Skip to content">
		<DBControlPanelDesktop
			brand={<DBControlPanelBrand data-logo="db-systel" />}>
			<DBControlPanelNavigation aria-label="Navigation">
				<DBControlPanelNavigationItem>
					<a href="#">Item</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelDesktop>
		<DBShellContent mainLabel="Main">Content</DBShellContent>
	</DBShell>
);

const testSkipLink = () => {
	test('skip-link should become visible on focus', async ({
		page,
		mount
	}) => {
		await page.setViewportSize({ width: 1920, height: 1280 });
		await mount(skipLinkComp);
		const skipLink = page.locator(
			'.db-shell-skip-navigation-link-container a'
		);
		await expect(skipLink).toBeAttached();
		await skipLink.focus();
		await expect(skipLink).toBeVisible();
	});

	test('skip-link should target #main-content', async ({ page, mount }) => {
		await page.setViewportSize({ width: 1920, height: 1280 });
		await mount(skipLinkComp);
		const skipLink = page.locator(
			'.db-shell-skip-navigation-link-container a'
		);
		await expect(skipLink).toHaveAttribute('href', '#main-content');
	});
};

test.describe('DBShell', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		testComponent(viewport);
	});
	testA11y();
	testSkipLink();
});
