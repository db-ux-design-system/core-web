## Angular

For general installation and configuration take a look at
the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBTag } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBTag],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-tag><db-button>Tag as Button</db-button></db-tag>
<db-tag>
	<db-link> Tag as Link </db-link>
</db-tag>
<db-tag><db-checkbox>Tag as Checkbox</db-checkbox></db-tag>
<db-tag><db-radio>Tag as Radio</db-radio></db-tag>
<db-tag>Static Tag</db-tag>
<db-tag [overflow]="true"><span>Static Tag with overflow</span></db-tag>
```
