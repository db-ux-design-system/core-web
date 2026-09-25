import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBShell } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT, TESTING_VIEWPORTS } from '../../shared/constants.ts';
import { DBButton } from '../button';
import {
	DBControlPanelActions1,
	DBControlPanelActions2
} from '../control-panel-actions';
import { DBControlPanelBrand } from '../control-panel-brand';
import { DBControlPanelDesktop } from '../control-panel-desktop';
import { DBControlPanelMeta } from '../control-panel-meta';
import { DBControlPanelMobile } from '../control-panel-mobile';
import { DBControlPanelNavigation } from '../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../control-panel-navigation-item';
import { DBControlPanelSkipNavigation } from '../control-panel-skip-navigation';
import { DBFooter } from '../footer';
import { DBFooterMeta } from '../footer-meta';
import { DBShellContent } from '../shell-content';

// template v-slot is used for vue component tests
const comp: any = (
	<DBShell controlPanelDesktopPosition="top">
		<DBControlPanelDesktop
			brand={<DBControlPanelBrand data-logo="db-systel" />}
			meta={
				<DBControlPanelMeta>
					<a href="#">Imprint</a>
					<a href="#">Help</a>
				</DBControlPanelMeta>
			}
			actions1={
				<DBControlPanelActions1>
					<DBButton icon="magnifying_glass" variant="ghost" noText>
						Search
					</DBButton>
				</DBControlPanelActions1>
			}
			actions2={
				<DBControlPanelActions2>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Profile
					</DBButton>
				</DBControlPanelActions2>
			}>
			{/*<template v-slot:brand>
				<DBControlPanelBrand data-logo="db-systel" />
			</template>*/}
			{/*<template v-slot:meta>
				<DBControlPanelMeta>
					<a href="#">Imprint</a>
					<a href="#">Help</a>
				</DBControlPanelMeta>
			</template>*/}
			{/*<template v-slot:actions-1>
				<DBControlPanelActions1>
					<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>
				</DBControlPanelActions1>
			</template>*/}
			{/*<template v-slot:actions-2>
				<DBControlPanelActions2>
					<DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton>
				</DBControlPanelActions2>
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
			actions1={
				<DBControlPanelActions1>
					<DBButton icon="magnifying_glass" variant="ghost" noText>
						Search
					</DBButton>
				</DBControlPanelActions1>
			}
			actions2={
				<DBControlPanelActions2>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Profile
					</DBButton>
				</DBControlPanelActions2>
			}>
			{/*<template v-slot:brand>
				<DBControlPanelBrand data-logo="db-systel" />
			</template>*/}
			{/*<template v-slot:actions-1>
				<DBControlPanelActions1>
					<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>
				</DBControlPanelActions1>
			</template>*/}
			{/*<template v-slot:actions-2>
				<DBControlPanelActions2>
					<DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton>
				</DBControlPanelActions2>
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
	<DBShell>
		<DBControlPanelDesktop
			skipNavigation={
				<DBControlPanelSkipNavigation text="Skip to content" />
			}
			brand={<DBControlPanelBrand data-logo="db-systel" />}>
			{/*<template v-slot:brand>
				<DBControlPanelBrand data-logo="db-systel" />
			</template>*/}
			{/*<template v-slot:skip-navigation>
				<DBControlPanelSkipNavigation text="Skip to content" />
			</template>*/}
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
		const skipLink = page.locator('.db-control-panel-skip-navigation a');
		await expect(skipLink).toBeAttached();
		await skipLink.focus();
		await expect(skipLink).toBeVisible();
	});

	test('skip-link should target #main-content', async ({ page, mount }) => {
		await page.setViewportSize({ width: 1920, height: 1280 });
		await mount(skipLinkComp);
		const skipLink = page.locator('.db-control-panel-skip-navigation a');
		await expect(skipLink).toHaveAttribute('href', '#main-content');
	});
};

const footerComp: any = (
	<DBShell>
		<DBControlPanelMobile
			drawerHeaderText="Footer Test"
			brand={<DBControlPanelBrand data-logo="db-systel" />}>
			{/*<template v-slot:brand>
				<DBControlPanelBrand data-logo="db-systel" />
			</template>*/}
			<DBControlPanelNavigation aria-label="Footer Test Navigation">
				<DBControlPanelNavigationItem icon="x_placeholder">
					<a href="#">Item</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelMobile>
		<DBShellContent
			mainLabel="Footer Test Content"
			endSlot={
				<DBFooter>
					<DBFooterMeta copyright="Example Company" />
				</DBFooter>
			}>
			{/*<template v-slot:end-slot>
				<DBFooter>
					<DBFooterMeta copyright="Example Company" />
				</DBFooter>
			</template>*/}
			Shell content
		</DBShellContent>
	</DBShell>
);

// The unsupported composition from the issue: the footer is not a child of
// DBShellContent but of DBShell, which has no grid area for it.
const strayFooterComp: any = (
	<DBShell>
		<DBControlPanelMobile
			drawerHeaderText="Stray Footer Test"
			brand={<DBControlPanelBrand data-logo="db-systel" />}>
			{/*<template v-slot:brand>
				<DBControlPanelBrand data-logo="db-systel" />
			</template>*/}
			<DBControlPanelNavigation aria-label="Stray Footer Test Navigation">
				<DBControlPanelNavigationItem icon="x_placeholder">
					<a href="#">Item</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</DBControlPanelMobile>
		<DBShellContent mainLabel="Stray Footer Test Content">
			Shell content
		</DBShellContent>
		<DBFooter>
			<DBFooterMeta copyright="Example Company" />
		</DBFooter>
	</DBShell>
);

/*
 * The shell grid has no footer area, so a footer belongs in the `endSlot` of
 * DBShellContent. On mobile the grid must not reserve a row for a sub-navigation
 * that is not there either, because the empty row would capture any unplaced
 * child and render it between the control panel and the content.
 * See https://github.com/db-ux-design-system/core-web/issues/8230
 */
const testFooter = () => {
	test('footer in endSlot should be placed below the main content', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DEFAULT_VIEWPORT);
		const component = await mount(footerComp);
		const mainBox = await component.locator('.db-main').boundingBox();
		const footerBox = await component.locator('.db-footer').boundingBox();

		expect(mainBox).not.toBeNull();
		expect(footerBox).not.toBeNull();
		expect(footerBox!.y).toBeGreaterThanOrEqual(
			mainBox!.y + mainBox!.height
		);
	});

	test('unplaced child should not be rendered above the content on mobile', async ({
		mount,
		page
	}) => {
		await page.setViewportSize(DEFAULT_VIEWPORT);
		const component = await mount(strayFooterComp);
		const contentBox = await component
			.locator('.db-shell-content')
			.boundingBox();
		const footerBox = await component.locator('.db-footer').boundingBox();

		expect(contentBox).not.toBeNull();
		expect(footerBox).not.toBeNull();
		expect(footerBox!.y).toBeGreaterThanOrEqual(
			contentBox!.y + contentBox!.height
		);
	});
};

test.describe('DBShell', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		testComponent(viewport);
	});
	testA11y();
	testSkipLink();
	testFooter();
});
