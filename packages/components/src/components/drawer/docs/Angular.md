<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### General

If you use `width !== full` you are able to overwrite the `max-width` with `--db-drawer-max-width:` CSS variable.

### Load component

```ts app.component.ts
// app.component.ts
import { DBDrawer } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBDrawer],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->

<db-button (click)="toggleDrawer(true)"> Open me </db-button>
<db-drawer [open]="openDrawer" (onClose)="toggleDrawer(false)">
	<header drawer-header>Optional drawer header</header>
	My Drawer content
</db-drawer>
```

```ts app.component.ts
// app.component.ts
export class AppComponent {
	openDrawer: boolean = false;
	toggleDrawer = (open: boolean) => {
		this.openDrawer = open;
	};
}
```
