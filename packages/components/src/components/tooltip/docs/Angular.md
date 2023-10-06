## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBTooltipModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBTooltipModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-button>
	Hover on me to open Tooltip
	<db-tooltip>Tooltip</db-tooltip>
</db-button>
```
