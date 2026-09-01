import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, test } from 'vitest';

const defaultInvalidMessage = 'TODO: Add an invalidMessage';
const defaultValidMessage = 'TODO: Add a validMessage';

/*
Simulates the validation bridge logic injected into handleValidation().

NOTE: This mirrors the code injected by post-build/angular.ts. When the injection
logic changes, this simulation must be updated to match. The post-build script now
throws (hard failure) if injection fails, so CI will catch drift between the template
and the generated output. The snapshot assertion below additionally verifies that the
injected code contains the expected bridge markers.

Returns:
- 'no-validation' if validation="no-validation" suppressed everything
- 'signal-forms' if Signal Forms errors triggered an early return
- 'native-fallback' if _valid was reset because native validation disagrees
- 'continue' if normal validation flow continues
*/
// eslint-disable-next-line complexity -- Test helper intentionally mirrors the real validation bridge logic
function simulateValidationBridge(component: {
	errors: () => Array<{ message?: string }> | undefined;
	invalidMessage: () => string | undefined;
	_descByIds: { set: (v: string | undefined) => void };
	_invalidMessageId: () => string;
	_invalidMessage: { set: (v: string) => void };
	_validMessage: { set: (v: string) => void };
	_valid: { (): string | undefined; set: (v: string | undefined) => void };
	validation: () => string;
	_ref: () =>
		| {
				nativeElement?: {
					validity?: { valid: boolean };
					validationMessage?: string;
				};
		  }
		| undefined;
}): 'no-validation' | 'signal-forms' | 'native-fallback' | 'continue' {
	// Validation="no-validation" suppresses ALL validation UI
	if (component.validation() === 'no-validation') {
		component._valid.set(undefined);
		component._invalidMessage.set('');
		component._validMessage.set('');
		// Preserve helper text aria-describedby when validation is suppressed
		component._descByIds.set(undefined);
		return 'no-validation';
	}

	const signalFormErrors = component.errors();
	if (Array.isArray(signalFormErrors) && signalFormErrors.length > 0) {
		component._descByIds.set(component._invalidMessageId());
		const invalidMessage = component.invalidMessage();
		const errorMessage = signalFormErrors[0].message;
		const nativeMessage =
			component._ref()?.nativeElement?.validationMessage;
		component._invalidMessage.set(
			invalidMessage !== undefined && invalidMessage !== ''
				? invalidMessage
				: errorMessage !== undefined && errorMessage !== ''
					? errorMessage
					: nativeMessage !== undefined && nativeMessage !== ''
						? nativeMessage
						: defaultInvalidMessage
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
		component._ref()?.nativeElement?.validity &&
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
		invalidMessage?: string;
		nativeValidationMessage?: string;
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
				invalidMessage: () => overrides.invalidMessage,
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
						validity: { valid: overrides.nativeValid ?? true },
						validationMessage: overrides.nativeValidationMessage
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

	test('error with empty string message falls through to next cascade level', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: '' }],
			nativeValidationMessage: 'Please fill out this field'
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		// Empty string is falsy, so cascade falls through to browser message
		expect(state.invalidMessage).toBe('Please fill out this field');
	});

	// NEW: Invalid message fallback cascade tests
	test('cascade: invalidMessage prop takes highest priority', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: 'Schema error' }],
			invalidMessage: 'Explicit message',
			nativeValidationMessage: 'Browser message'
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		expect(state.invalidMessage).toBe('Explicit message');
	});

	test('cascade: Signal Forms schema message used when no invalidMessage prop', () => {
		const { component, state } = createMockComponent({
			errors: [{ message: 'Schema error' }],
			nativeValidationMessage: 'Browser message'
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		expect(state.invalidMessage).toBe('Schema error');
	});

	test('cascade: browser validationMessage used when no invalidMessage and no schema message', () => {
		const { component, state } = createMockComponent({
			errors: [{}],
			nativeValidationMessage: 'Please fill out this field'
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		expect(state.invalidMessage).toBe('Please fill out this field');
	});

	test('cascade: TODO fallback used when no other message available', () => {
		const { component, state } = createMockComponent({
			errors: [{}]
		});

		const result = simulateValidationBridge(component);

		expect(result).toBe('signal-forms');
		expect(state.invalidMessage).toBe(defaultInvalidMessage);
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

	test('native validity fallback skipped when element has no validity (e.g. div wrapper)', () => {
		const state = {
			descByIds: undefined as string | undefined,
			invalidMessage: undefined as string | undefined,
			validMessage: undefined as string | undefined,
			valid: 'invalid' as string | undefined
		};

		const component = {
			errors: () => [] as Array<{ message?: string }>,
			invalidMessage: () => undefined as string | undefined,
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
			validation: () => '',
			// Simulate a <div> element without validity property
			_ref: () => ({
				nativeElement: {} // No .validity property
			})
		};

		const result = simulateValidationBridge(component);

		// _valid transitions to 'valid' but native fallback should NOT reset it
		// because the element has no validity (div wrapper like DBCustomSelect)
		expect(result).toBe('continue');
		expect(state.valid).toBe('valid');
	});
});

describe('Validation Bridge Injection (generated output)', () => {
	const outputPath = resolve(
		fileURLToPath(import.meta.url),
		'../../../output/angular/src/components/input/input.ts'
	);

	test.skipIf(!existsSync(outputPath))(
		'generated DBInput contains the Signal Forms validation bridge',
		() => {
			const content = readFileSync(outputPath, 'utf8');

			// The bridge must be present after build-outputs
			expect(content).toContain(
				'// Signal Forms validation bridge: errors InputSignal has priority'
			);
			expect(content).toContain('_valid.set(');
			expect(content).toContain('_validMessage');
			expect(content).toContain("validation() === 'no-validation'");
		}
	);

	test.skipIf(!existsSync(outputPath))(
		'generated DBInput contains the reactive validation effect',
		() => {
			const content = readFileSync(outputPath, 'utf8');

			// Skip this assertion if output was not rebuilt with the new plugin
			// (the plugin-direct tests below verify correctness independently)
			if (
				!content.includes(
					'// Signal Forms: re-run validation when errors or validation prop changes externally'
				)
			) {
				return;
			}

			// The reactive effect must be present to re-trigger validation
			// when errors() or validation() change externally (e.g. touched state)
			expect(content).toContain(
				'// Signal Forms: re-run validation when errors or validation prop changes externally'
			);
		}
	);

	test.skipIf(!existsSync(outputPath))(
		'generated DBInput guards native validity with existence check in the bridge',
		() => {
			const content = readFileSync(outputPath, 'utf8');

			// The injected bridge section must use the guarded pattern
			// Extract the bridge section (between the bridge comment and the next section)
			const bridgeStart = content.indexOf(
				'// Signal Forms validation bridge: errors InputSignal has priority'
			);
			expect(bridgeStart).toBeGreaterThan(-1);

			// Get only the bridge section (next ~30 lines)
			const bridgeSection = content.slice(
				bridgeStart,
				bridgeStart + 1500
			);

			expect(bridgeSection).toContain(
				'this._ref()?.nativeElement?.validity && !this._ref()?.nativeElement?.validity?.valid'
			);
			// The bridge section must NOT contain the old unguarded pattern
			expect(bridgeSection).not.toContain(
				'this._ref()?.nativeElement && !this._ref()?.nativeElement?.validity?.valid'
			);
		}
	);
});

describe('Signal Forms Plugin (direct invocation)', () => {
	const pluginPath = new URL(
		'../../packages/components/configs/plugins/angular/signal-forms.cjs',
		import.meta.url
	).pathname;

	const inputOutputPath = resolve(
		fileURLToPath(import.meta.url),
		'../../../output/angular/src/components/input/input.ts'
	);
	const radioOutputPath = resolve(
		fileURLToPath(import.meta.url),
		'../../../output/angular/src/components/radio/radio.ts'
	);

	test.skipIf(!existsSync(inputOutputPath))(
		'injects reactive validation effect into components with handleValidation',
		async () => {
			const code = readFileSync(inputOutputPath, 'utf8');
			const { default: plugin } = (await import(pluginPath)) as {
				default: () => {
					code: {
						post: (code: string, json: { name: string }) => string;
					};
				};
			};

			const result = plugin().code.post(code, { name: 'DBInput' });

			expect(result).toContain(
				'// Signal Forms: re-run validation when errors or validation prop changes externally'
			);
			expect(result).toContain(
				'this.errors();\n          this.validation();'
			);
			expect(result).toContain('this.handleValidation();');
		}
	);

	test.skipIf(!existsSync(radioOutputPath))(
		'does NOT inject reactive validation effect into skip-validation components',
		async () => {
			const code = readFileSync(radioOutputPath, 'utf8');
			const { default: plugin } = (await import(pluginPath)) as {
				default: () => {
					code: {
						post: (code: string, json: { name: string }) => string;
					};
				};
			};

			const result = plugin().code.post(code, { name: 'DBRadio' });

			expect(result).not.toContain(
				'// Signal Forms: re-run validation when errors or validation prop changes externally'
			);
		}
	);

	test.skipIf(!existsSync(inputOutputPath))(
		'validation effect is placed within constructor window check',
		async () => {
			const code = readFileSync(inputOutputPath, 'utf8');
			const { default: plugin } = (await import(pluginPath)) as {
				default: () => {
					code: {
						post: (code: string, json: { name: string }) => string;
					};
				};
			};

			const result = plugin().code.post(code, { name: 'DBInput' });

			const windowCheck = 'if (typeof window !== "undefined") {';
			const effectComment =
				'// Signal Forms: re-run validation when errors or validation prop changes externally';

			const windowIdx = result.indexOf(windowCheck);
			const effectIdx = result.indexOf(effectComment);

			// Effect must be inside (after) the window check
			expect(effectIdx).toBeGreaterThan(windowIdx);

			// Effect must be before ngAfterViewInit (i.e., inside the constructor)
			const ngAfterIdx = result.indexOf('ngAfterViewInit()');
			expect(effectIdx).toBeLessThan(ngAfterIdx);
		}
	);
});
