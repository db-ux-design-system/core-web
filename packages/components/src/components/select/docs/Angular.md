## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBSelectModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBSelectModule],
  ...
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
