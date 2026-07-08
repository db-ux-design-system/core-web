## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import { DBCustomSelect } from '@db-ux/ngx-core-components';

@Component({
	// ...
	imports: [
		// ...,
		DBCustomSelect
	],
	standalone: true
	// ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-custom-select label="Label" placeholder="Placeholder" [options]="options" />
```

```ts app.component.ts
// app.component.ts
import { Component } from "@angular/core";

@Component({
	selector: "app-app",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	options = [
		{ value: "Option 1" },
		{ value: "Option 2" },
		{ value: "Option 3" },
		{ value: "Option 4" },
		{ value: "Option 5" }
	];
}
```

## How to use with Signal Forms

[Angular Signal Forms](https://angular.dev/essentials/signal-forms) (Angular ≥ 21) are supported via Duck-Typing. The `DBCustomSelect` component exposes a `values` ModelSignal that Angular's `[formField]` directive recognizes automatically.

```ts app.component.ts
//app.component.ts
import { DBCustomSelect } from '@db-ux/ngx-core-components';
import { FormField } from '@angular/forms/signals';

@Component({
	// ...
	imports: [
		// ...,
		DBCustomSelect,
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
	options = [
		{ value: "Option 1", id: "option-1" },
		{ value: "Option 2", id: "option-2" },
		{ value: "Option 3", id: "option-3" }
	];
	model = signal({ values: ["option-2"] });
	myForm = form(this.model);

	onFormSubmit(): void {
		alert(JSON.stringify(this.model()));
	}
}
```

```html form.component.html
<!-- form.component.html -->
<form (submit)="onFormSubmit()">
	<db-custom-select
		[options]="options"
		label="Custom Select"
		[formField]="myForm.values"
	></db-custom-select>
	<button type="submit">Submit</button>
</form>

<h2>Output</h2>
<dl>
	<dt>custom-select's values</dt>
	<dd>{{ myForm.values().value() || "No selection" }}</dd>
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
<db-custom-select
	label="Custom Select"
	[options]="options"
	[formField]="myForm.values"
	[validation]="fieldValidation(myForm.values)"
></db-custom-select>
```

### Invalid message fallback cascade

When a form field becomes invalid, the displayed error message is resolved through the following priority chain (first match wins):

1. **`invalidMessage` prop** — explicitly set on the component
2. **Signal Forms schema message** — `errors[0].message` from the form schema validators
3. **Browser default** — native `validationMessage` (e.g. "Please select an item in the list" for `required`)
4. **`"TODO: Add an invalidMessage"`** — fallback indicating a custom message should be provided

## How to use with Reactive Forms

Third party controls require a ControlValueAccessor to function with angular forms.
Our custom-select component implements this interface so you can use it like any other native element with reactive Forms:

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
	<db-custom-select
		[options]="options"
		label="Custom Select"
		[formControl]="formControl"
	></db-custom-select>
</form>

<h2>Output</h2>
<dl>
	<dt>custom-select's values</dt>
	<dd>{{ formControl.value }}</dd>
</dl>
```

```ts form.component.ts
// form.component.ts
export class FormComponent {
	options = [
		{ value: "Option 1", id: "option-1" },
		{ value: "Option 2", id: "option-2" },
		{ value: "Option 3", id: "option-3" }
	];
	formControl = new FormControl(["option-2"]);
	form = new FormGroup({ select: this.formControl });

	onFormSubmit(): void {
		alert(JSON.stringify(this.form.value));
	}
}
```

## How to use with Template Driven Forms

Third party controls require a ControlValueAccessor to function with angular forms.
Our custom-select component implements this interface so you can use it like any other native element with ngModel:

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
	<db-custom-select
		[options]="options"
		label="Custom Select"
		[(ngModel)]="selected"
		name="custom-select"
	></db-custom-select>
	<db-button type="button" variant="brand" (click)="showValues()"
		>Get values</db-button
	>
</form>

<h2>Output</h2>
<dl>
	<dt>custom-select's values</dt>
	<dd>{{ selected }}</dd>
</dl>
```

```ts form.component.ts
// form.component.ts
export class FormComponent {
	options = [
		{ value: "Option 1", id: "option-1" },
		{ value: "Option 2", id: "option-2" },
		{ value: "Option 3", id: "option-3" }
	];
	selected = ["option-2"];
	showValues(): void {
		alert(JSON.stringify({ selected: this.selected }));
	}
}
```
