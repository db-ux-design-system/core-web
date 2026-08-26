## Angular

`DBFooterMeta` provides the secondary visual area inside `DBFooter`. Its `copyright` text is optional.

```ts app.component.ts
import { DBFooter, DBFooterMeta } from "@db-ux/ngx-core-components";

@Component({
	imports: [DBFooter, DBFooterMeta],
	template: `<db-footer>
		<db-footer-meta copyright="© Example Company">
			<nav aria-label="Legal navigation">...</nav>
		</db-footer-meta>
	</db-footer>`
})
export class AppComponent {}
```
