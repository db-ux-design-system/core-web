import { describe, expect, it } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { toStoryExportName } = require('./get-stories.cjs');

describe('toStoryExportName', () => {
	it.each([
		['3xl', '_3xl'],
		['Size 3xl', 'Size3xl'],
		['(Default) Start', 'DefaultStart'],
		['default', '_default'],
		['---', 'Story']
	])('turns %s into the valid identifier %s', (name, expected) => {
		expect(toStoryExportName(name)).toBe(expected);
	});
});
