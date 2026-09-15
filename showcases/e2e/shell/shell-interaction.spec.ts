import { expect, test } from '@playwright/test';
import { isStencil, waitForDBShell } from '../default.ts';
import { lvl1 } from '../fixtures/variants';

// The Home route ('') renders the plain showcase landing page. Any deeper
// route (e.g. '05/shell/shell') renders its own example content inside
// #main-content, which can add extra links and make the skip-link locator
// ambiguous. Home keeps the shell chrome minimal and unambiguous.
const path = '';

test.describe('DBShell', () => {
	test('skip-link should become visible on focus and target #main-content', async ({
		page
	}, { project }) => {
		// Settings (and therefore the skip link's exact position) are not
		// supported by the Stencil showcase.
		if (isStencil(process.env.showcase)) {
			test.skip();
		}

		const isMobile = project.name.startsWith('mobile');

		await page.goto(`./#/${path}?density=regular&color=${lvl1}`, {
			waitUntil: 'domcontentloaded'
		});
		await waitForDBShell(page);

		// The shell renders both the mobile and desktop control panel (CSS
		// shows only one per viewport), so scope to whichever is actually
		// visible instead of `.first()`, which would always match DOM order.
		const skipLink = page.locator(
			'.db-control-panel-skip-navigation a:visible'
		);
		await expect(skipLink).toHaveAttribute('href', '#main-content');

		// The skip link is visually hidden until it receives focus.
		if (!isMobile) {
			await skipLink.focus();
			await expect(skipLink).toBeVisible();
		}
	});
});
