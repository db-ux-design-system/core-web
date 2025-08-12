## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBTooltip } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBTooltip],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-button aria-describedby="tooltip-01">
	Hover on me to open Tooltip
	<db-tooltip id="tooltip-01">Tooltip</db-tooltip>
</db-button>
```
