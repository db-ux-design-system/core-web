## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBNavigationItemGroup } from '@db-ux/ngx-core-components';

@Component({
  // ...
  imports: [..., DBNavigationItemGroup],
  standalone: true
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-navigation-item-group>NavigationItemGroup</db-navigation-item-group>
```
