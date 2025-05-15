## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import { DBShell, DBHeader } from '@db-ux/ngx-core-components';

@Component({
	// ...
	imports: [
		// ...,
		DBShell, DBHeader
    ],
	// ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-shell>
	<db-header header>...</db-header>
	<main class="db-main">Main Shell</main>
</db-shell>
```
