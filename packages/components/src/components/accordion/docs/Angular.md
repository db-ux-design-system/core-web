## Angular

For general installation and configuration look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBAccordionModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBAccordionModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-accordion>
	<db-accordion-item title="Item 1" content="Content 1"></db-accordion-item>
	<db-accordion-item title="Item 2" content="Content 2"></db-accordion-item>
	<db-accordion-item title="Item 3" content="Content 3"></db-accordion-item>
</db-accordion>
```
