## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBSelect } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBSelect],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-select>
	<option value="test1">Test1</option>
	<option value="test2">Test2</option>
	<option value="test3">Test3</option>
	<option value="test4">Test4</option>
	<option value="test5">Test5</option>
</db-select>
```

## How to use with Signal Forms

[Angular Signal Forms](https://angular.dev/essentials/signal-forms) (Angular ≥ 21) are supported via Duck-Typing. The `DBSelect` component exposes a `value` ModelSignal that Angular's `[formField]` directive recognizes automatically.

```ts app.component.ts
//app.component.ts
import { DBSelect } from '@db-ux/ngx-core-components';
import { FormField } from '@angular/forms/signals';

@Component({
	// ...
	imports: [
		// ...,
		DBSelect,
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
	model = signal({ country: "" });
	myForm = form(this.model);

	onFormSubmit(): void {
		alert(JSON.stringify(this.model()));
	}
}
```

```html form.component.html
<!-- form.component.html -->
<form (submit)="onFormSubmit()">
	<db-select label="Country" [formField]="myForm.country">
		<option value="de">Germany</option>
		<option value="at">Austria</option>
		<option value="ch">Switzerland</option>
	</db-select>
	<button type="submit">Submit</button>
</form>

<h2>Output</h2>
<dl>
	<dt>select's value</dt>
	<dd>{{ myForm.country().value() || "No selection" }}</dd>
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
<db-select
	label="Country"
	[formField]="myForm.country"
	[validation]="fieldValidation(myForm.country)"
>
	<option value="de">Germany</option>
</db-select>
```

### Invalid message fallback cascade

When a form field becomes invalid, the displayed error message is resolved through the following priority chain (first match wins):

1. **`invalidMessage` prop** — explicitly set on the component
2. **Signal Forms schema message** — `errors[0].message` from the form schema validators
3. **Browser default** — native `validationMessage` (e.g. "Please select an item in the list" for `required`)
4. **`"TODO: Add an invalidMessage"`** — fallback indicating a custom message should be provided

This means for simple HTML constraints (`required`), the browser's localized message is used automatically when no explicit message is configured.

## How to use with Reactive Forms

Third party controls require a ControlValueAccessor to function with angular forms.
Our select component implements this interface so you can use it like any other native element with reactive Forms:

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
	<db-select label="Select" formControlName="select">
		<option value="test1">Test1</option>
		<option value="test2">Test2</option>
		<option value="test3">Test3</option>
	</db-select>
</form>

<h2>Output</h2>
<dl>
	<dt>select's value</dt>
	<dd>
		{{ form.get("select")?.value ? form.get("select")?.value : "No
		selection" }}
	</dd>
</dl>
```

```ts form.component.ts
// form.component.ts
export class FormComponent {
	form = new FormGroup({
		select: new FormControl("test1")
	});

	onFormSubmit(): void {
		alert(JSON.stringify(this.form.value));
	}
}
```

## How to use with Template Driven Forms

Third party controls require a ControlValueAccessor to function with angular forms.
Our select component implements this interface so you can use it like any other native element with ngModel:

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
	<DBSelect ngDefaultControl [(ngModel)]="select" label="Select">
		<option value="test1">Test1</option>
		<option value="test2">Test2</option>
		<option value="test3">Test3</option>
	</DBSelect>
	<DBButton type="button" variant="brand" (click)="showValues()"
		>Get select value</DBButton
	>
</form>

<h2>Output</h2>
<dl>
	<dt>select's value</dt>
	<dd>{{ select ? select : "No selection" }}</dd>
</dl>
```

```ts form.component.ts
// form.component.ts
export class FormComponent {
	select = "";
	showValues(): void {
		alert(JSON.stringify({ select: this.select }));
	}
}
```
