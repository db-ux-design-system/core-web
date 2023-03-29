## Angular

Load SCSS globally somewhere in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42-webpack" as *;
```

Third party controls require a `ControlValueAccessor` to function with Angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

Load component within `app.module.ts`:

```typescript
import { DBRadioModule } from '@db-ui/ngx-components';
@NgModule({
  ...
  imports: [..., DBRadioModule],
  ...
})
```

Use component in template:

```html
<DBRadio ngDefaultControl [(ngModel)]="value">Label</DBRadio>
```

## How to use with Template Driven Forms

Third party controls require a `ControlValueAccessor` to function with angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

```typescript
// app.module.ts
@NgModule({
  …
  imports: [ FormsModule, …]
})
```

```html
<!-- form.component.html-->
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

```typescript
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
