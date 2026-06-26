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

## Coexistence with Reactive Forms

Signal Forms coexists with Reactive Forms and Template-Driven Forms without conflict. The `NG_VALUE_ACCESSOR` provider is always registered, so `formControlName`, `formControl`, and `ngModel` continue to work alongside `[formField]`.

For incremental migration, use `compatForm()` to wrap an existing `FormGroup`:

```typescript
import { FormGroup, FormControl } from "@angular/forms";
import { compatForm } from "@angular/forms/signals";

legacyForm = new FormGroup({ name: new FormControl("") });
signalForm = compatForm(this.legacyForm);
```

```html
<db-input label="Name" [formField]="signalForm.controls.name"></db-input>
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
- The `FormField` directive's template type-checking may conflict with components that have a `pattern` input (e.g. `DBInput`). Workaround: set `strictTemplates: false` in `angularCompilerOptions` or wait for Angular 22 where this is resolved.
- Radio button groups don't integrate well with `[formField]` yet — use signal-based `[checked]` + `(change)` bindings for radios.

## Further Reading

- [Angular Signal Forms Essentials](https://angular.dev/essentials/signal-forms)
- [Angular Signal Forms Custom Controls](https://angular.dev/guide/forms/custom-controls)
- [ADR-06: Angular Signal Forms Strategy](./adr/adr-06-angular-signal-forms-strategy.md)
