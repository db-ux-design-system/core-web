# Angular Signal Forms Integration

`@db-ux/ngx-core-components` supports [Angular Signal Forms](https://angular.dev/essentials/signal-forms) via Duck-Typing. All form components expose the required `ModelSignal` fields (`value`, `checked`, `disabled`) so that Angular's `[formField]` directive automatically recognizes them as custom form controls.

## Requirements

- Angular ≥ 21 (experimental) or ≥ 22 (stable)
- Import `FormField` from `@angular/forms/signals` in your component

## Quick Start

```typescript
import { Component, signal } from "@angular/core";
import { form, FormField, required } from "@angular/forms/signals";
import { DBInput, DBSelect, DBTextarea } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-my-form",
	templateUrl: "./my-form.component.html",
	imports: [DBInput, DBSelect, DBTextarea, FormField]
})
export class MyFormComponent {
	model = signal({
		username: "",
		email: "",
		country: "",
		message: ""
	});

	myForm = form(this.model, (fields) => {
		required(fields.username);
		required(fields.email);
	});

	onSubmit() {
		console.log(this.model());
	}
}
```

```html
<form (submit)="onSubmit()">
	<db-input label="Username" [formField]="myForm.username"></db-input>
	<db-input label="Email" type="email" [formField]="myForm.email"></db-input>
	<db-select label="Country" [formField]="myForm.country">
		<option value="de">Germany</option>
		<option value="at">Austria</option>
		<option value="ch">Switzerland</option>
	</db-select>
	<db-textarea label="Message" [formField]="myForm.message"></db-textarea>
	<button type="submit">Submit</button>
</form>
```

## Checked Components (Checkbox, Switch)

For boolean form fields, use `DBCheckbox` or `DBSwitch`:

```typescript
model = signal({
	acceptTerms: false,
	enableNotifications: true
});

myForm = form(this.model);
```

```html
<db-checkbox
	label="Accept Terms"
	[formField]="myForm.acceptTerms"
></db-checkbox>
<db-switch
	label="Enable Notifications"
	[formField]="myForm.enableNotifications"
></db-switch>
```

## Reading Field State

Each field in the `FieldTree` provides reactive signals for value, validation, and interaction state:

```typescript
// Current value
const username = this.myForm.username().value();

// Validation
const isValid = this.myForm.username().valid();
const errors = this.myForm.username().errors();
const touched = this.myForm.username().touched();

// Programmatic update
this.myForm.username().value.set("new value");

// Read entire model
const formData = this.model();
```

## Validation

Pass a schema function as the second argument to `form()`:

```typescript
import { form, required, minLength, email } from "@angular/forms/signals";

myForm = form(this.model, (fields) => {
	required(fields.username);
	minLength(fields.username, 3);
	required(fields.email);
	email(fields.email);
});
```

Validation errors are automatically propagated to the component via the `errors` InputSignal, which maps to the component's built-in error display.

### Controlling Validation Timing

By default, Signal Forms validation errors are displayed **immediately** — even before the user has interacted with the field. This may not be the desired user experience. In most forms, you want to show errors only after the user has touched or edited the field (i.e. after `dirty` state is reached).

You can control this behaviour using the `[validation]` property together with a helper method that maps Signal Forms field state to the component's validation mode:

```typescript
import { type FieldTree } from "@angular/forms/signals";

// Helper: only show validation state after user interaction
fieldValidation<T>(field: FieldTree<T>): "invalid" | "valid" | "no-validation" {
  if (field().dirty() && field().invalid() && !field().pending()) {
    return "invalid";
  }
  if (field().dirty() && field().valid() && !field().pending()) {
    return "valid";
  }
  return "no-validation";
}
```

Then bind `[validation]` in the template alongside `[formField]`:

```html
<db-input
	label="Username"
	[formField]="myForm.username"
	[validation]="fieldValidation(myForm.username)"
></db-input>
```

**How it works:**

| Field state                      | `fieldValidation()` returns | Effect                                     |
| -------------------------------- | --------------------------- | ------------------------------------------ |
| User has not interacted yet      | `"no-validation"`           | No validation styling or messages shown    |
| User edited and field is valid   | `"valid"`                   | Green valid state shown                    |
| User edited and field is invalid | `"invalid"`                 | Red invalid state with error message shown |

> **Tip:** If you prefer to show errors only on blur (rather than on every keystroke), check `field().touched()` instead of `field().dirty()` in the helper.

### Using Native Validation Without Signal Forms Validators

If you use `[formField]` only for value binding (no Signal Forms validators), the component falls back to native browser validation. The browser's `validationMessage` (e.g. "Value must be at least 2") will be displayed based on native HTML attributes like `required`, `min`, `max`, `pattern`, etc.

## Coexistence with Reactive Forms

Signal Forms coexists with Reactive Forms and Template-Driven Forms without conflict. The `NG_VALUE_ACCESSOR` provider is always registered, so `formControlName`, `formControl`, and `ngModel` continue to work alongside `[formField]`.

For incremental migration, use `compatForm()` to bridge existing Reactive Forms into Signal Forms:

```typescript
import { signal } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { compatForm } from "@angular/forms/signals/compat";

// Nest the existing FormControl inside a signal model
model = signal({
	name: new FormControl("", Validators.required)
});
signalForm = compatForm(this.model);
```

```html
<db-input label="Name" [formField]="signalForm.name"></db-input>
```

## How It Works (Duck-Typing)

Angular Signal Forms recognizes custom controls via Duck-Typing:

| Interface             | Required Field                  | Component Type                         |
| --------------------- | ------------------------------- | -------------------------------------- |
| `FormValueControl<T>` | `value: ModelSignal<T>`         | DBInput, DBTextarea, DBSelect, DBRadio |
| `FormCheckboxControl` | `checked: ModelSignal<boolean>` | DBCheckbox, DBSwitch                   |

Optional fields recognized by Signal Forms:

- `disabled: ModelSignal<boolean>` — disables the field
- `hidden: InputSignal<boolean>` — hides the field
- `errors: InputSignal<any>` — receives validation errors

No imports from `@angular/forms/signals` are needed in the library itself — all Duck-Typing fields use standard Angular APIs (`model()`, `input()`) available since Angular 17.

## Known Limitations (Angular 21)

- Signal Forms is marked as `@experimental` in Angular 21
- The `FormField` directive's template type-checking may conflict with components that have a `pattern` input (e.g. `DBInput`). Workaround: add `schemas: [NO_ERRORS_SCHEMA]` to the component using `[formField]`, or wait for Angular 22 where this is resolved.
- Radio button groups don't integrate well with `[formField]` yet — use signal-based `[checked]` + `(change)` bindings for radios.
- **DBCustomSelect `value` alias**: `DBCustomSelect` internally uses `values` (array) as its primary model. A `value` ModelSignal alias is provided for Signal Forms compatibility with bidirectional sync. Changes to `value` (via `[formField]`) update `values`, and user selections that update `values` are reflected back to `value`. When using Signal Forms with `DBCustomSelect`, bind via `[formField]` for the best experience.

## Further Reading

- [Angular Signal Forms Essentials](https://angular.dev/essentials/signal-forms)
- [Angular Signal Forms Custom Controls](https://angular.dev/guide/forms/custom-controls)
- [ADR-06: Angular Signal Forms Strategy](./adr/adr-06-angular-signal-forms-strategy.md)
