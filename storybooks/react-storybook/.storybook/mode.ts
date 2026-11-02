import type { Globals, GlobalTypes } from 'storybook/internal/types';

/**
 * Light/dark mode of the stories, switchable in the toolbar and via the
 * `globals=mode:dark` URL parameter.
 *
 * Copied into `.storybook/mode.ts` of every Storybook by
 * `storybooks/_shared/storybook-config/sync.ts`, because the Angular build only
 * compiles files inside its project. Edit this file, not the copies.
 *
 * `auto` sets no `data-mode`, so the stories follow `prefers-color-scheme`.
 */
export const modeGlobalTypes: GlobalTypes = {
	mode: {
		description: 'Light/dark mode',
		toolbar: {
			title: 'Mode',
			icon: 'contrast',
			items: [
				{ value: 'auto', title: 'System' },
				{ value: 'light', title: 'Light Mode' },
				{ value: 'dark', title: 'Dark Mode' }
			],
			dynamicTitle: true
		}
	}
};

export const modeInitialGlobals: Globals = { mode: 'auto' };

/** Sets `data-mode` on `<html>` for the selected mode. */
export const applyMode = (globals: Globals): void => {
	const mode = globals['mode'];
	if (mode === 'light' || mode === 'dark') {
		document.documentElement.dataset['mode'] = mode;
	} else {
		delete document.documentElement.dataset['mode'];
	}
};
