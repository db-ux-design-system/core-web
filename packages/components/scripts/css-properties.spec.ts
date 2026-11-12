import {
	existsSync,
	mkdirSync,
	mkdtempSync,
	readFileSync,
	rmSync,
	writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import postcss from 'postcss';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import cssProperties from './css-properties';

// Compiled CSS of a component that loads `form-components.properties` and
// contains the styles of a nested component with its own properties.
const css = `
/* @css-properties form-components */
/**
 * Minimum inline size of the form field,
 * e.g. \`20rem\`.
 * @default var(--db-sizing-lg)
 */
@property --db-b {
	syntax: "*";
	inherits: true;
}
/* A regular comment, no documentation. */
@property --db-undocumented {
	syntax: "*";
	inherits: false;
}
/** Second property. */
@property --db-a {
	syntax: "<length>";
	inherits: false;
	initial-value: 0px;
}
/* @css-properties drawer */
/** Of the nested drawer. */
@property --db-drawer-x {
	syntax: "*";
	inherits: true;
}
.db-input { color: red; }
/** After a style rule: no longer part of the drawer block. */
@property --db-after-rule {
	syntax: "*";
	inherits: true;
}
`;

let directory: string;

const run = async (file: string, source?: string) => {
	const from = join(directory, 'build/components', file);
	mkdirSync(dirname(from), { recursive: true });
	if (source !== undefined) {
		const scss = join(
			directory,
			'src/components',
			file.replace(/\.css$/, '.scss')
		);
		mkdirSync(dirname(scss), { recursive: true });
		writeFileSync(scss, source);
	}

	await postcss([cssProperties()]).process(css, { from });
};

const output = (file: string) => join(directory, 'build/components', file);

beforeEach(() => {
	directory = mkdtempSync(join(tmpdir(), 'css-properties-'));
});

afterEach(() => {
	rmSync(directory, { recursive: true, force: true });
});

describe('css-properties', () => {
	it('writes the documented properties of the files the component loads', async () => {
		await run(
			'input/input.css',
			'@use "../../styles/internal/form-components.properties" as *;'
		);
		expect(
			JSON.parse(
				readFileSync(output('input/input.css-properties.json'), 'utf8')
			)
		).toEqual([
			{
				name: '--db-a',
				description: 'Second property.',
				// No `@default`: the initial value is the default.
				default: '0px',
				syntax: '<length>',
				inherits: false
			},
			{
				name: '--db-b',
				description:
					'Minimum inline size of the form field, e.g. `20rem`.',
				default: 'var(--db-sizing-lg)',
				syntax: '*',
				inherits: true
			}
		]);
	});

	it('ends a properties block at the first other rule', async () => {
		await run('drawer/drawer.css', '@use "drawer.properties" as *;');
		expect(
			JSON.parse(
				readFileSync(
					output('drawer/drawer.css-properties.json'),
					'utf8'
				)
			).map(({ name }: { name: string }) => name)
		).toEqual(['--db-drawer-x']);
	});

	it('skips components that load no properties file', async () => {
		await run('checkbox/checkbox.css', '@use "../../styles/internal/x";');
		expect(
			existsSync(output('checkbox/checkbox.css-properties.json'))
		).toBe(false);
	});

	it('skips bundles and other files', async () => {
		await run('input/other.css', '@use "form-components.properties" as *;');
		expect(existsSync(output('input/other.css-properties.json'))).toBe(
			false
		);
	});
});
