## Angular

Load SCSS globally within `styles.scss` in your app:

```scss
@use "@db-ui/components/build/styles/db-ui-42-webpack" as *;
```

Load component:

```typescript
import { DBCardModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBCardModule],
  ...
})

```

Use component in template:

```html
<DBCard>Card content</DBCard>
```
