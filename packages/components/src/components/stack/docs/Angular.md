## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBStack } from '@db-ux/ngx-core-components';

@Component({
  // ...
	standalone: true,
  imports: [..., DBStack],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-stack>
	<span>Test 1</span>
	<span>Test 2</span>
	<span>Test 3</span>
</db-stack>
```
