import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelMobile } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBButton } from '../button';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelMetaNavigation } from '../control-panel-meta-navigation';
import { DBControlPanelNavigation } from '../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBControlPanelPrimaryActions } from '../control-panel-primary-actions';
import { DBControlPanelSecondaryActions } from '../control-panel-secondary-actions';
import { DBShell } from '../shell';
import { DBShellContent } from '../shell-content';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell
		controlPanelMobile={
			<DBControlPanelMobile
				position="top"
				drawerHeaderText="DBControlPanel"
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
						<DBButton icon="x_placeholder" variant="ghost" noText>
							Notification
						</DBButton>
					</DBControlPanelSecondaryActions>
				}
				metaNavigation={
					<DBControlPanelMetaNavigation>
						<a href="#">Imprint</a>
						<a href="#">Help</a>
					</DBControlPanelMetaNavigation>
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
					<DBControlPanelMetaNavigation>
						<a href="#">Imprint</a>
						<a href="#">Help</a>
					</DBControlPanelMetaNavigation>
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
		}>
		{/*<template v-slot:control-panel-mobile>
			<DBControlPanelMobile position="top" drawerHeaderText="DBControlPanel">
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
						<DBButton icon="x_placeholder" variant="ghost" noText>Notification</DBButton>
					</DBControlPanelSecondaryActions>
				</template>
				<template v-slot:meta-navigation>
					<DBControlPanelMetaNavigation>
						<a href="#">Imprint</a>
						<a href="#">Help</a>
					</DBControlPanelMetaNavigation>
				</template>
				<DBControlPanelNavigation aria-label="Mobile Navigation">
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Home</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="x_placeholder" disabled>
						<a href="#">Disabled</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelMobile>
		</template>*/}
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

test.describe('DBControlPanelMobile', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
