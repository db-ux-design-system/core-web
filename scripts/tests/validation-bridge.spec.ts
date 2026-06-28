import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, test } from 'vitest';

const defaultInvalidMessage = 'TODO: Add an invalidMessage';

/**
 * Simulates the validation bridge logic injected into handleValidation().
 * Returns `true` if the bridge triggered an early return (Signal Forms errors take priority),
 * `false` otherwise (normal validation flow continues).
 */
function simulateValidationBridge(component: {
	errors: () => Array<{ message?: string }> | undefined;
	_descByIds: { set: (v: string) => void };
	_invalidMessageId: () => string;
	_invalidMessage: { set: (v: string) => void };
	validation: () => string;
}): boolean {
	const signalFormErrors = component.errors();
	if (Array.isArray(signalFormErrors) && signalFormErrors.length > 0) {
		component._descByIds.set(component._invalidMessageId());
		component._invalidMessage.set(
			signalFormErrors[0].message ?? defaultInvalidMessage
		);
		return true; // Early return happened
	}

	return false; // No early return, continue normal validation
}

describe('Validation Bridge Logic', () => {
	function createMockComponent(overrides: {
		errors?: Array<{ message?: string }>;
		validation?: string;
	}) {
		const state = {
			descByIds: undefined as string | undefined,
			invalidMessage: undefined as string | undefined
		};

		return {
			component: {
				errors: () => overrides.errors,
				_descByIds: {
					set(v: string) {
						state.descByIds = v;
					}
				},
				_invalidMessageId: () => 'test-invalid-msg-id',
				_invalidMessage: {
					set(v: string) {
						state.invalidMessage = v;
					}
				},
				validation: () => overrides.validation ?? 'no-validation'
			},
			state
		};
	}

	test('non-empty errors array sets _invalidMessage to first error message', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: 'Field is required' }]
		});

		const earlyReturn = simulateValidationBridge(component);

		expect(earlyReturn).toBe(true);
		expect(state.invalidMessage).toBe('Field is required');
		expect(state.descByIds).toBe('test-invalid-msg-id');
	});

	test('multiple errors uses only the first error message', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: 'First error' }, { message: 'Second error' }]
		});

		const earlyReturn = simulateValidationBridge(component);

		expect(earlyReturn).toBe(true);
		expect(state.invalidMessage).toBe('First error');
	});

	test('empty errors array does not change state', () => {
		const { component, state } = createMockComponent({
			errors: []
		});

		const earlyReturn = simulateValidationBridge(component);

		expect(earlyReturn).toBe(false);
		expect(state.invalidMessage).toBeUndefined();
		expect(state.descByIds).toBeUndefined();
	});

	test('undefined errors does not change state', () => {
		const { component, state } = createMockComponent({
			errors: undefined
		});

		const earlyReturn = simulateValidationBridge(component);

		expect(earlyReturn).toBe(false);
		expect(state.invalidMessage).toBeUndefined();
		expect(state.descByIds).toBeUndefined();
	});

	test('errors has priority over validation="valid"', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: 'Still invalid' }],
			validation: 'valid'
		});

		const earlyReturn = simulateValidationBridge(component);

		expect(earlyReturn).toBe(true);
		expect(state.invalidMessage).toBe('Still invalid');
		expect(state.descByIds).toBe('test-invalid-msg-id');
	});

	test('missing message property uses defaultInvalidMessage', () => {
		const { component, state } = createMockComponent({
			errors: [{}]
		});

		const earlyReturn = simulateValidationBridge(component);

		expect(earlyReturn).toBe(true);
		expect(state.invalidMessage).toBe(defaultInvalidMessage);
	});

	test('error with empty string message preserves empty string', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: '' }]
		});

		const earlyReturn = simulateValidationBridge(component);

		expect(earlyReturn).toBe(true);
		expect(state.invalidMessage).toBe('');
	});
});

describe.skipIf(
	!existsSync(
		resolve(
			import.meta.dirname,
			'../../output/angular/src/components/input/input.ts'
		)
	)
)('Validation Bridge Pattern in Output', () => {
	const outputPath = resolve(
		import.meta.dirname,
		'../../output/angular/src/components/input/input.ts'
	);

	const outputContent = readFileSync(outputPath, 'utf8');

	test('validation bridge code is injected at beginning of handleValidation()', () => {
		expect(outputContent).toContain(
			'// Signal Forms validation bridge: errors InputSignal has priority'
		);
	});

	test('validation bridge checks errors signal', () => {
		expect(outputContent).toContain(
			'const signalFormErrors = this.errors();'
		);
	});

	test('validation bridge uses Array.isArray guard', () => {
		expect(outputContent).toContain(
			'if (Array.isArray(signalFormErrors) && signalFormErrors.length > 0)'
		);
	});

	test('validation bridge sets _invalidMessage from first error', () => {
		expect(outputContent).toContain(
			'signalFormErrors[0].message ?? DEFAULT_INVALID_MESSAGE'
		);
	});

	test('validation bridge returns early before normal validation logic', () => {
		// The bridge must return BEFORE the existing a11y comment
		const bridgeReturnPos = outputContent.indexOf(
			'return; // Signal Forms errors take priority'
		);
		const a11yCommentPos = outputContent.indexOf(
			'/* For a11y reasons we need to map the correct message with the input */'
		);

		expect(bridgeReturnPos).toBeGreaterThan(-1);
		expect(a11yCommentPos).toBeGreaterThan(-1);
		expect(bridgeReturnPos).toBeLessThan(a11yCommentPos);
	});
});
