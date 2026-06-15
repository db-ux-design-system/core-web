## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBControlPanelMetaNavigation } from '@db-ux/ngx-core-components';

@Component({
  // ...
  imports: [..., DBControlPanelMetaNavigation],
  standalone: true
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-control-panel-meta-navigation
	>ControlPanelMetaNavigation</db-control-panel-meta-navigation
>
```
