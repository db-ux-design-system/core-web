## Angular

For installation and configuration, see [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components).

Use `DBFooter` inside `DBPage variant="fixed"`. Unmarked content is projected into the main area; add the `meta` attribute to legal and other meta content.

```ts app.component.ts
import { Component } from "@angular/core";
import { DBFooter, DBLink, DBPage } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [DBFooter, DBLink, DBPage],
	template: `
		<db-page variant="fixed">
			<main>Page content</main>
			<db-footer width="medium">
				<nav aria-label="Footer navigation">
					<ul>
						<li><db-link href="/about">About us</db-link></li>
						<li><db-link href="/contact">Contact</db-link></li>
					</ul>
				</nav>
				<nav meta aria-label="Legal navigation">
					<ul>
						<li><db-link href="/privacy">Privacy</db-link></li>
						<li><db-link href="/imprint">Imprint</db-link></li>
					</ul>
				</nav>
			</db-footer>
		</db-page>
	`
})
export class AppComponent {}
```

`showMain`, `showMeta`, and `showCopyright` default to `true` and accept Angular property bindings, for example `[showMain]="false"`. Use `id` and `class` for root attributes. `width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The footer and both visual areas always remain full width.
