## Angular

For general installation and configuration look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBTextarea } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBTextarea],
  // ...
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
	message="Message"
	icon="x_placeholder"
	[value]="textarea"
	(change)="textarea = $event.target.value"
></db-textarea>
```
