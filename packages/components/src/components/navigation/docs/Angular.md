## Angular

For general installation and configuration look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBNavigation } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBNavigation, DBNavigationItem, NavigationContentDirective],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->

<db-navigation>
	<db-navigation-item>
		<ng-container sub-navigation>
			<db-navigation-item>
				<ng-container *dbNavigationContent>
					Sub-Navi-Item 1
				</ng-container>
				<ng-container sub-navigation>
					<db-navigation-item>
						<ng-container *dbNavigationContent>
							<a href="#" aria-current="page"
								>Sub-Sub-Navi-Item 1</a
							>
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
	<db-navigation-item icon="user">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 2</a>
		</ng-container>
	</db-navigation-item>
	<db-navigation-item [disabled]="true">
		<ng-container *dbNavigationContent>
			<a href="#">Navi-Item 3</a>
		</ng-container>
	</db-navigation-item>
</db-navigation>
```

### Angular Router and active state handling

We recommend using the automatic [integration with the Angular Router](https://angular.dev/best-practices/a11y#active-links-identification). This is way more elegant than setting the aria attribute to the anchor yourself.

The component first needs to import the `RouterLink` and `RouterLinkActive` directives.

For other purposes, `NavigationItems` themselves can also be set to active with their prop `[active]="true"`. However, this does not guarantee correct a11y.

```ts app.component.ts
// app.component.ts
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DBMainNavigation } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [
	// ...
	RouterLink,
	RouterLinkActive,
	DBMainNavigation
  ],
  // ...
})
```

Now you can use the Angular Routers `routerLink` directive to define your targets.
The active style is automatically set once an item receives the `aria-current="page"` attribute.

```html app.component.html
<!-- app.component.html -->

<db-navigation>
	<db-navigation-item>
		<ng-container *dbNavigationContent>
			<a
				routerLink="/"
				ariaCurrentWhenActive="page"
				[routerLinkActiveOptions]="{ exact: true }"
			>
				Home
			</a>
		</ng-container>
	</db-navigation-item>
	<db-navigation-item>
		<ng-container *dbNavigationContent> Demo Pages </ng-container>
		<ng-container sub-navigation>
			<db-navigation-item>
				<ng-container *dbNavigationContent>
					<a routerLink="/demo/1" ariaCurrentWhenActive="page">
						Demo Page 1
					</a>
				</ng-container>
				<ng-container *dbNavigationContent>
					<a routerLink="/demo/2" ariaCurrentWhenActive="page">
						Demo Page 2
					</a>
				</ng-container>
			</db-navigation-item>
		</ng-container>
	</db-navigation-item>
</db-navigation>
```
