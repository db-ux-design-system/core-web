## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBInfotextModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBInfotextModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-infotext>Infotext</db-infotext>
```
