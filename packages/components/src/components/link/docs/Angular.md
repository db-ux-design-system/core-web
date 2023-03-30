## Angular

Load SCSS globally somewhere in your app:

```
@use "@db-ui/foundations/build/scss/variables.global" as *;
@use "@db-ui/components/build/styles/db-ui-42-webpack" as *;
@use "@db-ui/foundations/build/scss/color-classes" as *;

```

Load component:

```
import { DBLinkModule } from '@db-ui/ngx-components';

@NgModule({
  ...
  imports: [..., DBLinkModule],
  ...
})

```

Use component in template:

```
<db-link variant="primary">Link</db-link>
```
