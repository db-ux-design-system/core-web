## General

For general installation and configuration look at the [project documentation](https://www.npmjs.com/package/@db-ux/ngx-core-components).

## Usage

```ts app.component.ts
// app.component.ts
import { DBControlPanelActions1, DBControlPanelActions2 } from '@db-ux/ngx-core-components';

@Component({
  // ...
  imports: [..., DBControlPanelActions1, DBControlPanelActions2],
  standalone: true
  // ...
})
```

```html app.component.html
<!-- app.component.html -->
<db-control-panel-actions-1>ControlPanelActions1</db-control-panel-actions-1>
<db-control-panel-actions-2>ControlPanelActions2</db-control-panel-actions-2>
```
