## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBTag } from '@db-ux/ngx-core-components';

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
<db-tag><button type="button">Tag as Button</button></db-tag>
<db-tag>
	<a href="#"> Tag as Link </a>
</db-tag>
<db-tag
	><label for="checkbox01"
		><input id="checkbox01" type="checkbox" />Tag as Checkbox</label
	></db-tag
>
<db-tag
	><label for="radio01"
		><input name="radio01" id="radio01" type="radio" />Tag as Radio</label
	></db-tag
>
<db-tag>Static Tag</db-tag>
<db-tag [overflow]="true"><span>Static Tag with overflow</span></db-tag>
```
