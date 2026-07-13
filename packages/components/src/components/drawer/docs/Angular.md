## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### General

If you use `containerSize !== full` you are able to overwrite the `max-width` with `--db-drawer-max-width:` CSS variable.

### Load component

```ts app.component.ts
// app.component.ts
import { DBDrawer, DBDrawerHeader } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBDrawer, DBDrawerHeader],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->

<db-button (click)="toggleDrawer(true)"> Open me </db-button>
<db-drawer [open]="openDrawer" (onClose)="toggleDrawer(false)">
	<db-drawer-header header closeButtonText="Close">
		Drawer Title
	</db-drawer-header>
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
