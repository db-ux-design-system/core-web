import { describe, expect, test } from 'vitest';
// @ts-expect-error -- plain JS module without type declarations
import functions from '../../github/changesets/create-changelog.js';

const { getReleaseLine } = functions as {
	getReleaseLine: (
		changeset: { summary: string; commit?: string },
		type: unknown,
		options?: { owner?: string; repo?: string }
	) => Promise<string>;
};

const render = async (summary: string, commit?: string) =>
	getReleaseLine(
		{ summary, commit },
		'patch',
		commit ? { owner: 'db-ux-design-system', repo: 'core-web' } : null
	);

describe('create-changelog getReleaseLine', () => {
	test('renders a single-line summary as one top-level bullet', async () => {
		const result = await render(
			'fix(DBTabs): wire up tabs added at runtime'
		);

		expect(result).toBe('- fix(DBTabs): wire up tabs added at runtime\n');
	});

	test('appends the commit link to the first line when a commit is given', async () => {
		const result = await render(
			'fix(DBTabs): wire up tabs added at runtime',
			'b29e435947b736fb108b4ffb77adcfbd9f653591'
		);

		expect(result).toContain(
			'- fix(DBTabs): wire up tabs added at runtime - [see commit b29e435]('
		);
		expect(result).toContain(
			'/commit/b29e435947b736fb108b4ffb77adcfbd9f653591)'
		);
	});

	test('renders author-written "-" sub-bullets at the four-space list level', async () => {
		const result = await render(
			[
				'fix(eslint-plugin): correct slot and header detection',
				'- React: reject empty content',
				'- Vue: only accept the expected parent',
				'- Angular: treat undefined bindings as empty'
			].join('\n')
		);

		// Tabs in the raw output; prettier later renders one tab as the
		// four-space sub-item indentation in the CHANGELOG.
		expect(result).toContain('\t- React: reject empty content');
		expect(result).toContain('\t- Vue: only accept the expected parent');
		expect(result).toContain(
			'\t- Angular: treat undefined bindings as empty'
		);
		// The author's "-" marker must be stripped, never doubled into a nested
		// (two-tab / eight-space code-style) sub-item.
		expect(result).not.toContain('\t\t');
		expect(result).not.toContain('- - React');
	});

	test('renders "*" and "+" sub-bullets the same way as "-"', async () => {
		const result = await render(
			['feat(scope): summary', '* star bullet', '+ plus bullet'].join(
				'\n'
			)
		);

		expect(result).toContain('\t- star bullet');
		expect(result).toContain('\t- plus bullet');
		expect(result).not.toContain('\t\t');
	});

	test('renders plain-prose sub-lines identically to bullet sub-lines', async () => {
		const bulletList = await render('summary\n- point one\n- point two');
		const proseList = await render('summary\npoint one\npoint two');

		expect(bulletList).toBe(proseList);
	});

	test('keeps a single unwrapped paragraph as exactly one sub-item', async () => {
		const paragraph =
			'The scanner suggested deprecated targets and now maps to the current components and adds the newly supported inputs so scans suggest shipped components.';
		const result = await render(
			`fix(mcp-server): point map at current\n${paragraph}`
		);

		const subItems = result
			.split('\n')
			.filter((line) => line.startsWith('\t- '));
		expect(subItems).toHaveLength(1);
		expect(subItems[0]).toBe(`\t- ${paragraph}`);
	});

	test('drops blank lines between sub-items', async () => {
		const result = await render('summary\n\n- only point\n\n');

		const subItems = result
			.split('\n')
			.filter((line) => line.startsWith('\t- '));
		expect(subItems).toEqual(['\t- only point']);
	});
});
