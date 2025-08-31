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

## Angular Forms Validation Support

The input component supports native Angular Forms validation with conditional error messages. Use `db-infotext` components with the `error` attribute to show specific validation messages:

```html
<!-- Reactive Forms with Validation -->
<form [formGroup]="validationForm">
	<db-input 
		formControlName="username" 
		label="Username"
		placeholder="Enter username">
		<db-infotext error="required" semantic="critical">Username is required</db-infotext>
		<db-infotext error="minlength" semantic="critical">Username must be at least 3 characters</db-infotext>
		<db-infotext error="maxlength" semantic="critical">Username cannot exceed 100 characters</db-infotext>
		<db-infotext error="usernameTaken" semantic="critical">This username is already taken</db-infotext>
	</db-input>
</form>
```

```typescript
// form.component.ts with validators
validationForm = new FormGroup({
	username: new FormControl('', [
		Validators.required,
		Validators.minLength(3),
		Validators.maxLength(100),
		this.customUsernameValidator
	])
});

// Custom validator example
customUsernameValidator(control: FormControl) {
	const value = control.value || '';
	if (value === 'admin' || value === 'test') {
		return { usernameTaken: true };
	}
	return null;
}
```

**Key Features:**
- `db-infotext` with `error` attribute only shows when the specific FormControl error exists
- Supports both built-in validators (`required`, `minlength`, `maxlength`, `email`, etc.) and custom validators
- Multiple validation messages per input component
- Seamless integration with existing validation styling (`semantic="critical"` for error messages)

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
		label="Textinput"
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
