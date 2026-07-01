## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import {
	DBControlPanelNavigationItem,
	DBControlPanelNavigationItemGroup,
	NavigationContentDirective
} from '@db-ux/ngx-core-components';

@Component({
  // ...
  imports: [..., DBControlPanelNavigationItem, DBControlPanelNavigationItemGroup, NavigationContentDirective],
  // ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->

<!-- Simple link item -->
<db-control-panel-navigation-item>
	<ng-container *dbNavigationContent>
		<a routerLink="mypath">NavigationItem</a>
	</ng-container>
</db-control-panel-navigation-item>

<!-- With Sub-Navigation (use db-control-panel-navigation-item-group) -->
<db-control-panel-navigation-item-group text="Navi-Group 1">
	<db-control-panel-navigation-item>
		<ng-container *dbNavigationContent>
			<a routerLink="mypath">Sub-Navi-Item 1</a>
		</ng-container>
	</db-control-panel-navigation-item>

	<db-control-panel-navigation-item>
		<ng-container *dbNavigationContent>
			<a routerLink="mypath">Sub-Navi-Item 2</a>
		</ng-container>
	</db-control-panel-navigation-item>
</db-control-panel-navigation-item-group>
```
