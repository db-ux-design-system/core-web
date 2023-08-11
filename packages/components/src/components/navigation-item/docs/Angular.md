## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBNavigationItemModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  declarations: [...,NavigationContentDirective],
  imports: [..., DBNavigationItemModule],
  ...
})

```

### Use component

We try to set `areaPopup` (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set `areaPopup` with `true/false` for sub-navigation or link

```html app.component.html
<!-- app.component.html -->

<!-- Only link -->
<db-navigation-item [areaPopup]="false">
	<ng-container *dbNavigationContent>
		<a routerLink="mypath">NavigationItem</a>
	</ng-container>
</db-navigation-item>

<!-- With Sub-Navigation -->

<db-navigation-item [areaPopup]="true">
	<ng-container *dbNavigationContent>Navi-Item 1</ng-container>
	<ng-container sub-navigation>
		<db-navigation-item [areaPopup]="false">
			<ng-container *dbNavigationContent>
				<a routerLink="mypath">Sub-Navi-Item 1</a>
			</ng-container>
		</db-navigation-item>

		<db-navigation-item [areaPopup]="false">
			<ng-container *dbNavigationContent>
				<a routerLink="mypath">Sub-Navi-Item 2</a>
			</ng-container>
		</db-navigation-item>
	</ng-container>
</db-navigation-item>
```
