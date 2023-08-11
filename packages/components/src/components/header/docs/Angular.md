## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBHeaderModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  declarations: [
        ...,
	NavigationDirective, // Optional: If you want to use a Navigation
	ActionBarDirective, // Optional: If you want to use ActionBar
	MetaNavigationDirective, // Optional: If you want to use MetaNavigation
  ],
  imports: [..., DBHeaderModule],
  ...
})

```

### Use component

#### Simple

```html app.component.html
<!-- app.component.html -->
<db-header>
	<db-brand brand>Header</db-brand>
</db-header>
```

#### Full

```ts app.component.ts
// File: app.component.ts

import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	drawerOpen = false;

	toggleDrawer = (open: boolean) => {
		this.drawerOpen = open;
	};
}
```

```html app.component.html
<!-- app.component.html -->
<db-header [drawerOpen]="drawerOpen" (onToggle)="toggleDrawer($event)">
	<db-brand brand>My Awesome App</db-brand>
	<db-main-navigation *dbNavigation>
		<!-- https://github.com/db-ui/mono/blob/main/packages/components/src/components/main-navigation/docs/Angular.md -->
	</db-main-navigation>
	<ng-container *dbMetaNavigation>
		<DBLink href="#">Imprint</DBLink>
		<DBLink href="#">Help</DBLink>
	</ng-container>
	<ng-container call-to-action>
		<DBButton icon="search" variant="text" [noText]="true">
			Search
		</DBButton>
	</ng-container>
	<ng-container *dbActionBar>
		<DBButton icon="account" variant="text" [noText]="true">
			Profile
		</DBButton>
		<DBButton icon="alert" variant="text" [noText]="true">
			Notification
		</DBButton>
		<DBButton icon="help" variant="text" [noText]="true"> Help </DBButton>
	</ng-container>
</db-header>
```
