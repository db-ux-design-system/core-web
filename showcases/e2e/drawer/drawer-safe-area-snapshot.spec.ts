import { expect, type Page, test } from '@playwright/test';
import { waitForDBPage } from '../default.ts';
import { lvl1 } from '../fixtures/variants';

const path = '01/drawer';
const density = 'regular';

const safeAreaStyles = `
	.db-drawer-container {
		--db-drawer-safe-area-inset-top: 47px;
		--db-drawer-safe-area-inset-bottom: 34px;
		--db-drawer-safe-area-margin-block-start: 47px;
		--db-drawer-safe-area-margin-block-end: 34px;
	}

	/* Highlight safe area padding in header/footer for visual verification */
	.db-drawer-header,
	.db-drawer-footer {
		background-color: rgba(255, 0, 0, 0.08) !important;
	}
`;

const directions = [
	{ name: 'to-left', buttonIndex: 0 },
	{ name: 'to-right', buttonIndex: 1 },
	{ name: 'up', buttonIndex: 2 },
	{ name: 'down', buttonIndex: 3 }
] as const;

const openDrawerByDirection = async (page: Page, buttonIndex: number) => {
	const buttonTexts = [
		'Open: (Default) To-Left',
		'Open: To-Right',
		'Open: Up',
		'Open: Down'
	];

	await page
		.locator('main')
		.getByRole('button', { name: buttonTexts[buttonIndex] })
		.click();

	// Wait for drawer animation to complete
	await page.waitForTimeout(800);
};

const closeDrawer = async (page: Page) => {
	// Press Escape to close any open drawer
	await page.keyboard.press('Escape');
	await page.waitForTimeout(800);
};

test.describe('DBDrawer Safe Area Insets', () => {
	for (const { name, buttonIndex } of directions) {
		test(`direction "${name}" should render safe area insets correctly`, async ({
			page
		}) => {
			await page.goto(`./#/${path}?density=${density}&color=${lvl1}`, {
				waitUntil: 'domcontentloaded'
			});
			await page.evaluate(async () => document.fonts.ready);
			await waitForDBPage(page);

			// Inject safe area simulation styles
			await page.addStyleTag({ content: safeAreaStyles });

			// Set a fixed viewport for consistent screenshots
			await page.setViewportSize({ width: 1280, height: 720 });

			// Open the drawer for this direction
			await openDrawerByDirection(page, buttonIndex);

			// Take screenshot of the full page with the drawer open
			await expect(page).toHaveScreenshot(
				`drawer-safe-area-${name}.png`,
				{
					maxDiffPixelRatio: 0.01
				}
			);

			await closeDrawer(page);
		});
	}
});
