import {
	existsSync,
	mkdirSync,
	mkdtempSync,
	readFileSync,
	rmSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import postcss from 'postcss';
import { afterEach, describe, expect, it } from 'vitest';
import cssProperties from './css-properties';

const css = `
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
}
.db-input { color: red; }
`;

let directory: string;

const run = async (file: string) => {
	mkdirSync(join(directory, file, '..'), { recursive: true });
	await postcss([cssProperties()]).process(css, {
		from: join(directory, file)
	});
};

afterEach(() => {
	rmSync(directory, { recursive: true, force: true });
});

describe('css-properties', () => {
	it('writes the documented properties of a component, sorted', async () => {
		directory = mkdtempSync(join(tmpdir(), 'css-properties-'));
		await run('build/components/input/input.css');
		const json = JSON.parse(
			readFileSync(
				join(
					directory,
					'build/components/input/input.css-properties.json'
				),
				'utf8'
			)
		);
		expect(json).toEqual([
			{
				name: '--db-a',
				description: 'Second property.',
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

	it('skips bundles and other files', async () => {
		directory = mkdtempSync(join(tmpdir(), 'css-properties-'));
		await run('build/styles/rollup.css');
		await run('build/components/input/other.css');
		expect(
			existsSync(
				join(directory, 'build/styles/rollup.css-properties.json')
			)
		).toBe(false);
		expect(
			existsSync(
				join(
					directory,
					'build/components/input/other.css-properties.json'
				)
			)
		).toBe(false);
	});
});
