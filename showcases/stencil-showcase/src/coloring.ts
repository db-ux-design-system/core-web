import {
	type ColoringMode,
	COLORING_MODES,
	defaultColoringMode
} from '../../settings';
// The DB-UX stylesheets are emitted as assets (`?url`); the active one is
// injected at runtime based on the `coloring` URL param, mirroring the
// react-showcase. `db-ux.css` is legacy, `db-ux-adaptive.css` is adaptive only,
// `db-ux-legacy-adaptive.css` loads both so they can coexist.
import dbUxAdaptiveStyleUrl from './db-ux-adaptive.css?url';
import dbUxLegacyAdaptiveStyleUrl from './db-ux-legacy-adaptive.css?url';
import dbUxStyleUrl from './db-ux.css?url';

const STYLE_BY_MODE: Record<ColoringMode, string> = {
	legacy: dbUxStyleUrl,
	adaptive: dbUxAdaptiveStyleUrl,
	'legacy-adaptive': dbUxLegacyAdaptiveStyleUrl
};

const isColoringMode = (value: string | undefined): value is ColoringMode =>
	Boolean(value) && (COLORING_MODES as readonly string[]).includes(value!);

export function getColoringMode(): ColoringMode {
	const [, queryString = ''] = (globalThis.location.hash || '#/').split(
		'?',
		2
	);
	const value = new URLSearchParams(queryString).get('coloring');
	return isColoringMode(value) ? value : defaultColoringMode;
}

/**
 * Swap the active DB-UX stylesheet and toggle the root `data-adaptive-coloring`
 * attribute based on the current `coloring` URL param. "adaptive" forces the
 * whole document into adaptive coloring; "legacy" and "legacy-adaptive" render
 * legacy by default ("legacy-adaptive" additionally loads the adaptive bundle
 * so a `[data-adaptive-coloring="true"]` subtree can opt in).
 */
export function applyColoring(): void {
	const mode = getColoringMode();

	const id = 'db-ux-stylesheet';
	let link = document.querySelector<HTMLLinkElement>(`#${id}`);
	if (!link) {
		link = document.createElement('link');
		link.id = id;
		link.rel = 'stylesheet';
		document.head.append(link);
	}

	link.href = STYLE_BY_MODE[mode];

	const root =
		document.querySelector<HTMLElement>('db-shell') ??
		document.querySelector<HTMLElement>('.fullscreen-container');

	if (root) {
		if (mode === 'adaptive') {
			root.dataset.adaptiveColoring = 'true';
		} else {
			delete root.dataset.adaptiveColoring;
		}
	}
}
