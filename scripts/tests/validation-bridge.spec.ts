import { describe, expect, test } from 'vitest';

const defaultInvalidMessage = 'TODO: Add an invalidMessage';
const defaultValidMessage = 'TODO: Add a validMessage';

/**
 * Simulates the validation bridge logic injected into handleValidation().
 * Returns:
 * - 'no-validation' if validation="no-validation" suppressed everything
 * - 'signal-forms' if Signal Forms errors triggered an early return
 * - 'native-fallback' if _valid was reset because native validation disagrees
 * - 'continue' if normal validation flow continues
 */
function simulateValidationBridge(component: {
	errors: () => Array<{ message?: string }> | undefined;
	_descByIds: { set: (v: string | undefined) => void };
	_invalidMessageId: () => string;
	_invalidMessage: { set: (v: string) => void };
	_validMessage: { set: (v: string) => void };
	_valid: { (): string | undefined; set: (v: string | undefined) => void };
	validation: () => string;
	_ref: () =>
		| { nativeElement?: { validity?: { valid: boolean } } }
		| undefined;
}): 'no-validation' | 'signal-forms' | 'native-fallback' | 'continue' {
	// Validation="no-validation" suppresses ALL validation UI
	if (component.validation() === 'no-validation') {
		component._valid.set(undefined);
		component._invalidMessage.set('');
		component._validMessage.set('');
		component._descByIds.set(undefined);
		return 'no-validation';
	}

	const signalFormErrors = component.errors();
	if (Array.isArray(signalFormErrors) && signalFormErrors.length > 0) {
		component._descByIds.set(component._invalidMessageId());
		component._invalidMessage.set(
			signalFormErrors[0].message ?? defaultInvalidMessage
		);
		component._validMessage.set('');
		component._valid.set('invalid');
		return 'signal-forms';
	}

	if (
		Array.isArray(signalFormErrors) &&
		signalFormErrors.length === 0 &&
		component._valid() === 'invalid'
	) {
		// Signal Forms provided errors=[] after previous invalid state → now valid
		component._valid.set('valid');
		component._validMessage.set(defaultValidMessage);
		component._invalidMessage.set('');
	}

	// If Signal Forms says "valid" but native validation disagrees, reset _valid
	if (
		component._valid() === 'valid' &&
		component._ref()?.nativeElement &&
		!component._ref()?.nativeElement?.validity?.valid
	) {
		component._valid.set(undefined);
		component._validMessage.set('');
		return 'native-fallback';
	}

	return 'continue';
}

describe('Validation Bridge Logic', () => {
	function createMockComponent(overrides: {
		errors?: Array<{ message?: string }>;
		validation?: string;
		_validValue?: string | undefined;
		nativeValid?: boolean;
	}) {
		const state = {
			descByIds: undefined as string | undefined,
			invalidMessage: undefined as string | undefined,
			validMessage: undefined as string | undefined,
			valid: overrides._validValue
		};

		return {
			component: {
				errors: () => overrides.errors,
				_descByIds: {
					set(v: string | undefined) {
						state.descByIds = v;
					}
				},
				_invalidMessageId: () => 'test-invalid-msg-id',
				_invalidMessage: {
					set(v: string) {
						state.invalidMessage = v;
					}
				},
				_validMessage: {
					set(v: string) {
						state.validMessage = v;
					}
				},
				_valid: Object.assign(() => state.valid, {
					set(v: string | undefined) {
						state.valid = v;
					}
				}),
				validation: () => overrides.validation ?? '',
				_ref: () => ({
					nativeElement: {
						validity: { valid: overrides.nativeValid ?? true }
					}
				})
			},
			state
		};
	}

	test('non-empty errors array sets _invalidMessage to first error message', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: 'Field is required' }]
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		expect(state.invalidMessage).toBe('Field is required');
		expect(state.descByIds).toBe('test-invalid-msg-id');
		expect(state.valid).toBe('invalid');
	});

	test('multiple errors uses only the first error message', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: 'First error' }, { message: 'Second error' }]
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		expect(state.invalidMessage).toBe('First error');
	});

	test('empty errors array does not change state', () => {
		const { component, state } = createMockComponent({
			errors: []
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('continue');
		expect(state.invalidMessage).toBeUndefined();
		expect(state.descByIds).toBeUndefined();
	});

	test('undefined errors does not change state', () => {
		const { component, state } = createMockComponent({
			errors: undefined
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('continue');
		expect(state.invalidMessage).toBeUndefined();
		expect(state.descByIds).toBeUndefined();
	});

	test('errors has priority over validation="valid"', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: 'Still invalid' }],
			validation: 'valid'
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		expect(state.invalidMessage).toBe('Still invalid');
		expect(state.descByIds).toBe('test-invalid-msg-id');
	});

	test('missing message property uses defaultInvalidMessage', () => {
		const { component, state } = createMockComponent({
			errors: [{}]
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		expect(state.invalidMessage).toBe(defaultInvalidMessage);
	});

	test('error with empty string message preserves empty string', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: '' }]
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		expect(state.invalidMessage).toBe('');
	});

	// NEW: validation="no-validation" tests
	test('validation="no-validation" suppresses Signal Forms errors', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: 'Should be hidden' }],
			validation: 'no-validation'
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('no-validation');
		expect(state.valid).toBeUndefined();
		expect(state.invalidMessage).toBe('');
		expect(state.validMessage).toBe('');
		expect(state.descByIds).toBeUndefined();
	});

	test('validation="no-validation" suppresses native validation', () => {
		const { component, state } = createMockComponent({
			errors: undefined,
			validation: 'no-validation',
			nativeValid: false
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('no-validation');
		expect(state.valid).toBeUndefined();
		expect(state.invalidMessage).toBe('');
	});

	test('validation="no-validation" resets previously set _valid state', () => {
		const { component, state } = createMockComponent({
			errors: [],
			validation: 'no-validation',
			_validValue: 'invalid'
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('no-validation');
		expect(state.valid).toBeUndefined();
	});

	// NEW: native validation fallback tests
	test('native validation takes over when Signal Forms says valid but native says invalid', () => {
		const { component, state } = createMockComponent({
			errors: [],
			_validValue: 'invalid', // Previously invalid from SF
			nativeValid: false // Native also says invalid
		});

		// First call: SF transition invalid → valid (errors=[])
		const result = simulateValidationBridge(component);

		// _valid was set to 'valid' by the SF branch, then reset by native fallback
		expect(result).toBe('native-fallback');
		expect(state.valid).toBeUndefined();
		expect(state.validMessage).toBe('');
	});

	test('Signal Forms valid state preserved when native also agrees', () => {
		const { component, state } = createMockComponent({
			errors: [],
			_validValue: 'invalid', // Previously invalid from SF
			nativeValid: true // Native says valid too
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('continue');
		expect(state.valid).toBe('valid'); // SF transition kept
		expect(state.validMessage).toBe(defaultValidMessage);
	});

	test('native validation works when errors is undefined (no Signal Forms)', () => {
		const { component, state } = createMockComponent({
			errors: undefined,
			nativeValid: false
		});

		const result = simulateValidationBridge(component);

		// _valid was never set, so native fallback check doesn't trigger
		expect(result).toBe('continue');
		expect(state.valid).toBeUndefined();
		// Normal validation flow continues — native section will handle it
	});
});
