import { describe, expect, it } from 'vitest';

// The plugin is CommonJS; import its named exports for unit testing.
const {
	setLowercaseAttributes,
	lowercaseAttributeProps
	// eslint-disable-next-line @typescript-eslint/no-require-imports
} = require('./index.cjs');

describe('setLowercaseAttributes', () => {
	it('adds an explicit lowercase attribute name to each affected @Prop', () => {
		const input = lowercaseAttributeProps
			.map((prop: string) => `@Prop() ${prop}: DBButtonProps["${prop}"];`)
			.join('\n');

		const output = setLowercaseAttributes(input);

		for (const prop of lowercaseAttributeProps) {
			expect(output).toContain(
				`@Prop({ attribute: '${prop.toLowerCase()}' }) ${prop}: DBButtonProps["${prop}"];`
			);
		}
	});

	it('binds formMethod to the native lowercase formmethod attribute', () => {
		expect(
			setLowercaseAttributes(
				'@Prop() formMethod: DBButtonProps["formMethod"];'
			)
		).toBe(
			`@Prop({ attribute: 'formmethod' }) formMethod: DBButtonProps["formMethod"];`
		);
	});

	it('leaves unrelated @Prop declarations untouched', () => {
		const input = '@Prop() form: DBButtonProps["form"];';
		expect(setLowercaseAttributes(input)).toBe(input);
	});
});
