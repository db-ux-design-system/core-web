## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBNavigationItemModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBNavigationItemModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<a routerLink="mypath">
	<db-navigation-item>NavigationItem</db-navigation-item>
</a>
```
