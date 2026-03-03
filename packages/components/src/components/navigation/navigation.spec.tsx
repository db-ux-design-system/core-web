import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBNavigation } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DESKTOP_VIEWPORT, TESTING_VIEWPORTS } from '../../shared/constants.ts';
import { DBNavigationItem } from '../navigation-item';

const comp: any = (
	<DBNavigation>
		<DBNavigationItem
			data-testid="test1"
			subNavigation={
				<DBNavigationItem data-testid="sub1">
					<a href="#">Sub1</a>
				</DBNavigationItem>
			}>
			{/*<template v-slot:sub-navigation>
					<DBNavigationItem data-testid="sub1">
					<a href="#">Sub1</a>
				</DBNavigationItem>
			</template>*/}
			Test1
		</DBNavigationItem>
		<DBNavigationItem>
			<a href="#">Test2</a>
		</DBNavigationItem>
		<DBNavigationItem>
			<a href="#">Test3</a>
		</DBNavigationItem>
	</DBNavigation>
);

const compWithSubLevels: any = (
	<DBNavigation>
		<DBNavigationItem
			data-testid="toplevel"
			subNavigation={
				<>
					<DBNavigationItem
						data-testid="sublevel"
						subNavigation={
							<DBNavigationItem>
								<a href="#">Sub-Sub1</a>
							</DBNavigationItem>
						}>
						Sub1
					</DBNavigationItem>
					<DBNavigationItem>
						<a href="#">Sub2</a>
					</DBNavigationItem>
				</>
			}>
			TopLevel
		</DBNavigationItem>
		<DBNavigationItem>
			<a href="#">Other</a>
		</DBNavigationItem>
	</DBNavigation>
);

const testComponent = (viewport: any) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount
	}) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test1');
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
		await expect(component.getByTestId('test1')).toBeVisible();
		await expect(component).toHaveScreenshot();
	});
};
const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-navigation')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testHover = () => {
	test(`should open sub navigation desktop`, async ({ mount, page }) => {
		await page.setViewportSize({
			width: DESKTOP_VIEWPORT.width,
			height: DESKTOP_VIEWPORT.height
		});
		const component = await mount(comp);
		await expect(component.getByTestId('sub1')).toBeHidden();
		await component.getByTestId('test1').getByRole('button').hover();
		await expect(component.getByTestId('sub1')).toBeVisible();
	});
};

const testFocus = () => {
	test(`top-level button should have aria-expanded=true on focus`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: DESKTOP_VIEWPORT.width,
			height: DESKTOP_VIEWPORT.height
		});
		const component = await mount(compWithSubLevels);
		const topButton = component.getByTestId('toplevel').getByRole('button');
		await expect(topButton).toHaveAttribute('aria-expanded', 'false');
		await topButton.focus();
		await expect(topButton).toHaveAttribute('aria-expanded', 'true');
	});

	test(`top-level button should have aria-expanded=false on blur`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: DESKTOP_VIEWPORT.width,
			height: DESKTOP_VIEWPORT.height
		});
		const component = await mount(compWithSubLevels);
		const topButton = component.getByTestId('toplevel').getByRole('button');
		await topButton.focus();
		await expect(topButton).toHaveAttribute('aria-expanded', 'true');
		await topButton.blur();
		await expect(topButton).toHaveAttribute('aria-expanded', 'false');
	});

	test(`first sub-level button should have aria-expanded=true on focus`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: DESKTOP_VIEWPORT.width,
			height: DESKTOP_VIEWPORT.height
		});
		const component = await mount(compWithSubLevels);
		const subButton = component.getByTestId('sublevel').getByRole('button');
		await expect(subButton).toHaveAttribute('aria-expanded', 'false');
		await subButton.focus();
		await expect(subButton).toHaveAttribute('aria-expanded', 'true');
	});

	test(`first sub-level button should have aria-expanded=false on blur`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: DESKTOP_VIEWPORT.width,
			height: DESKTOP_VIEWPORT.height
		});
		const component = await mount(compWithSubLevels);
		const subButton = component.getByTestId('sublevel').getByRole('button');
		await subButton.focus();
		await expect(subButton).toHaveAttribute('aria-expanded', 'true');
		await subButton.blur();
		await expect(subButton).toHaveAttribute('aria-expanded', 'false');
	});
};

const testClick = () => {
	test(`should open sub navigation mobile`, async ({ mount, page }) => {
		const component = await mount(comp);
		const sub = component.getByTestId('sub1');
		await expect(sub).toBeHidden();
		await component.getByTestId('test1').getByRole('button').click();
		await expect(sub).toBeVisible();
		await component.getByText('Back').click();
		await expect(sub).toBeHidden();
	});
};

test.describe('DBNavigation', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		test.use({ viewport });
		testComponent(viewport);
		if (viewport.name === 'desktop') {
			testHover();
			testFocus();
		}
		if (viewport.name === 'mobile') {
			testA11y();
			testClick();
		}
	});
});
