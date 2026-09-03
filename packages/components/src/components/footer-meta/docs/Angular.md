## Angular

`DBFooterMeta` provides the secondary visual area inside `DBFooter`. It is semantically neutral and does not create a navigation landmark. Wrap navigational content in a labelled `nav`, or provide other suitable secondary content such as contact information. Its `copyright` text is optional.

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
