## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBControlPanelFlatIcon } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBControlPanelFlatIcon],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-control-panel-flat-icon>ControlPanelFlatIcon</db-control-panel-flat-icon>
```
