import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelMobile } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBButton } from '../button';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelMeta } from '../control-panel-meta';
import { DBControlPanelNavigation } from '../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBControlPanelPrimaryActions } from '../control-panel-primary-actions';
import { DBControlPanelSecondaryActions } from '../control-panel-secondary-actions';
import { DBShell } from '../shell';
import { DBShellContent } from '../shell-content';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell>
		<DBControlPanelMobile
			position="top"
			drawerHeaderText="DBControlPanel"
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
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Notification
					</DBButton>
				</DBControlPanelSecondaryActions>
			}
			metaNavigation={
				<DBControlPanelMeta>
					<a href="#">Imprint</a>
					<a href="#">Help</a>
				</DBControlPanelMeta>
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
					<DBButton icon="x_placeholder" variant="ghost" noText>Notification</DBButton>
				</DBControlPanelSecondaryActions>
			</template>*/}
			{/*<template v-slot:meta-navigation>
				<DBControlPanelMeta>
					<a href="#">Imprint</a>
					<a href="#">Help</a>
				</DBControlPanelMeta>
			</template>*/}
			<DBControlPanelNavigation aria-label="Mobile Navigation">
				<DBControlPanelNavigationItem icon="x_placeholder">
					<a href="#">Home</a>
				</DBControlPanelNavigationItem>
				<DBControlPanelNavigationItem icon="x_placeholder" disabled>
					<a href="#">Disabled</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelMobile>

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
			.include('.db-control-panel-mobile')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testDrawerInteraction = () => {
	test('clicking burger button should open the drawer', async ({
		mount,
		page
	}) => {
		await mount(comp);
		const burgerButton = page.locator('.db-control-panel-mobile-button');
		const dialog = page.locator('dialog');
		await expect(dialog).not.toHaveAttribute('open');
		await burgerButton.click();
		await expect(dialog).toHaveAttribute('open');
	});

	test('drawer should have accessible name from drawerHeaderText', async ({
		mount,
		page
	}) => {
		await mount(comp);
		const burgerButton = page.locator('.db-control-panel-mobile-button');
		await burgerButton.click();
		const dialog = page.locator('dialog');
		await expect(dialog).toHaveAttribute('aria-labelledby');
	});

	test('pressing Escape should close the drawer', async ({ mount, page }) => {
		await mount(comp);
		const burgerButton = page.locator('.db-control-panel-mobile-button');
		const dialog = page.locator('dialog');
		await burgerButton.click();
		await expect(dialog).toHaveAttribute('open');
		await page.keyboard.press('Escape');
		await expect(dialog).not.toHaveAttribute('open');
	});

	test('clicking a navigation item should close the drawer', async ({
		mount,
		page
	}) => {
		await mount(comp);
		const burgerButton = page.locator('.db-control-panel-mobile-button');
		const dialog = page.locator('dialog');
		await burgerButton.click();
		await expect(dialog).toHaveAttribute('open');
		// Click on the "Home" nav item link inside the drawer
		const navLink = page.locator(
			'dialog .db-control-panel-navigation-item a'
		);
		await navLink.first().click();
		await expect(dialog).not.toHaveAttribute('open');
	});
};

test.describe('DBControlPanelMobile', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testDrawerInteraction();
});
