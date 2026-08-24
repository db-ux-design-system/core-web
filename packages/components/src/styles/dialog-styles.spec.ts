import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { compile, compileString } from 'sass';
import { describe, expect, it } from 'vitest';

const stylesDirectory = dirname(fileURLToPath(import.meta.url));
const loadPaths = [
	stylesDirectory,
	join(stylesDirectory, '..', '..', 'node_modules')
];

const compileMixin = (mixinCall: string) =>
	compileString(
		`@use "internal/dialog-components";
		.test {
			@include dialog-components.${mixinCall};
		}`,
		{ loadPaths }
	);

// Requirement 9.9: a missing required argument aborts the compilation via @error
// instead of emitting an incomplete custom property or selector name.
describe('shared dialog mixins', () => {
	it.each([
		[
			'container-size-inline without $prefix',
			'container-size-inline(null, "medium")',
			'container-size-inline() requires a $prefix argument'
		],
		[
			'container-size-inline without $fallback-size',
			'container-size-inline("dialog", null)',
			'container-size-inline() requires a $fallback-size argument'
		],
		[
			'safe-area without $prefix',
			'safe-area(null)',
			'safe-area() requires a $prefix argument'
		]
	])('fails to compile: %s', (_name, mixinCall, message) => {
		expect(() => compileMixin(mixinCall)).toThrow(message);
	});

	it('compiles with all required arguments', () => {
		expect(() =>
			compileMixin('container-size-inline("dialog", "medium")')
		).not.toThrow();
	});
});

// Feature: dialog-component, Property 24: Shared style files are ASCII only and
// emit no charset marker. Sass emits `@charset "UTF-8"` for any non-ASCII byte
// anywhere in a file, comments included, which breaks downstream BOM handling.
// Requirement 9.11.
describe('Property 24: shared dialog style files are ASCII only', () => {
	const dialog = '../components/dialog/dialog.scss';
	const header = '../components/dialog-header/dialog-header.scss';
	const footer = '../components/dialog-footer/dialog-footer.scss';

	// The two `internal/` partials only define mixins, so compiling them on their
	// own emits no rules. Compile the stylesheet that `@use`s them instead.
	it.each([
		['internal/_dialog-components.scss', dialog],
		['internal/_dialog-ponyfill.scss', dialog],
		[dialog, dialog],
		[header, header],
		[footer, footer]
	])(
		'%s contains only ASCII bytes and emits no @charset',
		(file, stylesheet) => {
			const nonAscii = [...readFileSync(join(stylesDirectory, file))]
				.map((byte, index) => ({ byte, index }))
				.filter(({ byte }) => byte > 0x7f);

			expect(nonAscii).toEqual([]);
			expect(
				compile(join(stylesDirectory, stylesheet), { loadPaths }).css
			).not.toContain('@charset');
		}
	);
});
