import type { Globals, GlobalTypes } from 'storybook/internal/types';

/**
 * Light/dark mode of the stories, switchable via the `globals=mode:dark` URL
 * parameter or the "Mode" entry of the toolbar.
 *
 * Copied into `.storybook/mode.ts` of every Storybook by copy-config.ts
 * (git-ignored there), because the Angular build only compiles files inside
 * its project. Edit this file, not the copies.
 *
 * The default is Light Mode, like the Storybook UI and the docs pages, which
 * are always light (theme.ts). Otherwise an OS in dark mode would show dark
 * examples on the light docs page. `auto` sets no `data-mode`, so the stories
 * follow `prefers-color-scheme`.
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

export const modeInitialGlobals: Globals = { mode: 'light' };

/** Sets `data-mode` on `<html>` for the selected mode. */
export const applyMode = (globals: Globals): void => {
	const { mode } = globals;
	if (mode === 'light' || mode === 'dark') {
		document.documentElement.dataset['mode'] = mode;
	} else {
		delete document.documentElement.dataset['mode'];
	}
};
