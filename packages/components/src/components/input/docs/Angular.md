## Angular

Load SCSS globally within `styles.scss` in your app:

```scss
@forward "@db-ux/core-components/build/styles/rollup";
```

Load component within `app.component.ts`:

```ts app.component.ts
//app.component.ts
import { DBInput } from '@db-ux/ngx-core-components';

@Component({
	// ...
	imports: [
		// ...,
		DBInput
	],
	// ...
})
```

Use component in template:

```html
<DBInput
	label="Label"
	placeholder="placeholder"
	description="Description"
	(change)="onInputChange()"
></DBInput>
```

## How to use with Signal Forms

[Angular Signal Forms](https://angular.dev/essentials/signal-forms) (Angular ≥ 21) are supported via Duck-Typing. The `DBInput` component exposes a `value` ModelSignal that Angular's `[formField]` directive recognizes automatically.

```ts app.component.ts
//app.component.ts
import { DBInput } from '@db-ux/ngx-core-components';
import { FormField } from '@angular/forms/signals';

@Component({
	// ...
	imports: [
		// ...,
		DBInput,
		FormField
	],
	// ...
})
```

```ts form.component.ts
// form.component.ts
import { Component, signal } from "@angular/core";
import { form } from "@angular/forms/signals";

export class FormComponent {
	model = signal({ input: "" });
	myForm = form(this.model);

	onFormSubmit(): void {
		alert(JSON.stringify(this.model()));
	}
}
```

```html form.component.html
<!-- form.component.html -->
<form (submit)="onFormSubmit()">
	<db-input
		label="Input"
		placeholder="Placeholder"
		[formField]="myForm.input"
	></db-input>
	<button type="submit">Submit</button>
</form>

<h2>Output</h2>
<dl>
	<dt>input's value</dt>
	<dd>{{ myForm.input().value() || "No Input set" }}</dd>
</dl>
```

### Controlling validation timing

By default, Signal Forms validation errors appear immediately. To show errors only after user interaction, use a helper method with the `[validation]` property:

```typescript
import { type FieldTree } from "@angular/forms/signals";

fieldValidation<T>(field: FieldTree<T>): "invalid" | "valid" | "no-validation" {
  if (field().dirty() && field().invalid() && !field().pending()) return "invalid";
  if (field().dirty() && field().valid() && !field().pending()) return "valid";
  return "no-validation";
}
```

```html
<db-input
	label="Input"
	[formField]="myForm.input"
	[validation]="fieldValidation(myForm.input)"
></db-input>
```

### Invalid message fallback cascade

When a form field becomes invalid, the displayed error message is resolved through the following priority chain (first match wins):

1. **`invalidMessage` prop** — explicitly set on the component
2. **Signal Forms schema message** — `errors[0].message` from the form schema validators
3. **Browser default** — native `validationMessage` (e.g. "Please fill out this field" for `required`)
4. **`"TODO: Add an invalidMessage"`** — fallback indicating a custom message should be provided

This means for simple HTML constraints (`required`, `minlength`, `maxlength`, `pattern`, `type`), the browser's localized message is used automatically when no explicit message is configured.

## How to use with Reactive Forms

Third party controls require a ControlValueAccessor to function with angular forms.
Our input component implements this interface so you can use it like any other native element with reactive Forms:

> Currently we do not support onTouch/touched and native validation via FormControl. If your interested in contributing, you're very welcome ;)

```ts app.component.ts
//app.component.ts
import { ReactiveFormsModule } from '@angular/forms';

@Component({
	// ...
	imports: [
		// ...,
		ReactiveFormsModule
	],
	// ...
})
```

```html
<!-- form.component.html-->
<form [formGroup]="form" (submit)="onFormSubmit()">
	<db-input label="Input" placeholder="Placeholder" formControlName="input">
	</db-input>
</form>

<h2>Output</h2>
<dl>
	<dt>input's value</dt>
	<dd>
		{{ form.get("input")?.value ? form.get("input")?.value : "No Input set"
		}}
	</dd>
</dl>
```

```typescript
// form.component.ts
export class FormComponent {
	form = new FormGroup({
		input: new FormControl("Filled with formControl")
	});

	onFormSubmit(): void {
		alert(JSON.stringify(this.form.value));
	}
}
```

## How to use with Template driven Forms

Third party controls require a ControlValueAccessor to function with angular forms.
Our input component implements this interface so you can use it like any other native element with ngModel:

```ts app.component.ts
//app.component.ts
import { FormsModule } from '@angular/forms';

@Component({
	// ...
	imports: [
		// ...,
		FormsModule
	],
	// ...
})
```

```html
<!-- form.component.html-->
<form>
	<DBInput
		ngDefaultControl
		[(ngModel)]="input"
		label="Text Input"
		placeholder="Placeholder"
		description="Description"
	></DBInput>
	<DBButton type="button" variant="brand" (click)="showValues()"
		>Get input value</DBButton
	>
</form>

<h2>Output</h2>
<dl>
	<dt>input's value</dt>
	<dd>{{ input ? input : "No Input set" }}</dd>
</dl>
```

```typescript
// form.component.ts
export class FormComponent {
	input = "";
	showValues(): void {
		alert(JSON.stringify({ input: this.input }));
	}
}
```
