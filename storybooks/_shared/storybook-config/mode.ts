import type { Globals, GlobalTypes } from 'storybook/internal/types';

/**
 * Light/dark mode of the whole Storybook: the stories, the docs pages
 * (docs-container.ts) and the Storybook UI (manager.ts). Switchable via the
 * `globals=mode:dark` URL parameter or the "Mode" entry of the toolbar.
 *
 * Copied into `.storybook/mode.ts` of every Storybook by copy-config.ts
 * (git-ignored there), because the Angular build only compiles files inside
 * its project. Edit this file, not the copies.
 *
 * The default "System" follows the OS color scheme (`prefers-color-scheme`).
 * It sets no `data-mode`, so the stories follow it as well.
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

export const DARK_QUERY = '(prefers-color-scheme: dark)';

/** Light or dark for a mode; "System" asks the OS. */
export const resolveMode = (mode: unknown): 'light' | 'dark' => {
	if (mode === 'light' || mode === 'dark') {
		return mode;
	}

	return globalThis.matchMedia?.(DARK_QUERY).matches ? 'dark' : 'light';
};

/**
 * The manager (manager.ts) marks the selected mode on its `<html>`. In the
 * composition Storybook the framework Storybooks are refs, and Storybook does
 * not pass globals to refs, so their previews read the mode from the manager
 * instead (same origin). Without a manager (iframe.html opened directly) the
 * preview's own globals apply.
 */
export const MANAGER_MODE_ATTRIBUTE = 'dbSbModeSetting';

const getManagerRoot = (): HTMLElement | undefined => {
	try {
		return globalThis.parent === globalThis.window
			? undefined
			: globalThis.parent.document.documentElement;
	} catch {
		// A manager on another origin.
		return undefined;
	}
};

const getManagerMode = (): string | undefined =>
	getManagerRoot()?.dataset[MANAGER_MODE_ATTRIBUTE];

/** The mode of the preview: the manager's, otherwise the globals'. */
export const getMode = (globals: Globals): unknown =>
	getManagerMode() ?? globals.mode;

const setDataMode = (mode: unknown) => {
	if (mode === 'light' || mode === 'dark') {
		document.documentElement.dataset['mode'] = mode;
	} else {
		delete document.documentElement.dataset['mode'];
	}
};

/** Calls `callback` whenever the manager's mode changes. */
export const onManagerModeChange = (callback: () => void): (() => void) => {
	const root = getManagerRoot();
	if (!root) {
		return () => undefined;
	}

	const observer = new MutationObserver(callback);
	observer.observe(root, {
		attributes: true,
		attributeFilter: [
			`data-${MANAGER_MODE_ATTRIBUTE.replaceAll(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)}`
		]
	});
	return () => {
		observer.disconnect();
	};
};

let isFollowingManager = false;

/**
 * Sets `data-mode` on `<html>` for the selected mode (a decorator of every
 * story). Follows later changes of the manager, which do not render the
 * stories of a ref again.
 */
export const applyMode = (globals: Globals): void => {
	setDataMode(getMode(globals));
	if (!isFollowingManager) {
		isFollowingManager = true;
		onManagerModeChange(() => {
			setDataMode(getManagerMode());
		});
	}
};
