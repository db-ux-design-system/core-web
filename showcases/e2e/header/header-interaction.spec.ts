import { expect, test } from '@playwright/test';
import { isStencil, runInteractionTest } from '../default.ts';

const path = '05/header';

/*
 * The visibility is asserted on the drawer container, not on the <dialog>:
 * the dialog element itself has a zero-size box (its container is taken out
 * of flow), so Playwright always reports it as hidden.
 */
const drawerSelector = '.db-header-drawer';

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

			await expect(state).toHaveText('closed');
			await expect(drawer).toBeHidden();

			await content.getByTestId('open-button').click();
			await expect(state).toHaveText('open');
			await expect(drawer).toBeVisible();

			/*
			 * Regression guard for #8498. A navigation item click closes the
			 * drawer through the state, so the dialog's close() runs only after
			 * drawerOpen is already false. Routing the resulting close event
			 * through a toggle inverted that value, reported "open" and
			 * reopened the drawer immediately. Scoped to the drawer because
			 * DBHeader renders its children twice (desktop bar and drawer).
			 */
			await drawer.getByTestId('navigation-link').click();
			await expect(state).toHaveText('closed');
			await expect(drawer).toBeHidden();
		}
	});

	runInteractionTest({
		title: 'should stay closed when a consumer button closes the drawer',
		path,
		example: 'Interaction',
		async run({ content }) {
			const state = content.getByTestId('drawer-state');
			const drawer = content.locator(drawerSelector);

			await content.getByTestId('open-button').click();
			await expect(drawer).toBeVisible();

			/*
			 * Same root cause as above, but reached without any
			 * component-internal click handler: the consumer's own button in
			 * the drawer footer sets drawerOpen to false directly. Scoped to
			 * the drawer because the secondaryAction slot also renders in the
			 * desktop action container.
			 */
			await drawer.getByTestId('state-close-button').click();
			await expect(state).toHaveText('closed');
			await expect(drawer).toBeHidden();
		}
	});

	runInteractionTest({
		title: 'should close via the drawer header close button',
		path,
		example: 'Interaction',
		async run({ content }) {
			const state = content.getByTestId('drawer-state');
			const drawer = content.locator(drawerSelector);

			await content.getByTestId('open-button').click();
			await expect(drawer).toBeVisible();

			// This path already worked before the fix (the browser closes the
			// dialog first, so drawerOpen is still true on the close event).
			// Kept so the fix cannot regress it.
			await drawer.locator('[data-dialog-close-button]').click();
			await expect(state).toHaveText('closed');
			await expect(drawer).toBeHidden();
		}
	});
});
