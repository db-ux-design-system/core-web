## Angular

For general installation and configuration look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBTextarea } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBTextarea],
  // ...
})
```

### Use component

```ts app.component.ts
import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	textarea = "default value";
}
```

```html app.component.html
<!-- app.component.html -->

<db-textarea
	name="textarea"
	label="Textarea Controlled"
	placeholder="Placeholder"
	message="Message"
	icon="x_placeholder"
	[value]="textarea"
	(change)="textarea = $event.target.value"
></db-textarea>
```

## How to use with Signal Forms

[Angular Signal Forms](https://angular.dev/essentials/signal-forms) (Angular ≥ 21) are supported via Duck-Typing. The `DBTextarea` component exposes a `value` ModelSignal that Angular's `[formField]` directive recognizes automatically.

```ts app.component.ts
//app.component.ts
import { DBTextarea } from '@db-ux/ngx-core-components';
import { FormField } from '@angular/forms/signals';

@Component({
	// ...
	imports: [
		// ...,
		DBTextarea,
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
	model = signal({ message: "" });
	myForm = form(this.model);

	onFormSubmit(): void {
		alert(JSON.stringify(this.model()));
	}
}
```

```html form.component.html
<!-- form.component.html -->
<form (submit)="onFormSubmit()">
	<db-textarea
		label="Message"
		placeholder="Placeholder"
		[formField]="myForm.message"
	></db-textarea>
	<button type="submit">Submit</button>
</form>

<h2>Output</h2>
<dl>
	<dt>textarea's value</dt>
	<dd>{{ myForm.message().value() || "No message set" }}</dd>
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
<db-textarea
	label="Message"
	[formField]="myForm.message"
	[validation]="fieldValidation(myForm.message)"
></db-textarea>
```

### Invalid message fallback cascade

When a form field becomes invalid, the displayed error message is resolved through the following priority chain (first match wins):

1. **`invalidMessage` prop** — explicitly set on the component
2. **Signal Forms schema message** — `errors[0].message` from the form schema validators
3. **Browser default** — native `validationMessage` (e.g. "Please fill out this field" for `required`)
4. **`"TODO: Add an invalidMessage"`** — fallback indicating a custom message should be provided

This means for simple HTML constraints (`required`, `minlength`, `maxlength`, `pattern`), the browser's localized message is used automatically when no explicit message is configured.

## How to use with Reactive Forms

Third party controls require a ControlValueAccessor to function with angular forms.
Our textarea component implements this interface so you can use it like any other native element with reactive Forms:

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

```html form.component.html
<!-- form.component.html -->
<form [formGroup]="form" (submit)="onFormSubmit()">
	<db-textarea
		label="Textarea"
		placeholder="Placeholder"
		formControlName="textarea"
	>
	</db-textarea>
</form>

<h2>Output</h2>
<dl>
	<dt>textarea's value</dt>
	<dd>
		{{ form.get("textarea")?.value ? form.get("textarea")?.value : "No value
		set" }}
	</dd>
</dl>
```

```ts form.component.ts
// form.component.ts
export class FormComponent {
	form = new FormGroup({
		textarea: new FormControl("Filled with formControl")
	});

	onFormSubmit(): void {
		alert(JSON.stringify(this.form.value));
	}
}
```

## How to use with Template Driven Forms

Third party controls require a ControlValueAccessor to function with angular forms.
Our textarea component implements this interface so you can use it like any other native element with ngModel:

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

```html form.component.html
<!-- form.component.html -->
<form>
	<DBTextarea
		ngDefaultControl
		[(ngModel)]="textarea"
		label="Textarea"
		placeholder="Placeholder"
	></DBTextarea>
	<DBButton type="button" variant="brand" (click)="showValues()"
		>Get textarea value</DBButton
	>
</form>

<h2>Output</h2>
<dl>
	<dt>textarea's value</dt>
	<dd>{{ textarea ? textarea : "No value set" }}</dd>
</dl>
```

```ts form.component.ts
// form.component.ts
export class FormComponent {
	textarea = "";
	showValues(): void {
		alert(JSON.stringify({ textarea: this.textarea }));
	}
}
```
