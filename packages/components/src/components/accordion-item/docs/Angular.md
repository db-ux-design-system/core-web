## Angular

For general installation and configuration look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.module.ts
//app.module.ts
import { DBAccordionItemModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBAccordionItemModule],
  ...
})

```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-accordion-item>AccordionItem</db-accordion-item>
```
