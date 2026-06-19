import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBShell } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS } from '../../shared/constants.ts';
import { DBButton } from '../button';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelDesktop } from '../control-panel-desktop';
import { DBControlPanelMetaNavigation } from '../control-panel-meta-navigation';
import { DBControlPanelMobile } from '../control-panel-mobile';
import { DBControlPanelNavigation } from '../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBControlPanelPrimaryActions } from '../control-panel-primary-actions';
import { DBControlPanelSecondaryActions } from '../control-panel-secondary-actions';
import { DBShellContent } from '../shell-content';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell
		controlPanelDesktopPosition="top"
		controlPanelDesktop={
			<DBControlPanelDesktop
				brand={<DBControlPanelBrand data-logo="db-systel" />}
				metaNavigation={
					<DBControlPanelMetaNavigation>
						<a href="#">Imprint</a>
						<a href="#">Help</a>
					</DBControlPanelMetaNavigation>
				}
				primaryActions={
					<DBControlPanelPrimaryActions>
						<DBButton
							icon="magnifying_glass"
							variant="ghost"
							noText>
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
				{/*<template v-slot:metaNavigation>
					<DBControlPanelMetaNavigation>
						<a href="#">Imprint</a>
						<a href="#">Help</a>
					</DBControlPanelMetaNavigation>
				</template>*/}
				{/*<template v-slot:primaryActions>
					<DBControlPanelPrimaryActions>
						<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>
					</DBControlPanelPrimaryActions>
				</template>*/}
				{/*<template v-slot:secondaryActions>
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
		}
		controlPanelMobile={
			<DBControlPanelMobile
				drawerHeaderText="Shell Test"
				brand={<DBControlPanelBrand data-logo="db-systel" />}
				primaryActions={
					<DBControlPanelPrimaryActions>
						<DBButton
							icon="magnifying_glass"
							variant="ghost"
							noText>
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
				{/*<template v-slot:primaryActions>
					<DBControlPanelPrimaryActions>
						<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>
					</DBControlPanelPrimaryActions>
				</template>*/}
				{/*<template v-slot:secondaryActions>
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
		}>
		{/*<template v-slot:controlPanelDesktop>
			<DBControlPanelDesktop>
				<template v-slot:brand>
					<DBControlPanelBrand data-logo="db-systel" />
				</template>
				<template v-slot:metaNavigation>
					<DBControlPanelMetaNavigation>
						<a href="#">Imprint</a>
						<a href="#">Help</a>
					</DBControlPanelMetaNavigation>
				</template>
				<template v-slot:primaryActions>
					<DBControlPanelPrimaryActions>
						<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>
					</DBControlPanelPrimaryActions>
				</template>
				<template v-slot:secondaryActions>
					<DBControlPanelSecondaryActions>
						<DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton>
					</DBControlPanelSecondaryActions>
				</template>
				<DBControlPanelNavigation aria-label="Main Navigation">
					<DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item">
						<a href="#">Item</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem disabled icon="x_placeholder" tooltip="Disabled">
						<a href="#">Disabled</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelDesktop>
		</template>*/}
		{/*<template v-slot:controlPanelMobile>
			<DBControlPanelMobile drawerHeaderText="Shell Test">
				<template v-slot:brand>
					<DBControlPanelBrand data-logo="db-systel" />
				</template>
				<template v-slot:primaryActions>
					<DBControlPanelPrimaryActions>
						<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>
					</DBControlPanelPrimaryActions>
				</template>
				<template v-slot:secondaryActions>
					<DBControlPanelSecondaryActions>
						<DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton>
					</DBControlPanelSecondaryActions>
				</template>
				<DBControlPanelNavigation aria-label="Mobile Navigation">
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Item</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelMobile>
		</template>*/}
		<DBShellContent mainLabel="Main Content">Shell content</DBShellContent>
	</DBShell>
);

const testComponent = (viewport: any) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount
	}) => {
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
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-shell')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBShell', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		test.use({ viewport });
		testComponent(viewport);
		if (viewport.name === 'mobile') {
			testA11y();
		}
	});
});
