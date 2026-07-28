import { describe, expect, it } from 'vitest';
import { filterPassingProps } from './react';

describe('filterPassingProps', () => {
	it('excludes props listed in propsPassingFilter', () => {
		const props = {
			defaultOpen: true,
			onToggle: () => {},
			'data-testid': 'item'
		};

		const result = filterPassingProps(props, ['onToggle', 'defaultOpen']);

		expect(result).not.toHaveProperty('defaultOpen');
		expect(result).not.toHaveProperty('onToggle');
		expect(result).toHaveProperty('data-testid', 'item');
	});

	it('passes through defaultValue and defaultChecked (standard HTML attributes)', () => {
		const props = {
			defaultValue: 'hello',
			defaultChecked: true,
			onChange: () => {}
		};

		const result = filterPassingProps(props, []);

		expect(result).toHaveProperty('defaultValue', 'hello');
		expect(result).toHaveProperty('defaultChecked', true);
		expect(result).toHaveProperty('onChange');
	});
});
