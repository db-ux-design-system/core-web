## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBSelectModule } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBSelectModule],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-select>
	<option value="test1">Test1</option>
	<option value="test2">Test2</option>
</db-select>
```
