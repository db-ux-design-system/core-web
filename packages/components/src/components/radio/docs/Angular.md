## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBRadioModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBRadioModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<ul>
	<li *ngFor="let radioName of radioNames">
		<db-radio
			(change)="radio = radioName"
			[label]="'Radio ' + radioName"
			[value]="radioName"
			name="RadioGroup"
		></db-radio>
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
	radioNames = ["X", "Y", "Z"];
	radio = "";
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
	<DBRadio ngDefaultControl [(ngModel)]="radio">Label</DBRadio>
	<DBButton type="button" variant="primary" (click)="showValues()"
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
