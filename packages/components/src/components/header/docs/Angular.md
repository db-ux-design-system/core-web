## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import {
	DBHeader,
	NavigationDirective,
	SecondaryActionDirective,
	MetaNavigationDirective
} from '@db-ux/ngx-core-components';

@Component({
  // ...
  imports: [
	// ...,
	DBHeader,
    NavigationDirective, // Optional: If you want to use a Navigation
	SecondaryActionDirective, // Optional: If you want to use ActionBar
	MetaNavigationDirective, // Optional: If you want to use MetaNavigation
  ],
  // ...
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
	<db-navigation *dbNavigation>
		<!-- https://github.com/db-ux-design-system/core-web/blob/main/packages/components/src/components/navigation/docs/Angular.md -->
	</db-navigation>
	<ng-container *dbMetaNavigation>
		<DBLink href="#">Imprint</DBLink>
		<DBLink href="#">Help</DBLink>
	</ng-container>
	<ng-container primary-action>
		<DBButton icon="magnifying_glass" variant="ghost" [noText]="true">
			Search
		</DBButton>
	</ng-container>
	<ng-container *dbSecondaryAction>
		<DBButton icon="x_placeholder" variant="ghost" [noText]="true">
			Profile
		</DBButton>
		<DBButton icon="alert" variant="ghost" [noText]="true">
			Notification
		</DBButton>
		<DBButton icon="help" variant="ghost" [noText]="true"> Help </DBButton>
	</ng-container>
</db-header>
```
