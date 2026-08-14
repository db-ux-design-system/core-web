import { expect, type Page, test } from '@playwright/test';
import { waitForDBPage } from '../default.ts';
import { lvl1 } from '../fixtures/variants';

const path = '01/drawer';
const density = 'regular';

const safeAreaStyles = `
	@layer db-ux {
		.db-drawer .db-drawer-container {
			--db-drawer-safe-area-inset-top: 47px;
			--db-drawer-safe-area-inset-bottom: 34px;
		}
	}

	/* Device safe area simulation overlays (fixed to viewport edges) */
	.db-drawer[open]::before,
	.db-drawer[open]::after {
		position: fixed;
		left: 0;
		right: 0;
		z-index: 99999;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 10px;
		font-weight: bold;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: rgba(0, 0, 0, 0.5);
		background: repeating-linear-gradient(
			-45deg,
			rgba(255, 200, 0, 0.25),
			rgba(255, 200, 0, 0.25) 4px,
			rgba(255, 200, 0, 0.1) 4px,
			rgba(255, 200, 0, 0.1) 8px
		);
		pointer-events: none;
	}

	.db-drawer[open]::before {
		content: "Safe Area Top (47px)";
		top: 0;
		height: 47px;
	}

	.db-drawer[open]::after {
		content: "Safe Area Bottom (34px)";
		bottom: 0;
		height: 34px;
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

	// Inject filler content so scrolling behavior is visible
	const docHandle = await page.evaluateHandle('document');
	await page.evaluate((doc) => {
		const content = doc.querySelector<HTMLElement>(
			':scope .db-drawer[open] .db-drawer-content'
		);

		if (content) {
			const filler = doc.createElement('div');
			filler.style.display = 'flex';
			filler.style.flexDirection = 'column';
			filler.style.gap = '0.125rem';
			for (let i = 1; i <= 30; i++) {
				const p = doc.createElement('p');
				p.style.margin = '0';
				p.textContent = `Content line ${i} - demonstrates scroll within safe area boundaries`;
				filler.append(p);
			}

			content.append(filler);
		}
	}, docHandle);
	await docHandle.dispose();
};

const closeDrawer = async (page: Page) => {
	await page.keyboard.press('Escape');
	await page.waitForTimeout(800);
};

const waitForFonts = async (page: Page) => {
	const fontsHandle = await page.evaluateHandle('document.fonts.ready');
	await fontsHandle.dispose();
};

test.describe('DBDrawer Safe Area Insets', () => {
	for (const { name, buttonIndex } of directions) {
		test(`direction "${name}" should render safe area insets correctly`, async ({
			page
		}) => {
			await page.goto(`./#/${path}?density=${density}&color=${lvl1}`, {
				waitUntil: 'domcontentloaded'
			});
			await waitForFonts(page);
			await waitForDBPage(page);

			await page.addStyleTag({ content: safeAreaStyles });
			// Portrait viewport (iPhone 14 Pro)
			await page.setViewportSize({ width: 393, height: 852 });

			await openDrawerByDirection(page, buttonIndex);

			await expect(page).toHaveScreenshot(
				`drawer-safe-area-${name}.png`,
				{ maxDiffPixelRatio: 0.01 }
			);

			await closeDrawer(page);
		});
	}
});

test.describe('DBDrawer Safe Area Insets (landscape)', () => {
	for (const { name, buttonIndex } of directions) {
		test(`direction "${name}" should render safe area insets correctly in landscape`, async ({
			page
		}) => {
			await page.goto(`./#/${path}?density=${density}&color=${lvl1}`, {
				waitUntil: 'domcontentloaded'
			});
			await waitForFonts(page);
			await waitForDBPage(page);

			await page.addStyleTag({ content: safeAreaStyles });
			// Landscape viewport (iPhone 14 Pro rotated)
			await page.setViewportSize({ width: 852, height: 393 });

			await openDrawerByDirection(page, buttonIndex);

			await expect(page).toHaveScreenshot(
				`drawer-safe-area-landscape-${name}.png`,
				{ maxDiffPixelRatio: 0.01 }
			);

			await closeDrawer(page);
		});
	}
});
