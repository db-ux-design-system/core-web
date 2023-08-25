## Angular

For general installation and configuration look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBTextareaModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBTextareaModule],
  ...
})

```

### Use component

```ts app.component.ts
import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	textarea = "default value";
}
```

```html app.component.html
<!-- app.component.html -->

<db-textarea
	name="textarea"
	label="Textarea Controlled"
	placeholder="Placeholder"
	description="Description"
	icon="account"
	[value]="textarea"
	(change)="textarea = $event.target.value"
></db-textarea>
```
