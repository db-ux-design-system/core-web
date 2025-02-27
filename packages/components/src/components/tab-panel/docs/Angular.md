## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

You can't use the component standalone!

```ts app.module.ts
//app.module.ts
import { DBTabItem, DBTabList, DBTabPanel, DBTabs } from '@db-ux/ngx-core-components';

@NgModule({
  ...
  standalone: true,
  imports: [..., DBTabItem,DBTabList,DBTabPanel,DBTabs],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-tabs>
	<db-tab-list>
		<db-tab-item>Tab 1</db-tab-item>
		<db-tab-item>Tab 2</db-tab-item>
		<db-tab-item>Tab 3</db-tab-item>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>
```
