import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBShellSubNavigation } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelDesktop } from '../control-panel-desktop';
import { DBControlPanelNavigation } from '../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBShell } from '../shell';
import { DBShellContent } from '../shell-content';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell
		controlPanelDesktopPosition="top"
		subNavigationDesktopPosition="top"
		showSubNavigation={true}
		controlPanelDesktop={
			<DBControlPanelDesktop
				orientation="horizontal"
				brand={<DBControlPanelBrand data-logo="db-systel" />}>
				{/*<template v-slot:brand>
					<DBControlPanelBrand data-logo="db-systel" />
				</template>*/}
				<DBControlPanelNavigation aria-label="Main Navigation">
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Item 1</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Item 2</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelDesktop>
		}
		subNavigation={
			<DBShellSubNavigation>
				<DBControlPanelNavigation aria-label="Sub Navigation">
					<DBControlPanelNavigationItem>
						<a href="#" aria-current="page">
							Sub-Item 1
						</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem>
						<a href="#">Sub-Item 2</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem>
						<a href="#">Sub-Item 3</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBShellSubNavigation>
		}>
		{/*<template v-slot:control-panel-desktop>
			<DBControlPanelDesktop orientation="horizontal">
				<template v-slot:brand>
					<DBControlPanelBrand data-logo="db-systel" />
				</template>
				<DBControlPanelNavigation aria-label="Main Navigation">
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Item 1</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Item 2</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelDesktop>
		</template>*/}
		{/*<template v-slot:sub-navigation>
			<DBShellSubNavigation>
				<DBControlPanelNavigation aria-label="Sub Navigation">
					<DBControlPanelNavigationItem>
						<a href="#" aria-current="page">Sub-Item 1</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem>
						<a href="#">Sub-Item 2</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem>
						<a href="#">Sub-Item 3</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBShellSubNavigation>
		</template>*/}
		<DBShellContent mainLabel="Main">Content</DBShellContent>
	</DBShell>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Sub-Item 1');
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
			.include('.db-shell-sub-navigation')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBShellSubNavigation', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
