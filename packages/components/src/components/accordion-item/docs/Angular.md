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

#### With Content Projection

```html app.component.html
<!-- app.component.html -->
<db-accordion>
	<db-accordion-item>
		<ng-container *headline>Title</ng-container>
		Content
	</db-accordion-item>
</db-accordion>
```

#### With attributes

```html app.component.html
<!-- app.component.html -->
<db-accordion>
	<db-accordion-item
		headlinePlain="Title"
		content="Content"
	></db-accordion-item>
</db-accordion>
```
