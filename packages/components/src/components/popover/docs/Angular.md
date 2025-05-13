## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBPopover } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBPopover],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-popover>
	<db-button trigger> Hover on me to open Popover </db-button>
	Use any html code here like e.g. a <code>button</code>:
	<button type="button">Test</button>
</db-popover>
```
