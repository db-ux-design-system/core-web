## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBSelect } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBSelect],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-select>
	<option value="test1">Test1</option>
	<option value="test2">Test2</option>
	<option value="test3">Test3</option>
	<option value="test4">Test4</option>
	<option value="test5">Test5</option>
</db-select>
```
