## Angular

For general installation and configuration look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBMainNavigation } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [
	// ...,
    DBMainNavigation
  ],
  // ...
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
</db-main-navigation>
```

### Angular Router and active state handling

You can set the property `active` to a boolean value as in the example above.
It will cause the navigation item to render in active style and implicitly
set `aria-current="page"` to the list element.

The component will also check for child element set to `aria-current="page"`.
Such elements are also displayed in active state.
This makes the component [integration with the Angular Router](https://angular.dev/best-practices/a11y#active-links-identification) way more elegant
compared to the first variant.

The component first needs to import the `RouterLink` and `RouterLinkActive` directives.

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

<db-main-navigation>
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
</db-main-navigation>
```
