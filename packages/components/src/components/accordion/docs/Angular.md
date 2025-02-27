## Angular

For general installation and configuration look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBAccordion, DBAccordionItem } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBAccordion, DBAccordionItem],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-accordion>
	<db-accordion-item
		headlinePlain="Item 1"
		content="Content 1"
	></db-accordion-item>
	<db-accordion-item
		headlinePlain="Item 2"
		content="Content 2"
	></db-accordion-item>
	<db-accordion-item
		headlinePlain="Item 3"
		content="Content 3"
	></db-accordion-item>
</db-accordion>
```
