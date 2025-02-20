## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBSwitch } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBSwitch],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-switch>Switch</db-switch>
```
