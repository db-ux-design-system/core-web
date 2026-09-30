import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBShellContent } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelDesktop } from '../control-panel-desktop';
import { DBControlPanelNavigation } from '../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBShell } from '../shell';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell controlPanelDesktopPosition="top">
		<DBControlPanelDesktop
			orientation="horizontal"
			brand={<DBControlPanelBrand data-logo="db-systel" />}>
			{/*<template v-slot:brand>
				<DBControlPanelBrand data-logo="db-systel" />
			</template>*/}
			<DBControlPanelNavigation aria-label="Navigation">
				<DBControlPanelNavigationItem icon="x_placeholder">
					<a href="#">Item</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelDesktop>
		<DBShellContent mainLabel="Main Content">
			<p>Page content goes here</p>
		</DBShellContent>
	</DBShell>
);

const compFixed: any = (
	<DBShell controlPanelDesktopPosition="top">
		<DBControlPanelDesktop
			orientation="horizontal"
			brand={<DBControlPanelBrand data-logo="db-systel" />}>
			{/*<template v-slot:brand>
				<DBControlPanelBrand data-logo="db-systel" />
			</template>*/}
			<DBControlPanelNavigation aria-label="Navigation">
				<DBControlPanelNavigationItem icon="x_placeholder">
					<a href="#">Item</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelDesktop>
		<DBShellContent variant="fixed" mainLabel="Fixed Content">
			<p>Fixed scrolling content</p>
		</DBShellContent>
	</DBShell>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Page content goes here');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});

	test('should match screenshot with fixed variant', async ({ mount }) => {
		const component = await mount(compFixed);
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
			.include('.db-shell-content')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBShellContent', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
