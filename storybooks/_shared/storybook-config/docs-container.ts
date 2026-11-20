import {
	DocsContainer,
	type DocsContainerProps
} from '@storybook/addon-docs/blocks';
import { createElement, useEffect, useState } from 'react';
import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events';
import type { Globals } from 'storybook/internal/types';
import { addons } from 'storybook/preview-api';
import {
	applyMode,
	DARK_QUERY,
	getMode,
	onManagerModeChange,
	resolveMode
} from './mode';
import { docsThemes } from './theme';

/**
 * Docs container in the mode of the "Mode" toolbar entry (mode.ts):
 * `parameters.docs.container` in `.storybook/preview.ts`.
 *
 * Storybook renders the docs pages with one fixed theme
 * (`parameters.docs.theme`) and does not render them again when a global
 * changes, so the container follows the globals and the OS color scheme
 * itself. It also sets `data-mode` for docs pages without stories, where no
 * decorator runs.
 *
 * Copied into `.storybook/docs-container.ts` of every Storybook by
 * copy-config.ts (git-ignored there). Edit this file, not the copies.
 */
type GlobalsEvent = { globals: Globals };

/** The globals of the preview; `store` is not part of the public type. */
const getGlobals = (context: DocsContainerProps['context']): Globals =>
	(context as unknown as { store?: { userGlobals?: { globals?: Globals } } })
		.store?.userGlobals?.globals ?? {};

export const ModeDocsContainer = (props: DocsContainerProps) => {
	const [globals, setGlobals] = useState<Globals>(() =>
		getGlobals(props.context)
	);
	// Re-render when the manager's mode or (for "System") the OS changes.
	const [, setTick] = useState(0);
	const mode = getMode(globals);

	useEffect(() => {
		const channel = addons.getChannel();
		const onGlobals = (event: GlobalsEvent) => {
			setGlobals(event.globals);
		};

		const rerender = () => {
			setTick((tick) => tick + 1);
		};

		channel.on(SET_GLOBALS, onGlobals);
		channel.on(GLOBALS_UPDATED, onGlobals);
		const stopFollowing = onManagerModeChange(rerender);
		const query = globalThis.matchMedia?.(DARK_QUERY);
		query?.addEventListener('change', rerender);
		return () => {
			channel.off(SET_GLOBALS, onGlobals);
			channel.off(GLOBALS_UPDATED, onGlobals);
			stopFollowing();
			query?.removeEventListener('change', rerender);
		};
	}, []);

	useEffect(() => {
		applyMode(globals);
	}, [globals, mode]);

	return createElement(DocsContainer, {
		...props,
		theme: docsThemes[resolveMode(mode)]
	});
};
