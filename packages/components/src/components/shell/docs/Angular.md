## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import { DBShell, DBControlPanelDesktop } from '@db-ux/ngx-core-components';

@Component({
	// ...
	imports: [
		// ...,
		DBShell, DBControlPanelDesktop
    ],
	// ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-shell>
	<db-control-panel-desktop>
		<db-control-panel-brand brand>My App</db-control-panel-brand>
		<!-- Navigation goes here -->
	</db-control-panel-desktop>
	<db-shell-content>Main Content</db-shell-content>
</db-shell>
```

### Add a footer

`db-shell` lays its children out in a grid with areas for the control panel, the sub-navigation, and the content only. There is no footer area, so a footer must not be a direct child of `db-shell` — it would be auto-placed by the grid instead of ending up below the content. Put it in the `end-slot` of `db-shell-content`:

```html app.component.html
<!-- app.component.html -->
<db-shell>
	<db-control-panel-desktop>
		<db-control-panel-brand brand>My App</db-control-panel-brand>
		<!-- Navigation goes here -->
	</db-control-panel-desktop>
	<db-shell-content
		>Main Content
		<db-footer end-slot width="medium">
			<db-footer-meta copyright="My Company"></db-footer-meta>
		</db-footer>
	</db-shell-content>
</db-shell>
```

With the default `variant="auto"` the whole content area scrolls, so the footer scrolls out of view and is pushed to the bottom edge whenever the content is shorter than the viewport. With `variant="fixed"` only `main` scrolls, so the footer stays visible. The same slot also takes any other content that should sit below `main`, for example a cookie banner. Use `start-slot` for content above `main`.
