import type { Decorator } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ref } from 'lit/directives/ref.js';

/**
 * Captured rendered HTML per story, keyed by Storybook story id
 * (e.g. "components-dbaccordion-variant--divider"). The docs `source.transform`
 * in preview.ts reads from this map and prettifies it, so the "Show code" panel
 * shows the real custom-element markup instead of the lit template function.
 */
export const htmlSourceMap = new Map<string, string>();

/**
 * Remove lit-html's internal part markers from captured HTML. lit renders
 * comment nodes like `<!--?lit$123$-->` and empty `<!---->` to track dynamic
 * parts; they are implementation detail and would clutter the docs source panel.
 */
const cleanLitMarkers = (htmlString: string): string =>
	htmlString.replace(/<!--\??lit\$[^>]*?-->/g, '').replace(/<!---->/g, '');

/**
 * Decorator that renders the story inside a `display: contents` wrapper and
 * records the wrapper's `innerHTML` for the docs source. The read is deferred to
 * a microtask so Stencil has upgraded the `<db-*>` elements and lit has flushed
 * the DOM before the snapshot is taken. Mirrors the html-storybook decorator,
 * adapted from React to lit.
 */
export const htmlCaptureDecorator: Decorator = (story, context) => {
	const capture = (element?: Element) => {
		if (!element) {
			return;
		}
		queueMicrotask(() => {
			htmlSourceMap.set(context.id, cleanLitMarkers(element.innerHTML));
		});
	};

	return html`<div style="display: contents" ${ref(capture)}>
		${story()}
	</div>`;
};
