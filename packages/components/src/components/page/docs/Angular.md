## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import { DBPage, DBHeader } from '@db-ux/ngx-core-components';

@Component({
	// ...
	imports: [
		// ...,
		DBPage, DBHeader
    ],
	// ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-page>
	<db-header header>...</db-header>
	<main class="db-main">Main Page</main>
</db-page>
```
