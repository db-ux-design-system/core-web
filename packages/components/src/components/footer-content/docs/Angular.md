## Angular

`DBFooterContent` provides the primary visual area and is intended for use inside `DBFooter`.

```ts app.component.ts
import { DBFooter, DBFooterContent } from "@db-ux/ngx-core-components";

@Component({
	imports: [DBFooter, DBFooterContent],
	template: `<db-footer>
		<db-footer-content>
			<nav aria-label="Footer navigation">...</nav>
		</db-footer-content>
	</db-footer>`
})
export class AppComponent {}
```
