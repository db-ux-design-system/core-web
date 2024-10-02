## Angular

For general installation and configuration take a look at
the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBBrand } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBBrand],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-brand>Brand</db-brand>
```
