## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBPopoverModule } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBPopoverModule],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-button describedbyid="popover-01">
	Hover on me to open Popover
	<db-popover id="popover-01">Popover</db-popover>
</db-button>
```
