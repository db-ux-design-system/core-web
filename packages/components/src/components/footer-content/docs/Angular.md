## Angular

`DBFooterContent` provides the primary visual area and is intended for use inside `DBFooter`. Lists lay out as a single line, which fits up to seven links. From eight links onward, group them by topic and give each group a unique heading naming its content; such a group lays its list out vertically.

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
