## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import { DBControlPanelNavigationItem, NavigationContentDirective } from '@db-ux/ngx-core-components';

@Component({
  // ...
  imports: [..., DBControlPanelNavigationItem, NavigationContentDirective],
  // ...
})

```

### Use component

We try to set `areaPopup` (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set `areaPopup` with `true/false` for sub-navigation or link

```html app.component.html
<!-- app.component.html -->

<!-- Only link -->
<db-control-panel-navigation-item>
	<ng-container *dbNavigationContent>
		<a routerLink="mypath">NavigationItem</a>
	</ng-container>
</db-control-panel-navigation-item>

<!-- With Sub-Navigation -->

<db-control-panel-navigation-item>
	<ng-container *dbNavigationContent>Navi-Item 1</ng-container>
	<ng-container sub-navigation>
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
	</ng-container>
</db-control-panel-navigation-item>
```
