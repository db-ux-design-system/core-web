## Angular

For installation and configuration, see [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components).

Compose `DBFooterContent` and `DBFooterMeta` inside `DBFooter`. `DBFooterMeta` is semantically neutral and accepts navigation, contact information, or other secondary content. It does not create a navigation landmark, so wrap navigational content in a labelled `nav`. Omit either subcomponent when that visual area is not needed. Copyright is opt-in through `DBFooterMeta`.

Place the footer in the `end-slot` of `db-shell-content`. `db-shell` lays its children out in a grid with areas for the control panel, the sub-navigation, and the content only — it has no footer area. A `db-footer` placed as a direct child of `db-shell` is therefore auto-placed by the grid and does not end up below the content.

```ts app.component.ts
import { Component } from "@angular/core";
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBFooter,
	DBFooterContent,
	DBFooterMeta,
	DBLink,
	DBShell,
	DBShellContent
} from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [
		DBControlPanelBrand,
		DBControlPanelDesktop,
		DBFooter,
		DBFooterContent,
		DBFooterMeta,
		DBLink,
		DBShell,
		DBShellContent
	],
	template: ` <db-shell>
		<db-control-panel-desktop>
			<db-control-panel-brand brand>My App</db-control-panel-brand>
			<!-- Navigation goes here -->
		</db-control-panel-desktop>
		<db-shell-content
			>Page content
			<db-footer end-slot width="medium">
				<db-footer-content
					><nav aria-label="Footer navigation">
						<ul>
							<li>
								<db-link wrap href="/about">About us</db-link>
							</li>
							<li>
								<db-link wrap href="/contact">Contact</db-link>
							</li>
						</ul>
					</nav></db-footer-content
				>
				<db-footer-meta copyright="Example Company"
					><nav aria-label="Legal navigation">
						<ul>
							<li>
								<db-link wrap href="/privacy">Privacy</db-link>
							</li>
							<li>
								<db-link wrap href="/imprint">Imprint</db-link>
							</li>
						</ul>
					</nav></db-footer-meta
				>
			</db-footer>
		</db-shell-content>
	</db-shell>`
})
export class AppComponent {}
```

The `variant` of `db-shell-content` decides how the footer behaves while scrolling. With the default `auto` the whole content area scrolls, so the footer scrolls out of view and is pushed to the bottom edge whenever the content is shorter than the viewport. With `fixed` only `main` scrolls, so the footer stays visible.

Use `id` and `class` on each component as needed. `width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The footer and both visual areas always remain full width.
