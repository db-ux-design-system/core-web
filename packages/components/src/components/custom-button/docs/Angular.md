## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBCustomButton } from '@db-ux/ngx-core-components';

@Component({
  // ...
  imports: [..., DBCustomButton],
  standalone: true
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-custom-button><button type="button">CustomButton</button></db-custom-button>
```
