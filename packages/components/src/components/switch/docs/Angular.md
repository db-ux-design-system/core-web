## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBSwitch } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBSwitch],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-switch>Switch</db-switch>
```

## How to use with Signal Forms

[Angular Signal Forms](https://angular.dev/essentials/signal-forms) (Angular ≥ 21) are supported via Duck-Typing. The `DBSwitch` component exposes a `checked` ModelSignal that Angular's `[formField]` directive recognizes automatically as a `FormCheckboxControl`.

```ts app.component.ts
//app.component.ts
import { DBSwitch } from '@db-ux/ngx-core-components';
import { FormField } from '@angular/forms/signals';

@Component({
	// ...
	imports: [
		// ...,
		DBSwitch,
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
	model = signal({ enableNotifications: true });
	myForm = form(this.model);

	onFormSubmit(): void {
		alert(JSON.stringify(this.model()));
	}
}
```

```html form.component.html
<!-- form.component.html -->
<form (submit)="onFormSubmit()">
	<db-switch
		label="Enable Notifications"
		[formField]="myForm.enableNotifications"
	></db-switch>
	<button type="submit">Submit</button>
</form>

<h2>Output</h2>
<dl>
	<dt>switch's value</dt>
	<dd>
		notifications {{ myForm.enableNotifications().value() ? "enabled" :
		"disabled" }}
	</dd>
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
<db-switch
	label="Enable Notifications"
	[formField]="myForm.enableNotifications"
	[validation]="fieldValidation(myForm.enableNotifications)"
></db-switch>
```

### Invalid message fallback cascade

When a form field becomes invalid, the displayed error message is resolved through the following priority chain (first match wins):

1. **`invalidMessage` prop** — explicitly set on the component
2. **Signal Forms schema message** — `errors[0].message` from the form schema validators
3. **Browser default** — native `validationMessage` (e.g. "Please check this box if you want to proceed" for `required`)
4. **`"TODO: Add an invalidMessage"`** — fallback indicating a custom message should be provided

## How to use with Template Driven Forms

Third party controls require a `ControlValueAccessor` to function with angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

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
	<db-switch
		[(ngModel)]="switchValue"
		name="switch"
		label="Switch"
	></db-switch>
	<db-button type="button" variant="brand" (click)="showValues()"
		>Get switch value</db-button
	>
</form>

<h2>Output</h2>
<dl>
	<dt>switch's value</dt>
	<dd>switch {{ switchValue ? "on" : "off" }}</dd>
</dl>
```

```ts form.component.ts
// form.component.ts
export class FormComponent {
	switchValue = false;
	showValues(): void {
		alert(JSON.stringify({ switch: this.switchValue }));
	}
}
```

## How to use with Reactive Forms

coming soon … if your interested in contributing, you're very welcome ;)
