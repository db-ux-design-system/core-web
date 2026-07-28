## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBRadio } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBRadio],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<ul>
	@for (radioName of radioNames; track radioName) {
	<li>
		<db-radio
			(change)="radio = radioName"
			[label]="'Radio ' + radioName"
			[value]="radioName"
			name="RadioGroup"
		></db-radio>
	</li>
	}
</ul>
```

```ts app.component.ts
// app.component.ts
import { Component } from "@angular/core";

@Component({
	selector: "app-app",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	radioNames = ["X", "Y", "Z"];
	radio = "";
}
```

## How to use with Signal Forms

[Angular Signal Forms](https://angular.dev/essentials/signal-forms) (Angular ≥ 21) are partially supported for radio buttons. Due to a known limitation, radio button groups don't integrate well with `[formField]` yet. Use signal-based `(change)` bindings instead:

```ts app.component.ts
//app.component.ts
import { DBRadio } from '@db-ux/ngx-core-components';

@Component({
	// ...
	imports: [
		// ...,
		DBRadio
	],
	// ...
})
```

```ts form.component.ts
// form.component.ts
import { Component, signal } from "@angular/core";

export class FormComponent {
	selectedRadio = signal("");

	handleRadioChange(event: Event): void {
		this.selectedRadio.set((event.target as HTMLInputElement).value);
	}

	onFormSubmit(): void {
		alert(JSON.stringify({ radio: this.selectedRadio() }));
	}
}
```

```html form.component.html
<!-- form.component.html -->
<form (submit)="onFormSubmit()">
	<db-radio
		(change)="handleRadioChange($event)"
		value="option-1"
		name="radio-group"
		label="Option 1"
	></db-radio>
	<db-radio
		(change)="handleRadioChange($event)"
		value="option-2"
		name="radio-group"
		label="Option 2"
	></db-radio>
	<db-radio
		(change)="handleRadioChange($event)"
		value="option-3"
		name="radio-group"
		label="Option 3"
	></db-radio>
	<button type="submit">Submit</button>
</form>

<h2>Output</h2>
<dl>
	<dt>radio's value</dt>
	<dd>{{ selectedRadio() || "No radio set" }}</dd>
</dl>
```

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
	<DBRadio ngDefaultControl [(ngModel)]="radio">Label</DBRadio>
	<DBButton type="button" variant="brand" (click)="showValues()"
		>Get radio value</DBButton
	>
</form>

<h2>Output</h2>
<dl>
	<dt>radio's value</dt>
	<dd>{{ radio ? radio : "No radio set" }}</dd>
</dl>
```

```ts form.component.ts
// form.component.ts
export class FormComponent {
	radio = "";
	showValues(): void {
		alert(JSON.stringify({ radio: this.radio }));
	}
}
```

## How to use with Reactive Forms

coming soon … if your interested in contributing, you're very welcome ;)
