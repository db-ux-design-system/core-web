import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBControlPanelFlatIcon } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBControlPanelNavigation } from '../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBShell } from '../shell';
import { DBShellContent } from '../shell-content';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell
		controlPanelDesktop={
			<DBControlPanelFlatIcon>
				<DBControlPanelNavigation aria-label="Flat Icon Navigation Desktop">
					<DBControlPanelNavigationItem icon="house">
						<a href="#">Home</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="magnifying_glass">
						<a href="#">Search</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="eye">
						<a href="#">Account</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelFlatIcon>
		}
		controlPanelMobile={
			<DBControlPanelFlatIcon>
				<DBControlPanelNavigation aria-label="Flat Icon Navigation">
					<DBControlPanelNavigationItem icon="house">
						<a href="#">Home</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="magnifying_glass">
						<a href="#">Search</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="eye">
						<a href="#">Account</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelFlatIcon>
		}>
		{/*<template v-slot:controlPanelDesktop>
			<DBControlPanelFlatIcon>
				<DBControlPanelNavigation aria-label="Flat Icon Navigation Desktop">
					<DBControlPanelNavigationItem icon="house">
						<a href="#">Home</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="magnifying_glass">
						<a href="#">Search</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="eye">
						<a href="#">Account</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelFlatIcon>
		</template>*/}
		{/*<template v-slot:controlPanelMobile>
			<DBControlPanelFlatIcon>
				<DBControlPanelNavigation aria-label="Flat Icon Navigation">
					<DBControlPanelNavigationItem icon="house">
						<a href="#">Home</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="magnifying_glass">
						<a href="#">Search</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="eye">
						<a href="#">Account</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelFlatIcon>
		</template>*/}
		<DBShellContent mainLabel="Main">Content</DBShellContent>
	</DBShell>
);

const compNoText: any = (
	<DBShell
		controlPanelDesktop={
			<DBControlPanelFlatIcon noText>
				<DBControlPanelNavigation aria-label="Flat Icon No Text Desktop">
					<DBControlPanelNavigationItem icon="house">
						<a href="#">Home</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="magnifying_glass">
						<a href="#">Search</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelFlatIcon>
		}
		controlPanelMobile={
			<DBControlPanelFlatIcon noText>
				<DBControlPanelNavigation aria-label="Flat Icon No Text">
					<DBControlPanelNavigationItem icon="house">
						<a href="#">Home</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="magnifying_glass">
						<a href="#">Search</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelFlatIcon>
		}>
		{/*<template v-slot:controlPanelDesktop>
			<DBControlPanelFlatIcon noText>
				<DBControlPanelNavigation aria-label="Flat Icon No Text Desktop">
					<DBControlPanelNavigationItem icon="house">
						<a href="#">Home</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="magnifying_glass">
						<a href="#">Search</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelFlatIcon>
		</template>*/}
		{/*<template v-slot:controlPanelMobile>
			<DBControlPanelFlatIcon noText>
				<DBControlPanelNavigation aria-label="Flat Icon No Text">
					<DBControlPanelNavigationItem icon="house">
						<a href="#">Home</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="magnifying_glass">
						<a href="#">Search</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelFlatIcon>
		</template>*/}
		<DBShellContent mainLabel="Main">Content</DBShellContent>
	</DBShell>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Home');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});

	test('should match screenshot with noText', async ({ mount }) => {
		const component = await mount(compNoText);
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
			.include('.db-control-panel-flat-icon')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBControlPanelFlatIcon', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
