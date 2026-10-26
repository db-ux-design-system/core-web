import { expect, test } from '@playwright/test';
import { isStencil, runInteractionTest } from '../default.ts';

const path = '05/header';

/*
 * The visibility is asserted on the drawer container, not on the <dialog>:
 * the dialog element itself has a zero-size box (its container is taken out
 * of flow), so Playwright always reports it as hidden.
 *
 * `db-drawer-container` rather than `db-header-drawer`, because the latter is
 * passed into DBDrawer as `className` and the Vue output drops that prop, so
 * the class is missing there. DBDrawer sets this one itself on every target.
 */
const drawerSelector = '.db-drawer-container';

test.describe('DBHeader', () => {
	/*
	 * The Stencil output of DBHeader renders no drawer at all: DBDrawer,
	 * DBDrawerHeader and DBDrawerFooter are imported but never emitted into
	 * render(). There is nothing to open, so the interaction cannot be
	 * asserted on that target.
	 */
	if (isStencil(process.env.showcase)) {
		test.skip();
	}

	runInteractionTest({
		title: 'should stay closed when the drawer is closed via the state',
		path,
		example: 'Interaction',
		async run({ content }) {
			const state = content.getByTestId('drawer-state');
			const drawer = content.locator(drawerSelector);

			await expect(state).toHaveText('Drawer state: closed');
			await expect(drawer).toBeHidden();

			await content.getByTestId('open-button').click();
			await expect(state).toHaveText('Drawer state: open');
			await expect(drawer).toBeVisible();

			/*
			 * Regression guard for #8498. A navigation item click closes the
			 * drawer through the state, so the dialog's close() runs only after
			 * drawerOpen is already false. Routing the resulting close event
			 * through a toggle inverted that value, reported "open" and
			 * reopened the drawer immediately. Scoped to the drawer because
			 * DBHeader renders its children twice (desktop bar and drawer).
			 */
			await drawer.getByRole('link', { name: 'Start' }).click();
			await expect(state).toHaveText('Drawer state: closed');
			await expect(drawer).toBeHidden();
		}
	});

	runInteractionTest({
		title: 'should open via the burger menu and close via the drawer header',
		path,
		example: 'Interaction',
		async run({ content }) {
			const state = content.getByTestId('drawer-state');
			const drawer = content.locator(drawerSelector);

			/*
			 * Opening through the burger menu covers handleToggle, which still
			 * inverts drawerOpen on purpose, so both handlers are exercised.
			 */
			await content
				.locator('.db-header-burger-menu-container button')
				.click();
			await expect(state).toHaveText('Drawer state: open');
			await expect(drawer).toBeVisible();

			// This path already worked before the fix (the browser closes the
			// dialog first, so drawerOpen is still true on the close event).
			// Kept so the fix cannot regress it.
			await drawer.locator('[data-dialog-close-button]').click();
			await expect(state).toHaveText('Drawer state: closed');
			await expect(drawer).toBeHidden();
		}
	});
});
