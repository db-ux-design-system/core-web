import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelMetaNavigation } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DESKTOP_VIEWPORT } from '../../shared/constants.ts';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelDesktop } from '../control-panel-desktop';
import { DBShell } from '../shell';
import { DBShellContent } from '../shell-content';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell
		controlPanelDesktopPosition="top"
		controlPanelDesktop={
			<DBControlPanelDesktop
				orientation="horizontal"
				brand={<DBControlPanelBrand data-logo="db-systel" />}
				metaNavigation={
					<DBControlPanelMetaNavigation>
						<a href="#">Imprint</a>
						<a href="#">Help</a>
					</DBControlPanelMetaNavigation>
				}
			/>
		}>
		{/*<template v-slot:control-panel-desktop>
			<DBControlPanelDesktop orientation="horizontal">
				<template v-slot:brand>
					<DBControlPanelBrand data-logo="db-systel" />
				</template>
				<template v-slot:meta-navigation>
					<DBControlPanelMetaNavigation>
						<a href="#">Imprint</a>
						<a href="#">Help</a>
					</DBControlPanelMetaNavigation>
				</template>
			</DBControlPanelDesktop>
		</template>*/}
		<DBShellContent mainLabel="Main">Content</DBShellContent>
	</DBShell>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Imprint');
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
			.include('.db-control-panel-meta-navigation')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBControlPanelMetaNavigation', () => {
	test.use({ viewport: DESKTOP_VIEWPORT });
	testComponent();
	testA11y();
});
