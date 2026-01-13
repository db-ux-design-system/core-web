# Migration DBPage, DBHeader, DBNavigation

## Original Example

### meta-navigation.component.ts

```ts
import { Component } from "@angular/core";
import { DBLink } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-meta-navigation",
	imports: [DBLink],
	standalone: true,
	template: `
		<db-link href="#">Imprint</db-link>
		<db-link href="#">Help</db-link>
	`
})
export class MetaNavigationComponent {}
```

### primary-actions.component.ts

```ts
import { Component } from "@angular/core";
import { DBButton } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-primary-actions",
	imports: [DBButton],
	standalone: true,
	template: `
		<db-button icon="magnifying_glass" variant="ghost" [noText]="true">
			Search
		</db-button>
	`
})
export class PrimaryActionsComponent {}
```

### secondary-actions.component.ts

```ts
import { Component } from "@angular/core";
import { DBButton } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-secondary-actions",
	imports: [DBButton],
	standalone: true,
	template: `
		<db-button icon="x_placeholder" variant="ghost" [noText]="true">
			Profile
		</db-button>
		<db-button icon="alert" variant="ghost" [noText]="true">
			Notification
		</db-button>
		<db-button icon="help" variant="ghost" [noText]="true">
			Help
		</db-button>
	`
})
export class SecondaryActionsComponent {}
```

### navigation.component.ts

```ts
import { Component } from "@angular/core";
import {
	DBNavigation,
	DBNavigationItem,
	NavigationContentDirective
} from "@db-ux/ngx-core-components";

@Component({
	selector: "app-navigation",
	imports: [DBNavigation, DBNavigationItem, NavigationContentDirective],
	standalone: true,
	template: `
		<db-navigation>
			<db-navigation-item>
				<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>
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
			</db-navigation-item>
			<db-navigation-item icon="x_placeholder">
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
	`
})
export class NavigationComponent {}
```

### app.component.ts

```ts
import { Component } from "@angular/core";
import {
	DBPage,
	DBHeader,
	NavigationDirective,
	SecondaryActionDirective,
	MetaNavigationDirective
} from "@db-ux/ngx-core-components";

import { MetaNavigationComponent } from "./meta-navigation.component";
import { PrimaryActionsComponent } from "./primary-actions.component";
import { SecondaryActionsComponent } from "./secondary-actions.component";
import { NavigationComponent } from "./navigation.component";

@Component({
	selector: "app-root",
	imports: [
		DBPage,
		DBHeader,
		NavigationDirective,
		SecondaryActionDirective,
		MetaNavigationDirective,
		MetaNavigationComponent,
		PrimaryActionsComponent,
		SecondaryActionsComponent,
		NavigationComponent
	],
	standalone: true,
	template: `
		<db-page fadeIn docuementOverflow="hidden" variant="fixed">
			<db-header
				header
				[drawerOpen]="drawerOpen"
				(onToggle)="toggleDrawer($event)"
			>
				<db-brand brand>My Awesome App</db-brand>
				<app-meta-navigation *dbMetaNavigation></app-meta-navigation>
				<app-primary-actions primary-action></app-primary-actions>
				<app-secondary-actions
					*dbSecondaryAction
				></app-secondary-actions>
				<app-navigation *dbNavigation></app-navigation>
			</db-header>
			Main Page
		</db-page>
	`
})
export class AppComponent {
	drawerOpen = false;

	toggleDrawer = (open: boolean) => {
		this.drawerOpen = open;
	};
}
```

## Refactored Example

### meta-navigation.component.ts

```ts
import { Component } from "@angular/core";
import {
	DBLink,
	DBControlPanelMetaNavigation // new
} from "@db-ux/ngx-core-components";

@Component({
	selector: "app-meta-navigation",
	imports: [DBLink, DBControlPanelMetaNavigation],
	standalone: true,
	template: `
		/* added db-control-panel-meta-navigation */
		<db-control-panel-meta-navigation>
			<db-link href="#">Imprint</db-link>
			<db-link href="#">Help</db-link>
		</db-control-panel-meta-navigation>
	`
})
export class MetaNavigationComponent {}
```

### primary-actions.component.ts

```ts
import { Component } from "@angular/core";
import {
	DBButton,
	DBControlPanelPrimaryActions // new
} from "@db-ux/ngx-core-components";

@Component({
	selector: "app-primary-actions",
	imports: [DBButton, DBControlPanelPrimaryActions],
	standalone: true,
	template: `
		/* added db-control-panel-primary-actions */
		<db-control-panel-primary-actions>
			<db-button icon="magnifying_glass" variant="ghost" [noText]="true">
				Search
			</db-button>
		</db-control-panel-primary-actions>
	`
})
export class PrimaryActionsComponent {}
```

### secondary-actions.component.ts

```ts
import { Component } from "@angular/core";
import {
	DBButton,
	DBControlPanelSecondaryActions // new
} from "@db-ux/ngx-core-components";

@Component({
	selector: "app-secondary-actions",
	imports: [DBButton, DBControlPanelSecondaryActions],
	standalone: true,
	template: `
		/* added db-control-panel-secondary-actions */
		<db-control-panel-secondary-actions>
			<db-button icon="x_placeholder" variant="ghost" [noText]="true">
				Profile
			</db-button>
			<db-button icon="alert" variant="ghost" [noText]="true">
				Notification
			</db-button>
			<db-button icon="help" variant="ghost" [noText]="true">
				Help
			</db-button>
		</db-control-panel-secondary-action>
	`
})
export class SecondaryActionsComponent {}
```

### navigation.component.ts

```ts
import { Component } from "@angular/core";
import {
	DBNavigation,
	DBNavigationItem,
	DBNavigationItemGroup // new
	/*NavigationContentDirective*/
} from "@db-ux/ngx-core-components";

@Component({
	selector: "app-navigation",
	imports: [DBNavigation, DBNavigationItem, DBNavigationItemGroup],
	standalone: true,
	template: `
		<db-navigation>
			<db-navigation-item-group text="Navi-Item 1">
				/* replaced DBNavigationItem with subNavigation */
				<db-navigation-item-group text="Sub-Navi-Item 1">
					/* replaced DBNavigationItem with subNavigation */
					<db-navigation-item>
						<a href="#" aria-current="page">
							Sub-Sub-Navi-Item 1
						</a>
					</db-navigation-item>
					<db-navigation-item>
						<a href="#">Sub-Sub-Navi-Item 2</a>
					</db-navigation-item>
				</db-navigation-item-group>
				<db-navigation-item>
					<a href="#">Sub-Navi-Item 2</a>
				</db-navigation-item>
			</db-navigation-item-group>
			<db-navigation-item icon="x_placeholder">
				<a href="#">Navi-Item 2</a>
			</db-navigation-item>
			<db-navigation-item [disabled]="true">
				<a href="#">Navi-Item 3</a>
			</db-navigation-item>
		</db-navigation>
	`
})
export class NavigationComponent {}
```

### app.component.ts

```ts
import { Component } from "@angular/core";
import {
	DBShell, // previously: DBPage
	DBControlPanelDesktop, // previously: DBHeader
	DBControlPanelMobile, // previously: DBHeader
	DBControlPanelBrand // previously: DBBrand
	/*	NavigationDirective,
	SecondaryActionDirective,
	MetaNavigationDirective*/
} from "@db-ux/ngx-core-components";

import { MetaNavigationComponent } from "./meta-navigation.component";
import { PrimaryActionsComponent } from "./primary-actions.component";
import { SecondaryActionsComponent } from "./secondary-actions.component";
import { NavigationComponent } from "./navigation.component";

@Component({
	selector: "app-root",
	imports: [
		DBShell,
		DBControlPanelDesktop,
		DBControlPanelMobile,
		DBControlPanelBrand,
		MetaNavigationComponent,
		PrimaryActionsComponent,
		SecondaryActionsComponent,
		NavigationComponent
	],
	standalone: true,
	template: `
		<db-shell fadeIn>
			<db-control-panel-desktop
				control-panel-desktop
			>
				<db-control-panel-brand brand>My Awesome App</db-brand>
				<app-meta-navigation meta-navigation></app-meta-navigation>
				<app-primary-actions primary-actions></app-primary-actions>
				<app-secondary-actions secondary-actions></app-secondary-actions>
				<app-navigation></app-navigation>
			</db-control-panel-desktop>
			<db-control-panel-mobile
				control-panel-mobile
			>
				<db-control-panel-brand brand>My Awesome App</db-brand>
				<app-meta-navigation meta-navigation></app-meta-navigation>
				<app-primary-actions primary-actions></app-primary-actions>
				<app-secondary-actions secondary-actions></app-secondary-actions>
				<app-navigation></app-navigation>
			</db-control-panel-mobile>
			Main Page
		</db-page>
	`
})
export class AppComponent {
	// No need for own drawer state
	/*drawerOpen = false;

	toggleDrawer = (open: boolean) => {
		this.drawerOpen = open;
	};*/
}
```
