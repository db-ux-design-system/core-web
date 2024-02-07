## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBSectionModule } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBSectionModule],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-section variant="full">Section</db-section>
```
