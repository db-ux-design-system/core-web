## Angular

For installation and configuration, see [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components).

Compose `DBFooterContent` and `DBFooterMeta` inside `DBFooter`. Omit either subcomponent when that visual area is not needed. Copyright is opt-in through `DBFooterMeta`.

```ts app.component.ts
import { Component } from "@angular/core";
import {
	DBFooter,
	DBFooterContent,
	DBFooterMeta,
	DBLink,
	DBPage
} from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [DBFooter, DBFooterContent, DBFooterMeta, DBLink, DBPage],
	template: ` <db-page variant="fixed"
		>Page content
		<db-footer footer width="medium">
			<db-footer-content
				><nav aria-label="Footer navigation">
					<ul>
						<li><db-link wrap href="/about">About us</db-link></li>
						<li><db-link wrap href="/contact">Contact</db-link></li>
					</ul>
				</nav></db-footer-content
			>
			<db-footer-meta copyright="© Example Company"
				><nav aria-label="Legal navigation">
					<ul>
						<li><db-link wrap href="/privacy">Privacy</db-link></li>
						<li><db-link wrap href="/imprint">Imprint</db-link></li>
					</ul>
				</nav></db-footer-meta
			>
		</db-footer>
	</db-page>`
})
export class AppComponent {}
```

Use `id` and `class` on each component as needed. `width` accepts `full`, `large`, `medium`, or `small`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The footer and both visual areas always remain full width.
