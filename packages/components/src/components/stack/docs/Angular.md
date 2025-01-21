<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBStack } from '@db-ui/ngx-components';

@Component({
  // ...
	standalone: true,
  imports: [..., DBStack],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-stack>
	<span>Test 1</span>
	<span>Test 2</span>
	<span>Test 3</span>
</db-stack>
```
