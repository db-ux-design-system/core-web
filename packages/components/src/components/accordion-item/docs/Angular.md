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

#### With Content Projection

```html app.component.html
<!-- app.component.html -->
<db-accordion-item>
	<ng-container *title>Title</ng-container>
	Content
</db-accordion-item>
```

#### With attributes

```html app.component.html
<!-- app.component.html -->
<db-accordion-item title="Title" content="Content"></db-accordion-item>
```
