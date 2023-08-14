## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBPageModule, DBHeaderModule } from '@db-ui/ngx-components';

@NgModule({
	...
	imports: [..., DBPageModule, DBHeaderModule],
	...
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
