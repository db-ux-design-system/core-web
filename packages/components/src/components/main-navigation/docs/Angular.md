## Angular

For general installation and configuration look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBMainNavigationModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBMainNavigationModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->

<db-main-navigation>
	<db-navigation-item [active]="true">
		<ng-container sub-navigation>
			<db-navigation-item [active]="true">
				<ng-container *dbNavigationContent>
					Sub-Navi-Item 1
				</ng-container>
				<ng-container sub-navigation>
					<db-navigation-item [active]="true">
						<ng-container *dbNavigationContent>
							<a href="#">Sub-Sub-Navi-Item 1</a>
						</ng-container>
					</db-navigation-item>
					<db-navigation-item>
						<ng-container *dbNavigationContent>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</ng-container>
					</db-navigation-item>
				</ng-container>
			</db-navigation-item>
			<db-navigation-item>
				<ng-container *dbNavigationContent>
					<a href="#">Sub-Navi-Item 2</a>
				</ng-container>
			</db-navigation-item>
		</ng-container>
		<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>
	</db-navigation-item>
	<db-navigation-item icon="account">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 2</a>
		</ng-container>
	</db-navigation-item>
	<db-navigation-item [disabled]="true">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 3</a>
		</ng-container>
	</db-navigation-item>
</db-main-navigation>
```
