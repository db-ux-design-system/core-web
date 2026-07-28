import { describe, expect, it } from 'vitest';
import { filterPassingProps } from './react';

describe('filterPassingProps', () => {
	it('excludes props listed in propsPassingFilter', () => {
		const props = {
			onToggle: () => {},
			'data-testid': 'item'
		};

		const result = filterPassingProps(props, ['onToggle']);

		expect(result).not.toHaveProperty('onToggle');
		expect(result).toHaveProperty('data-testid', 'item');
	});

	it('passes through standard React default* attributes (defaultValue, defaultChecked)', () => {
		const props = {
			defaultValue: 'hello',
			defaultChecked: true
		};

		const result = filterPassingProps(props, []);

		expect(result).toHaveProperty('defaultValue', 'hello');
		expect(result).toHaveProperty('defaultChecked', true);
	});

	it('does not pass through non-standard default* props (e.g. defaultOpen)', () => {
		const props = {
			defaultOpen: true,
			defaultValue: 'test'
		};

		const result = filterPassingProps(props, []);

		expect(result).not.toHaveProperty('defaultOpen');
		expect(result).toHaveProperty('defaultValue', 'test');
	});
});
