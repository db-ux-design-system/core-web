<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBSection } from '@db-ux/ngx-core-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBSection],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-section variant="full">Section</db-section>
```
