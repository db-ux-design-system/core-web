## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBPopover } from '@db-ui/ngx-components';

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
<db-popover id="popover-01">
	<db-button trigger describedbyid="popover-01">
		Hover on me to open Popover
	</db-button>
	Popover
</db-popover>
```
