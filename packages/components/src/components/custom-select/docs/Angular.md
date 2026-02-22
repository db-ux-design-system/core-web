## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import { DBCustomSelect } from '@db-ux/ngx-core-components';

@Component({
	// ...
	imports: [
		// ...,
		DBCustomSelect
    ],
	standalone: true
	// ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-custom-select label="Label" placeholder="Placeholder" [options]="options" />
```

```ts app.component.ts
// app.component.ts
import { Component } from "@angular/core";

@Component({
	selector: "app-app",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	options = [
		{ value: "Option 1" },
		{ value: "Option 2" },
		{ value: "Option 3" },
		{ value: "Option 4" },
		{ value: "Option 5" }
	];
}
```
