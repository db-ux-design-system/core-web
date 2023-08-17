## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBCheckboxModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBCheckboxModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<ul>
	<li *ngFor="let checkboxName of checkboxNames">
		<db-checkbox
			(change)="checkbox = checkboxName"
			[label]="'Checkbox ' + checkboxName"
			[value]="checkboxName"
			name="CheckboxGroup"
		></db-checkbox>
	</li>
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

```ts app.module.ts
// app.module.ts
@NgModule({
  …
  imports: [ FormsModule, …]
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
	<db-button type="button" variant="primary" (click)="showValues()"
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
