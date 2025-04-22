## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBCheckbox } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBCheckbox],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<ul>
	@for (checkboxName of checkboxNames; track checkboxName) {
	<li>
		<db-checkbox
			(change)="checkbox = checkboxName"
			[label]="'Checkbox ' + checkboxName"
			[value]="checkboxName"
			name="CheckboxGroup"
		></db-checkbox>
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
	checkboxNames = ["X", "Y", "Z"];
	checkbox = "";
}
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
	<db-checkbox
		(change)="checkbox = $event.target.checked"
		name="checkbox"
		label="Checkbox"
	></db-checkbox>
	<db-button type="button" variant="brand" (click)="showValues()"
		>Get checkbox value</db-button
	>
</form>

<h2>Output</h2>
<dl>
	<dt>checkbox's value</dt>
	<dd>checkbox {{ checkbox ? "" : "un" }}checked</dd>
</dl>
```

```ts form.component.ts
// form.component.ts
export class FormComponent {
	checkbox = "";
	showValues(): void {
		alert(JSON.stringify({ checkbox: this.checkbox }));
	}
}
```

## How to use with Reactive Forms

coming soon … if your interested in contributing, you're very welcome ;)
