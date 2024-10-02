## Angular

For general installation and configuration take a look at
the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import { DBCard } from '@db-ui/ngx-components';

@Component({
	// ...
	imports: [
		// ...,
		DBCard
    ],
	// ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-card>Card content</db-card>
```
