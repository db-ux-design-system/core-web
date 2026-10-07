## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBBreadcrumb, DBBreadcrumbItem } from '@db-ux/ngx-core-components';

@Component({
  // ...
  imports: [..., DBBreadcrumb, DBBreadcrumbItem],
  standalone: true
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-breadcrumb aria-label="Breadcrumb">
	<db-breadcrumb-item>
		<a href="/">Home</a>
	</db-breadcrumb-item>
	<db-breadcrumb-item>
		<a href="/section">Section</a>
	</db-breadcrumb-item>
	<db-breadcrumb-item>
		<a href="/section/page" aria-current="page">Page</a>
	</db-breadcrumb-item>
</db-breadcrumb>
```
