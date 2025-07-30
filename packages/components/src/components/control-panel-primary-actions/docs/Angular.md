## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBControlPanelPrimaryActions } from '@db-ux/ngx-core-components';

@Component({
  // ...
  imports: [..., DBControlPanelPrimaryActions],
  standalone: true
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-control-panel-primary-actions
	>ControlPanelPrimaryActions</db-control-panel-primary-actions
>
```
