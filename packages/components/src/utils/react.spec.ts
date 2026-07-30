import { describe, expect, it } from 'vitest';
import { filterPassingProps } from './react';

describe('filterPassingProps', () => {
	it('passes through default* props unless excluded by propsPassingFilter', () => {
		const props = {
			defaultOpen: true,
			defaultValue: 'hello',
			defaultChecked: true
		};

		const included = filterPassingProps(props, []);
		expect(included).toHaveProperty('defaultOpen', true);
		expect(included).toHaveProperty('defaultValue', 'hello');
		expect(included).toHaveProperty('defaultChecked', true);

		const excluded = filterPassingProps(props, ['defaultOpen']);
		expect(excluded).not.toHaveProperty('defaultOpen');
		expect(excluded).toHaveProperty('defaultValue', 'hello');
		expect(excluded).toHaveProperty('defaultChecked', true);
	});
});
