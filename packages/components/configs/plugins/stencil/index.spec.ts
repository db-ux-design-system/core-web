import { describe, expect, it, vi } from 'vitest';

// The plugin is CommonJS; import its named exports for unit testing.
const {
	extractOnInitCode,
	injectComponentWillLoad
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('./index.cjs');

describe('extractOnInitCode', () => {
	it('returns the trimmed onInit hook body', () => {
		const json = { hooks: { onInit: { code: '  this.resetIds();  ' } } };
		expect(extractOnInitCode(json)).toBe('this.resetIds();');
	});

	it('returns undefined when there is no onInit hook', () => {
		expect(extractOnInitCode({ hooks: {} })).toBeUndefined();
		expect(extractOnInitCode({})).toBeUndefined();
		expect(extractOnInitCode(undefined)).toBeUndefined();
	});

	it('returns undefined when the onInit code is empty or whitespace', () => {
		expect(
			extractOnInitCode({ hooks: { onInit: { code: '' } } })
		).toBeUndefined();
		expect(
			extractOnInitCode({ hooks: { onInit: { code: '   \n  ' } } })
		).toBeUndefined();
	});

	it('returns undefined when the onInit code is not a string', () => {
		expect(
			extractOnInitCode({ hooks: { onInit: { code: 42 } } })
		).toBeUndefined();
	});
});

describe('injectComponentWillLoad', () => {
	it('injects componentWillLoad directly before componentDidLoad', () => {
		const code = [
			'export class DBPage {',
			'  componentDidLoad() {',
			'    this.enableAttributePassing(this._ref, "db-page");',
			'  }',
			'}'
		].join('\n');

		const result = injectComponentWillLoad(code, 'this.resetIds();');

		expect(result).toContain('componentWillLoad() {\nthis.resetIds();\n}');
		// componentWillLoad must come before componentDidLoad
		expect(result.indexOf('componentWillLoad()')).toBeLessThan(
			result.indexOf('componentDidLoad()')
		);
	});

	it('only injects a single componentWillLoad block', () => {
		const code = 'componentDidLoad() {}';
		const result = injectComponentWillLoad(code, 'this.init();');
		const matches = result.match(/componentWillLoad\(\)/g) ?? [];
		expect(matches).toHaveLength(1);
	});

	it('warns and returns the code unchanged when componentDidLoad is missing', () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const code = 'export class DBThing {}';

		const result = injectComponentWillLoad(code, 'this.init();');

		expect(result).toBe(code);
		expect(warn).toHaveBeenCalledOnce();
		warn.mockRestore();
	});
});
