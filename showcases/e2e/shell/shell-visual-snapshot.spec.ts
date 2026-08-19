import { expect, test, type Page } from '@playwright/test';
import {
	getDefaultScreenshotTest,
	isStencil,
	waitForDBShell
} from '../default.ts';

const path = '05/shell';

type ShellSettings = {
	controlPanelDesktopPosition: 'top' | 'left';
	controlPanelMobilePosition: 'bottom' | 'top';
	navigationDesktopVariant: 'tree' | 'popover' | 'drilldown';
	navigationMobileVariant: 'tree' | 'drilldown';
	subNavigation: 'true' | 'false';
	subNavigationDesktopPosition: 'top' | 'left';
	subNavigationMobilePosition: 'top' | 'bottom' | 'none';
	subNavigationVariant: 'tree' | 'popover' | 'drilldown';
};

const buildSettingsUrl = (settings: ShellSettings): string => {
	const encoded = encodeURIComponent(JSON.stringify(settings));
	return `./#/?shell=true&density=regular&color=neutral-bg-basic-level-1&settings=${encoded}`;
};

/**
 * Navigate to the shell with specific settings, wait for it to load,
 * expand the first navigation group, and take a screenshot.
 */
const getNavigationScreenshotTest = ({
	testName,
	settings,
	isMobile,
	collapseDesktopPanel,
	collapseSubNavigation,
	expandSubNavigation
}: {
	testName: string;
	settings: ShellSettings;
	isMobile?: boolean;
	collapseDesktopPanel?: boolean;
	collapseSubNavigation?: boolean;
	expandSubNavigation?: boolean;
}) => {
	test(testName, async ({ page }, { project }) => {
		// Skip stencil - settings are not supported
		if (isStencil(process.env.showcase)) {
			test.skip();
		}

		// Skip based on viewport type
		const isProjectMobile = project.name.startsWith('mobile');
		if (isMobile && !isProjectMobile) {
			test.skip();
		}

		if (!isMobile && isProjectMobile) {
			test.skip();
		}

		await page.goto(buildSettingsUrl(settings), {
			waitUntil: 'domcontentloaded'
		});
		// eslint-disable-next-line unicorn/isolated-functions -- document is available in browser context
		await page.evaluate(async () => document.fonts.ready);
		await waitForDBShell(page);

		// Collapse the desktop panel if requested
		if (collapseDesktopPanel) {
			const collapseButton = page.locator(
				'.db-control-panel-desktop-button > .db-button'
			);
			await collapseButton.click();
			await page.waitForTimeout(500);
		}

		// Collapse the sub-navigation panel if requested
		if (collapseSubNavigation) {
			const collapseButton = page.locator(
				'.db-shell-sub-navigation-button > button'
			);
			await collapseButton.click();
			await page.waitForTimeout(500);
		}

		// Expand navigation or sub-navigation
		// Skip expansion when sub-navigation is collapsed (items not visible)
		if (!collapseSubNavigation && !collapseDesktopPanel) {
			if (expandSubNavigation) {
				await expandFirstSubNavigationGroup(page, isMobile);
			} else {
				await expandFirstNavigationGroup(page, isMobile);
			}
		}

		await expect(page).toHaveScreenshot({
			maxDiffPixelRatio: 0.02
		});
	});
};

/**
 * Click the first navigation item group expand button in the
 * main navigation to open the sub-menu for visual testing.
 */
const expandFirstNavigationGroup = async (
	page: Page,
	isMobile?: boolean
): Promise<void> => {
	if (isMobile) {
		// Open the mobile drawer first
		const burgerButton = page.locator(
			'.db-control-panel-mobile > .db-button'
		);
		await burgerButton.click();
		// Wait for the drawer open animation
		await page.waitForTimeout(1000);

		// The drawer is a top-layer <dialog>, target it directly
		const expandButton = page
			.locator(
				'dialog .db-control-panel-navigation-item-group-expand-button'
			)
			.first();
		if ((await expandButton.count()) > 0) {
			await expandButton.click();
			await page.waitForTimeout(300);
		}

		return;
	}

	const expandButton = page
		.locator(
			'.db-control-panel-desktop .db-control-panel-navigation-item-group-expand-button'
		)
		.first();

	if ((await expandButton.count()) > 0) {
		await expandButton.click();
		await page.waitForTimeout(300);
	}
};

/**
 * Click the first navigation item group expand button in the
 * sub-navigation to open the sub-menu for visual testing.
 */
const expandFirstSubNavigationGroup = async (
	page: Page,
	isMobile?: boolean
): Promise<void> => {
	if (isMobile) {
		// Open the mobile drawer first
		const burgerButton = page.locator(
			'.db-control-panel-mobile > .db-button'
		);
		await burgerButton.click();
		// Wait for the drawer open animation
		await page.waitForTimeout(1000);

		// Sub-navigation items are inside the drawer dialog on mobile
		const expandButton = page
			.locator(
				'dialog .db-shell-sub-navigation .db-control-panel-navigation-item-group-expand-button'
			)
			.first();
		if ((await expandButton.count()) > 0) {
			await expandButton.click();
			await page.waitForTimeout(300);
		}

		return;
	}

	const expandButton = page
		.locator(
			'.db-shell-sub-navigation .db-control-panel-navigation-item-group-expand-button'
		)
		.first();

	if ((await expandButton.count()) > 0) {
		await expandButton.click();
		await page.waitForTimeout(300);
	}
};

test.describe('DBShell', () => {
	getDefaultScreenshotTest({ path });

	test.describe('Desktop - Top', () => {
		getNavigationScreenshotTest({
			testName: 'Navigation Popover',
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'top',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'false',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'tree'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Sub-Navigation Top Popover',
			expandSubNavigation: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'top',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'true',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'popover'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Sub-Navigation Left Collapse',
			expandSubNavigation: true,
			collapseSubNavigation: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'top',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'true',
				subNavigationDesktopPosition: 'left',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'drilldown'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Sub-Navigation Left Drilldown',
			expandSubNavigation: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'top',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'true',
				subNavigationDesktopPosition: 'left',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'drilldown'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Sub-Navigation Left Tree',
			expandSubNavigation: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'top',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'true',
				subNavigationDesktopPosition: 'left',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'tree'
			}
		});
	});

	test.describe('Desktop - Left', () => {
		getNavigationScreenshotTest({
			testName: 'Navigation Drilldown',
			settings: {
				controlPanelDesktopPosition: 'left',
				controlPanelMobilePosition: 'bottom',
				navigationDesktopVariant: 'drilldown',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'false',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'tree'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Navigation Tree',
			settings: {
				controlPanelDesktopPosition: 'left',
				controlPanelMobilePosition: 'bottom',
				navigationDesktopVariant: 'tree',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'false',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'tree'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Navigation Left Collapse',
			settings: {
				controlPanelDesktopPosition: 'left',
				controlPanelMobilePosition: 'bottom',
				navigationDesktopVariant: 'drilldown',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'false',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'tree'
			},
			collapseDesktopPanel: true
		});

		getNavigationScreenshotTest({
			testName: 'Sub-Navigation Top Popover',
			expandSubNavigation: true,
			settings: {
				controlPanelDesktopPosition: 'left',
				controlPanelMobilePosition: 'bottom',
				navigationDesktopVariant: 'tree',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'true',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'popover'
			}
		});
	});

	test.describe('Mobile - Top', () => {
		getNavigationScreenshotTest({
			testName: 'Navigation Drilldown',
			isMobile: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'top',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'false',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'tree'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Navigation Tree',
			isMobile: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'top',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'tree',
				subNavigation: 'false',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'tree'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Sub-Navigation Top',
			isMobile: true,
			expandSubNavigation: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'top',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'true',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'top',
				subNavigationVariant: 'tree'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Sub-Navigation Bottom',
			isMobile: true,
			expandSubNavigation: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'top',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'true',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'bottom',
				subNavigationVariant: 'tree'
			}
		});
	});

	test.describe('Mobile - Bottom', () => {
		getNavigationScreenshotTest({
			testName: 'Navigation Drilldown',
			isMobile: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'bottom',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'false',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'tree'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Navigation Tree',
			isMobile: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'bottom',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'tree',
				subNavigation: 'false',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'none',
				subNavigationVariant: 'tree'
			}
		});

		getNavigationScreenshotTest({
			testName: 'Sub-Navigation Top',
			isMobile: true,
			expandSubNavigation: true,
			settings: {
				controlPanelDesktopPosition: 'top',
				controlPanelMobilePosition: 'bottom',
				navigationDesktopVariant: 'popover',
				navigationMobileVariant: 'drilldown',
				subNavigation: 'true',
				subNavigationDesktopPosition: 'top',
				subNavigationMobilePosition: 'top',
				subNavigationVariant: 'tree'
			}
		});
	});
});
