/**
 * Angular Form Components Configuration
 *
 * Single source of truth for the components that take part in Angular forms.
 * Read by two plugins:
 *
 * - `control-value-accessor.cjs` generates the legacy ControlValueAccessor
 *   members, for every entry except those marked `controlValueAccessor: false`.
 * - `signal-forms.cjs` generates the Signal Forms compatibility code, for every
 *   entry.
 *
 * Fields:
 *
 * - `valueAccessor` - the model signal that carries the value. Signal Forms
 *   picks the control type by duck-typing: a "value" ModelSignal means
 *   FormValueControl, a "checked" ModelSignal means FormCheckboxControl.
 * - `valueAccessorRequired` - wrap `writeValue` in a falsy check (DBRadio needs
 *   a value before it writes).
 * - `valueAlias` - the component stores "values", so an alias is generated
 *   (DBCustomSelect).
 * - `hasPattern` - widen the `pattern` input type for RegExp[] from FieldState.
 * - `skipValidationBridge` - the component has no `handleValidation()`.
 * - `controlValueAccessor: false` - no ControlValueAccessor is generated. Only
 *   DBTabItem, which has never had one: it was listed for Signal Forms but was
 *   missing from the post-build config, so no CVA ever reached its output. The
 *   flag keeps that behaviour explicit instead of silently gaining a CVA with
 *   the move to a plugin. Whether it should have one is a separate question.
 */
const FORM_COMPONENTS = {
	DBInput: { valueAccessor: 'value', hasPattern: true },
	DBTextarea: { valueAccessor: 'value' },
	DBSelect: { valueAccessor: 'value' },
	DBCheckbox: { valueAccessor: 'checked' },
	DBSwitch: { valueAccessor: 'checked' },
	DBCustomSelect: { valueAccessor: 'values', valueAlias: true },
	DBRadio: {
		valueAccessor: 'value',
		valueAccessorRequired: true,
		skipValidationBridge: true
	},
	DBCustomSelectListItem: {
		valueAccessor: 'checked',
		skipValidationBridge: true
	},
	DBTabItem: {
		valueAccessor: 'checked',
		skipValidationBridge: true,
		controlValueAccessor: false
	}
};

module.exports = { FORM_COMPONENTS };
