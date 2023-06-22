## Angular

Load SCSS globally within `styles.scss` in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42-webpack" as *;
```

Load component within `app.module.ts`:

```typescript
import { DBInputModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBInputModule],
  ...
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

## How to use with Template Driven Forms

Third party controls require a ControlValueAccessor to function with angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
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
	<DBInput
		ngDefaultControl
		[(ngModel)]="input"
		label="Textinput"
		placeholder="Placeholder"
		description="Description"
	></DBInput>
	<DBButton type="button" variant="primary" (click)="showValues()"
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

## How to use with Reactive Forms

coming soon … if your interested in contributing, you're very welcome ;)
