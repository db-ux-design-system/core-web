## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

You can't use the component standalone!

```ts app.module.ts
//app.module.ts
import { DBTab, DBTabList, DBTabPanel, DBTabs } from '@db-ui/ngx-components';

@NgModule({
  ...
  standalone: true,
  imports: [..., DBTab,DBTabList,DBTabPanel,DBTabs],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-tabs>
	<db-tab-list>
		<db-tab>Tab 1</db-tab>
		<db-tab>Tab 2</db-tab>
		<db-tab>Tab 3</db-tab>
	</db-tab-list>
	<db-tab-panel>Tab Panel 1</db-tab-panel>
	<db-tab-panel>Tab Panel 2</db-tab-panel>
	<db-tab-panel>Tab Panel 3</db-tab-panel>
</db-tabs>
```
