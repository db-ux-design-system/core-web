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
