<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
//app.component.ts
import { DBPage, DBHeader } from '@db-ui/ngx-components';

@Component({
	// ...
	imports: [
		// ...,
		DBPage, DBHeader
    ],
	// ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-page>
	<db-header header>...</db-header>
	<main class="db-main">Main Page</main>
</db-page>
```
